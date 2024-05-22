import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserForm } from "./user-form";
import { UserCard } from "./user-card";


const defaultValueOptions = {
    form: "form",
    users: "users",
}

export function HomePage() {

    return (
        <div>
            <Tabs defaultValue={defaultValueOptions.form} className="w-[400px] flex flex-col justify-start">
                <TabsList>
                    <TabsTrigger value={defaultValueOptions.form}>Form</TabsTrigger>
                    <TabsTrigger value={defaultValueOptions.users}>User</TabsTrigger>
                </TabsList>
                <TabsContent value={defaultValueOptions.form}>
                    <UserForm />
                </TabsContent>
                <TabsContent value={defaultValueOptions.users}>
                    <UserCard />
                </TabsContent>
            </Tabs>
        </div>
    )
}