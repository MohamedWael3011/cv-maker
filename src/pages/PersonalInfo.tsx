import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export function PersonalInfo() {


    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="p-5 w-4/5 h-[500px] text-white">
                <form className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <Label htmlFor="FirstName">First Name</Label>
                            <Input type="text" id="FirstName" placeholder="e.g John" />
                        </div>
                        <div>
                            <Label htmlFor="SecondName">Second Name</Label>
                            <Input type="text" id="SecondName" placeholder="e.g Doe" />
                        </div>
                    </div>
                    <Label className="mt-5" htmlFor="Profession">Second Name</Label>
                    <Input type="text" id="Profession" placeholder="What is your job title?" />
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div>
                            <Label htmlFor="City">City</Label>
                            <Input type="text" id="City" placeholder="e.g Cairo" />
                        </div>
                        <div>
                            <Label htmlFor="Country">Country</Label>
                            <Input type="text" id="Country" placeholder="e.g Egypt" />
                        </div>
                        <div>
                            <Label htmlFor="StreetName">Street Name</Label>
                            <Input type="text" id="StreetName" placeholder="e.g Maadi" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div>
                            <Label htmlFor="Phone">Phone</Label>
                            <Input type="text" id="Phone" placeholder="e.g +1 206-471-6430" />
                        </div>
                        <div>
                            <Label htmlFor="Email">Email</Label>
                            <Input type="email" id="Email" placeholder="e.g example@sample.com" />
                        </div>
                    </div>



                </form>
            </div>

        </div>
    )
}
