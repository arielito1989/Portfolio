import nodemailer from 'nodemailer';

// Simple rate limiting store (in-memory)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 emails per minute per IP

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  
  // Clean old requests
  const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
}

function sanitizeInput(input) {
  if (!input) return '';
  return input
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .substring(0, 5000); // Limit length
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ 
      message: 'Too many requests. Please try again later.' 
    });
  }

  const { name, email, message, website } = req.body;

  // Honeypot check - if website field is filled, it's a bot
  if (website) {
    console.log('Bot detected via honeypot');
    return res.status(200).json({ message: 'Message sent successfully' }); // Fake success
  }

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Sanitize inputs
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitizedEmail)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check for spam keywords
  const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'buy now', 'limited offer'];
  const messagelower = sanitizedMessage.toLowerCase();
  if (spamKeywords.some(keyword => messageLower.includes(keyword))) {
    console.log('Spam detected via keywords');
    return res.status(200).json({ message: 'Message sent successfully' }); // Fake success
  }

  // Validate message length
  if (sanitizedMessage.length < 10) {
    return res.status(400).json({ message: 'Message too short' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: sanitizedEmail,
    subject: `Portfolio Contact: ${sanitizedName}`,
    text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #10b981;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #10b981; white-space: pre-wrap;">${sanitizedMessage}</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Sent from: ${ip}<br>
            Time: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
}