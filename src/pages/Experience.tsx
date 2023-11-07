import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "../hooks/FormContext"
import { useEffect } from "react";

export default function Experience() {
  const { register, ExpFields, ExpAppend, ExpRemove } = useFormContext();
  useEffect(() => {
    if (!ExpFields.length) {
      ExpAppend();
    }
  }, [ExpFields, ExpAppend]);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="p-5 w-4/5 h-[500px] text-white">
        <div className="h-4/5 overflow-auto">
          <form className="flex flex-col gap-2">
            {ExpFields.length &&
              ExpFields.map((field, index) => { // ! 4of a3ml append ezay DONE
                return (
                  <div className="my-3" key={field.id}>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="ExpJobTitle">Job Title</Label>
                        <Input type="text" id="ExpJobTitle" placeholder="e.g Eng" {...register(`experience.${index}.jobTitle`)} />
                      </div>
                      <div>
                        <Label htmlFor="Employer">Employer</Label>
                        <Input type="text" id="Employer" placeholder="e.g Amazon" {...register(`experience.${index}.employer`)} />
                      </div>
                    </div>
                    <Label className="mt-5" htmlFor="ExpLocation">Job Location</Label>
                    <Input type="text" id="ExpLocation" className="w-1/2" placeholder="e.g Durban" {...register(`experience.${index}.location`)} />
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <div>
                        <Label htmlFor="ExpStartDate">Start Date</Label>
                        <Input type="date" id="ExpStartDate" {...register(`experience.${index}.startDate`)} />
                      </div>
                      <div>
                        <Label htmlFor="ExpEndDate">End Date</Label>
                        <Input type="date" id="ExpEndDate" {...register(`experience.${index}.endDate`)} />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {ExpFields.length > 1 && <Button variant="outline" className="text-black p-2 m-2" onClick={() => ExpRemove(index)}>Remove</Button>}
                    </div>
                  </div>
                )
              }
              )}

          </form>
        </div>
        {ExpFields.length < 4 && <Button variant="outline" className="text-black p-2 m-2" onClick={() => { ExpAppend(); }}>Add Another Job</Button>}
      </div>

    </div>
  )
}
