import axios from "axios"

const api =  axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

export const getTeamsByLocation = async (locationId) => {
    const response = await api.get(`/api/players/teams-by-location/${locationId}`);   
    return response.data;
}

export const createTeam = async (teamData) => {
    const response = await api.post("/api/players/create-team", teamData);
    return response.data;
}

export const fetchLocations = async () => {
    const response = await api.get("/api/players/registered-locations");
    return response.data;
}