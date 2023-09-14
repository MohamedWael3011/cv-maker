import i18next from "i18next";
import { LangButton } from "./LangButton";
import { useLanguage } from "@/hooks/LanguageContext";
import { useEffect } from "react";


export function NavBar() {
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    useEffect(() => {
        i18next.changeLanguage(selectedLanguage.toLocaleLowerCase())
        document.body.dir = selectedLanguage == 'AR' ? 'rtl' : 'ltr'
    }, [selectedLanguage])
    function changeLanguage(lang: string) {
        setSelectedLanguage(lang)

    }
    return (
        <nav className='flex justify-end px- m-5' >
            <LangButton changeLang={changeLanguage} language='EN' selected={selectedLanguage == 'EN'} />
            <LangButton changeLang={changeLanguage} language='AR' selected={selectedLanguage == 'AR'} />
        </nav >
    )

}