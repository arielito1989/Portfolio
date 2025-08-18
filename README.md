# Portfolio de Ariel Nogueroles

Este es el código fuente del portfolio web de Ariel Nogueroles, un programador y estudiante de ciberseguridad. El objetivo de este proyecto es mostrar sus habilidades, experiencia y proyectos de una manera moderna y profesional.

## Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

- **Frontend:**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
- **Estilos:**
  - [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:**
  - [Framer Motion](https://www.framer.com/motion/)
- **Iconos:**
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Formularios:**
  - [React Hook Form](https://react-hook-form.com/)
- **Linting:**
  - [ESLint](https://eslint.org/)

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
portfolio/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── certificates.json
│   │   └── projects.json
│   ├── styles/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

- **`public`**: Contiene los archivos estáticos que no son procesados por Vite.
- **`src`**: Contiene el código fuente de la aplicación.
  - **`assets`**: Contiene imágenes y otros recursos.
  - **`components`**: Contiene los componentes de React, organizados en `layout`, `sections` y `ui`.
  - **`data`**: Contiene los archivos JSON con la información de los proyectos y certificados.
  - **`styles`**: Contiene los estilos globales (en este caso, principalmente la configuración de Tailwind CSS).
  - **`App.jsx`**: Es el componente principal de la aplicación.
  - **`main.jsx`**: Es el punto de entrada de la aplicación.
- **Archivos de configuración**: Contiene los archivos de configuración para Vite, Tailwind CSS, PostCSS y ESLint.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/arielito1989/portfolio.git
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd portfolio
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

### Ejecución

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo y la abrirá en [http://localhost:5173](http://localhost:5173).

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts:

- **`npm run dev`**: Inicia la aplicación en modo de desarrollo.
- **`npm run build`**: Compila la aplicación para producción.
- **`npm run lint`**: Ejecuta el linter (ESLint) para revisar el código.
- **`npm run preview`**: Inicia un servidor local para previsualizar la compilación de producción.

## Despliegue

Este proyecto está optimizado para ser desplegado en [Vercel](https://vercel.com/). Simplemente conecta tu repositorio de Git a Vercel y sigue las instrucciones para desplegar un proyecto de Vite. Vercel detectará automáticamente la configuración y desplegará el sitio.

## Configuración del Formulario de Contacto

Para que el formulario de contacto funcione, utiliza una **Vercel Serverless Function** que envía correos a través de un servicio SMTP. Se recomienda usar [SendGrid](https://sendgrid.com/), que ofrece un plan gratuito.

Una vez que tengas tu cuenta de SendGrid, necesitarás configurar las siguientes variables de entorno en tu proyecto de Vercel:

- `EMAIL_HOST`: El host SMTP de tu proveedor (ej. `smtp.sendgrid.net`).
- `EMAIL_PORT`: El puerto SMTP (ej. `587` o `465`).
- `EMAIL_USER`: Tu nombre de usuario de SMTP (generalmente `apikey` para SendGrid).
- `EMAIL_PASS`: Tu contraseña o API key de SMTP.
- `EMAIL_FROM`: La dirección de correo desde la que se enviarán los mensajes (debe ser una dirección verificada en tu proveedor).
- `EMAIL_TO`: La dirección de correo donde recibirás los mensajes del formulario.

Estas variables se deben configurar en el panel de control de tu proyecto en Vercel, en la sección `Settings > Environment Variables`.

## Hoja de Ruta

Aquí hay una lista de las mejoras planificadas para este proyecto. Cada vez que se complete una tarea, se marcará como finalizada.

### Rendimiento
- [x] Implementar carga diferida (Lazy Loading) para las imágenes.
- [x] Optimizar las imágenes para la web (compresión y formatos modernos).
- [x] Implementar división de código (Code Splitting) para las secciones.

### Accesibilidad (a11y)
- [x] Verificar y corregir el contraste de color.
- [x] Añadir texto alternativo descriptivo a todas las imágenes.
- [x] Asegurar que la navegación con teclado sea posible y visible.
- [x] Utilizar etiquetas HTML semánticas en todo el sitio.

### Calidad del Código
- [x] Añadir tipado con JSDoc o migrar a TypeScript.
- [x] Mover información sensible a variables de entorno.
- [x] Refactorizar y crear componentes más pequeños y reutilizables.

### SEO
- [x] Añadir meta tags descriptivos en `index.html`.
- [x] Implementar meta tags de Open Graph y Twitter Cards.
- [x] Crear un archivo `sitemap.xml`.

### Funcionalidades
- [x] Implementar un interruptor de modo claro/oscuro.
- [x] Añadir soporte para múltiples idiomas (internacionalización).
- [x] Crear una sección de blog.

### Mejoras de Diseño (UI/UX)
- [x] Refinar la jerarquía tipográfica para dar más peso al nombre.
- [x] Unificar el color de acento para una mayor coherencia.
- [x] Explorar un layout asimétrico para la sección de inicio.
- [x] Mejorar las animaciones con efectos escalonados (stagger).

### Mejoras Futuras
- [x] Mejorar la seguridad y UX del formulario de contacto.
  - [x] Investigar y elegir una solución anti-spam (ej. Honeypot, Cloudflare Turnstile).
  - [x] Implementar la solución anti-spam en el componente del formulario.
  - [x] Añadir feedback visual claro al usuario tras el envío (mensaje de éxito/error).
  - [x] Hacer que el mensaje de feedback desaparezca automáticamente tras unos segundos.
  - [x] Mover el foco del teclado al mensaje de feedback para mejorar la accesibilidad.
  - [x] Validar que el formulario sigue siendo accesible (a11y).

- [x] Mejorar y dinamizar la sección de "Home".
  - [x] Solucionar el recorte de la imagen de perfil.
  - [x] Añadir botones de Llamada a la Acción (CTA) ("Ver Proyectos" y "Descargar CV").
  - [x] Implementar un título animado con efecto de "máquina de escribir".
