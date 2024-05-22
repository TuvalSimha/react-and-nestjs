import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getAllUsers } from "@/lib/get-all-users";
import { User } from "@/types";
import { Users } from "lucide-react"
import { useEffect, useState } from "react";

export function UserCard() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllUsers()
            .then((users) => {
                setUsers(users);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mt-5">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {users.length === 0 && <div>No users found</div>}
            {users.map((user) => (
                <Card key={user.phoneNumber}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">User</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{user.username}</div>
                        <p className="text-xs text-muted-foreground">Phone Number: {user.phoneNumber}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}


