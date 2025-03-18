import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getGureumProfile = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/gureum/profile`);
        return response.data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
};
