
import { WelcomePage } from './pages/WelcomePage'
import { LanguageProvider } from './LanguageContext';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { ProgressForm } from './pages/ProgressForm';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }

  });

function App() {

  return (
    <>
      <LanguageProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/build' element={<ProgressForm />} />

        </Routes>
      </LanguageProvider>

    </>
  )
}

export default App
