import { useEffect, useState } from "react";


function getSavedForm(key: string, initialValue: any) {
    const savedPage = JSON.parse(sessionStorage.getItem(key)!)
    if (savedPage) return savedPage

    if (initialValue instanceof Function) return initialValue()
    return initialValue

}
export default function useLocalSession(name: string, initialValue: any) {
    const [page, setPage] = useState(() => getSavedForm(name, initialValue))

    useEffect(() => {

        sessionStorage.setItem(name, JSON.stringify(page))
    }, [page])

    return [page, setPage]
}