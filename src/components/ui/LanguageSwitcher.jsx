import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('en')} className={`p-2 rounded-full ${i18n.language === 'en' ? 'bg-green-500' : 'bg-gray-800'} text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white`}>EN</button>
      <button onClick={() => changeLanguage('es')} className={`p-2 rounded-full ${i18n.language === 'es' ? 'bg-green-500' : 'bg-gray-800'} text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white`}>ES</button>
    </div>
  );
};

export default LanguageSwitcher;
