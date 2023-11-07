import ScaleInputText from "@/components/ScaleInputText";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/hooks/FormContext"
import { useEffect } from "react";

export default function Skills() {
  const { SkillFields, SkillAppend } = useFormContext();
  useEffect(() => {
    if (!SkillFields.length) {
      SkillAppend();
    }
  }, [SkillFields, SkillAppend]);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="p-5 w-4/5 h-[500px] text-white">
        <h1 className="text-2xl">What skills would you like to highlight?</h1>
        <div className="h-4/5 overflow-auto">
          <form className="flex flex-col gap-2">
            {SkillFields.length &&
              SkillFields.map((field, index) => { // ! 4of a3ml append ezay DONE
                return (
                  <div className="my-3" key={field.id}>
                    <div className="grid grid-cols-2 gap-5">
                      <ScaleInputText index={index} />
                    </div>
                  </div>
                )
              }
              )}
          </form>
        </div>
        {SkillFields.length < 4 && <Button variant="outline" className="text-black p-2 m-2" onClick={() => { SkillAppend(); }}>Add Another Skill</Button>}

      </div>
    </div>
  )
}
