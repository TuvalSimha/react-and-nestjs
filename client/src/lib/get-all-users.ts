

const API_URL = 'http://localhost:3000'; // Adjust based on your backend URL

export const getAllUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
}