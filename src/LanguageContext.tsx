// LanguageContext.tsx
import React, { createContext, useState, useContext } from 'react';

type LanguageContextType = {
    selectedLanguage: string;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('EN');

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