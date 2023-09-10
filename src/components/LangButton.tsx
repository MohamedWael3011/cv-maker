import { Button } from "@/components/ui/LangButton"

type Props = {
    language: string
    selected: boolean
    changeLang: (lang: string) => void
}
export function LangButton(props: Props) {
    return (

        <Button onClick={() => props.changeLang(props.language)} className={`${props.selected ? "bg-slate-500" : ""}`} variant="ghost">{props.language}</Button>

    )
}