import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { useFormContext } from "@/hooks/FormContext";
import { Button } from "./ui/button";
import { Controller } from "react-hook-form";

interface ScaleInputTextProps {
    index: number;
}

export default function ScaleInputText({ index }: ScaleInputTextProps) {
    const { SkillRemove, SkillFields, register, control } = useFormContext();

    return (
        <div className="flex">
            <Controller
                name={`skills.${index}.skillLevel`}
                control={control}
                render={({ field: { onChange } }) => (
                    <Select onValueChange={onChange}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Competent">Competent</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                            <SelectItem value="Proficient">Proficient</SelectItem>
                            <SelectItem value="Expert">Expert</SelectItem>
                        </SelectContent>
                    </Select>
                )}
            />

            <Input
                type="text"
                placeholder="Enter a skill"
                {...register(`skills.${index}.skillName`)}
            />

            {SkillFields.length > 1 && (
                <Button
                    variant="outline"
                    className="text-black p-2 m-2"
                    onClick={() => SkillRemove(index)}
                >
                    x
                </Button>
            )}
        </div>
    );
}