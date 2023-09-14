import { Progress } from "@/components/ui/progress";
import { PersonalInfo } from "./PersonalInfo";
import { Button } from "@/components/ui/button";
import Education from "./Education";
import useLocalSession from "../hooks/useLocalSession"
import { useFormContext } from "../hooks/FormContext"
import Experience from "./Experience";

export function ProgressForm() {
    /**
 * TODO: Handle Links DONE
 * TODO: Make setPage cached in Local Session for restart DONE
 * TODO: Make Form Logic
 * ! Welcome page => personal information => education => experience => skills => projects => hobbies
 */
    // const { register, handleSubmit } = useForm<FormData>()
    const [page, setPage] = useLocalSession("currentPage", 0)
    const { watch } = useFormContext();
    const DisplayPage: any = {
        0: <PersonalInfo />,
        1: <Education />,
        2: <Experience />
    }




    function nextPage() {
        setPage(page + 1)
        console.log(page)

    }
    function prevPage() {
        setPage(page - 1)
        console.log(page)
    }

    return (
        <>
            <div className="w-1/2 mx-auto">
                <Progress value={page * 20} />
            </div>
            {DisplayPage[page]}
            <div className="flex w-full justify-evenly text-black my-5">
                <Button onClick={prevPage} disabled={page == 0} variant="outline">Previous</Button>
                <Button onClick={nextPage} variant="outline">Next</Button>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </div>
        </>
    )
}