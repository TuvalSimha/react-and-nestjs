import { User } from "@/types";

const API_URL = 'http://localhost:3000'; // Adjust based on your backend URL

export const createUser = async (userData: User) => {
    try {
        const response = await fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
