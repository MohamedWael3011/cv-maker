import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  useFormContext } from "../hooks/FormContext"

export default function Education() {
    const {register} = useFormContext();
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="p-5 w-4/5 h-[500px] text-white">
                <form className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label htmlFor="SchoolName">School Name</Label>
                            <Input type="text" id="SchoolName" placeholder="e.g University of East London" {...register("schoolName")} />
                        </div>
                        <div>
                            <Label htmlFor="SchoolLocation">School Location</Label>
                            <Input type="text" id="SchoolLocation" placeholder="e.g London, UK" {...register("schoolLocation")} />
                        </div>
                    </div>
                    <Label className="mt-5" htmlFor="Degree">Degree</Label>
                    <Input type="text" id="Degree" className="w-1/2" placeholder="e.g Bachelor of Science" {...register("degree")} />
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div>
                            <Label htmlFor="FOStudy">Field of Study</Label>
                            <Input type="text" id="FOStudy" placeholder="e.g Computer Science"  {...register("studyField")}/>
                        </div>
                        <div>
                            <Label htmlFor="StartDate">Start Date</Label>
                            <Input type="date" id="StartDate" {...register("startDate")} />
                        </div>
                        <div>
                            <Label htmlFor="EndDate">End Date</Label>
                            <Input type="date" id="EndDate" {...register("endDate")} />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}
