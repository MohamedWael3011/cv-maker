import { Progress } from "@/components/ui/progress";
import { PersonalInfo } from "./PersonalInfo";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Education from "./Education";
import useLocalSession from "../hooks/useLocalSession"
import { Link } from "lucide-react";
interface FormData {
    FirstName: string,
    SecondName: string,
    JobTitle: string,
    City: string,
    Country: string,
    StreetName: string,
    Phone: string,
    email: string

}

export function ProgressForm() {
    /**
 * TODO: Handle Links
 * TODO: Make setPage cached in Local Session for restart
 * TODO: Make Form Logic
 * ! Welcome page => personal information => education => experience => skills => projects => hobbies
 */
    // const { register, handleSubmit } = useForm<FormData>()
    const [page, setPage] = useState(0)
    const DisplayPage: any = {
        0: <PersonalInfo />,
        1: <Education />
    }

    function nextPage() {
        setPage(prev => prev + 1)
        console.log(page)

    }
    function prevPage() {
        setPage(prev => prev - 1)
        console.log(page)
    }

    return (
        <>
            <div className="w-1/2 mx-auto">
                <Progress value={page * 20} />
            </div>
            {DisplayPage[page]}
            <div className="flex w-full justify-evenly text-black">
                <Button onClick={prevPage} disabled={page == 0} variant="outline">Previous</Button>
                <Button onClick={nextPage} variant="outline">Next</Button>

            </div>
        </>
    )
}