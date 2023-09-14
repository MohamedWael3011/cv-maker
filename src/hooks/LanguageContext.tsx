// LanguageContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

type LanguageContextType = {
    selectedLanguage: string;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialState() {
    const lang = localStorage.getItem('lang')
    return lang ? JSON.parse(lang) : []
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(getInitialState());
    useEffect(() => {
        localStorage.setItem('lang', JSON.stringify(selectedLanguage))
    }, [selectedLanguage])

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const languageContext = useContext(LanguageContext);
    if (!languageContext) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return languageContext;
};