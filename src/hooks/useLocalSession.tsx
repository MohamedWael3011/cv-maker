import { useEffect, useState } from "react";


function getSavedForm(key: string, initialValue: any) {
    const savedForm = JSON.parse(sessionStorage.getItem(key)!)
    if (savedForm) return savedForm

    if (initialValue instanceof Function) return initialValue()
    return initialValue

}
export default function useLocalSession(name: string, initialValue: any) {
    const [form, setForm] = useState(() => getSavedForm(name, initialValue))

    useEffect(() => {

        sessionStorage.setItem(name, JSON.stringify(form))
    }, [form])

    return [form, setForm]
}