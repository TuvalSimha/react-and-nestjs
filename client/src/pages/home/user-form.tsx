

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/store/store"
import { addUser } from "@/store/user-slice"
import { createUser } from "@/lib/post-user"
import { useToast } from "@/components/ui/use-toast"

const formUser = z.object({
    username: z.string().min(2).max(32),
    phoneNumber: z.string().min(10).max(10),
    password: z.string().min(6).max(12).regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/),
    confirmPassword: z.string().min(6).max(12).regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/),
})


export function UserForm() {
    const dispatch = useAppDispatch()
    const { toast } = useToast()


    const form = useForm<z.infer<typeof formUser>>({
        resolver: zodResolver(formUser),
        defaultValues: {
            username: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formUser>) {
        console.log(values)
        try {
            dispatch(
                addUser({
                    username: values.username,
                    phoneNumber: values.phoneNumber,
                })
            )
            createUser({
                username: values.username,
                phoneNumber: values.phoneNumber,
                password: values.password,
            })
            toast({
                title: "Success",
                description: "User created successfully",
            })
        } catch (error: unknown) {
            toast({
                title: "Error",
                description: 'User creation failed',
            })

        }
    }



    return (
        <div className="mt-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage>
                                    {form.formState.errors.username?.message}
                                </FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="1234567890" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your phone number.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        disabled={
                            form.formState.isSubmitting ||
                            !form.formState.isValid
                        }
                        type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}