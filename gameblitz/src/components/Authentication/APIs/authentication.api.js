import axios from "axios"

const api =  axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

// api call to get sports
export const registerPlayer = async (payload) => {
        const response = await api.post("/api/auth/register", payload);      
        return response.data;
}

export const loginPlayer = async (payload) => {
    const response = await api.post("/api/auth/login", payload);
    return response.data;
}
export const getRegisteredSports = async () => {
    const response = await api.get("/api/sports/registered-sports");
    return response.data.sports;
}
