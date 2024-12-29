import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/utilizatori";

export async function saveUser(user) {
    return await axios.post(`${USER_API_BASE_URL}/inregistrare`, user);
}

export async function loginUser(email, parola) {
    const response = await axios.post(`${USER_API_BASE_URL}/autentificare`, { email, parola}, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}