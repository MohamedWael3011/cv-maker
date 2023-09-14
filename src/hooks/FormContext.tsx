// FormContext.tsx
import { useFieldArray, useForm } from "react-hook-form"
import React, { createContext, useContext } from 'react';

import useFormPersist from 'react-hook-form-persist'

type FormContextType = {
    fields: Record<"id", string>[]
    append: any
    prepend: any
    remove: any
    register: any
    watch: any
    control: any
};

type FormProviderProps = {
    children: React.ReactNode;
};

interface FormData {
    firstName: string
    secondName: string
    jobTitle: string
    city: string
    country: string
    streetName: string
    phone: string
    email: string
    schoolName: string
    schoolLocation: string
    degree: string
    studyField: string
    startDate: string
    endDate: string
    experience: any[] //[{}]

}
export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormContextProvider: React.FC<FormProviderProps> = ({ children }) => {
    const { watch, register, setValue, control } = useForm<FormData>({
        // defaultValues: { experience: [{ jobTitle: "", employer: "", location: "", startDate: "", endDate: "" }] }
    })
    const { fields, append, prepend, remove } = useFieldArray({
        name: "experience",
        control,

    })

    useFormPersist("formData", {
        watch,
        setValue,
        storage: window.sessionStorage, // default window.sessionStorage
    });

    return (
        <FormContext.Provider value={{ control, watch, fields, append, prepend, remove, register }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextType => {
    const formContext = useContext(FormContext);
    if (!formContext) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return formContext;
};