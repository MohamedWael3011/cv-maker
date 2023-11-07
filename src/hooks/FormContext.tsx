// FormContext.tsx
import { useFieldArray, useForm } from "react-hook-form"
import React, { createContext, useContext } from 'react';

import useFormPersist from 'react-hook-form-persist'

type FormContextType = {
    ExpFields: Record<"id", string>[]
    ExpAppend: any
    ExpRemove: any
    register: any
    watch: any
    control: any
    SkillFields: Record<"id", string>[]
    SkillAppend: any
    SkillRemove: any
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
    experience: any[], //[{}]
    skills: any[]

}
export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormContextProvider: React.FC<FormProviderProps> = ({ children }) => {
    const { watch, register, setValue, control } = useForm<FormData>({
        // defaultValues: { experience: [{ jobTitle: "", employer: "", location: "", startDate: "", endDate: "" }] }
    });
    const { fields: ExpFields, append: ExpAppend, remove: ExpRemove } = useFieldArray({
        name: "experience",
        control,

    });
    const { fields: SkillFields, append: SkillAppend, remove: SkillRemove } = useFieldArray({
        name: "skills",
        control,

    });
    useFormPersist("formData", {
        watch,
        setValue,
        storage: window.sessionStorage, // default window.sessionStorage
    });

    return (
        <FormContext.Provider value={{ control, watch, ExpFields, ExpAppend, ExpRemove, SkillFields, SkillAppend, SkillRemove, register }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextType => {
    const formContext = useContext(FormContext);
    if (!formContext) {
        throw new Error('useFormContext must be used within a FormContextProvider');
    }
    return formContext;
};