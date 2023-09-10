import i18next from "i18next";
import { LangButton } from "./LangButton";
import { useLanguage } from "@/LanguageContext";


export function NavBar() {
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    function changeLanguage(lang: string) {
        setSelectedLanguage(lang)
        i18next.changeLanguage(lang.toLocaleLowerCase())
        document.body.dir = lang == 'AR' ? 'rtl' : 'ltr'
    }
    return (
        <nav className='flex justify-end px- m-5' >
            <LangButton changeLang={changeLanguage} language='EN' selected={selectedLanguage == 'EN'} />
            <LangButton changeLang={changeLanguage} language='AR' selected={selectedLanguage == 'AR'} />
        </nav >
    )

}