import { DomainError } from "../../domain errors/domainErrors.js";
import { connection } from "../../database connection/database.js";
import e from "express";
import { authenticatePlayer, createTeam, fetchLocations } from "./player.service.js";
import { fetchPlayerByEmail,fetchAllTeamsByLocation } from "./player.service.js";

const teamRouter = e.Router()

teamRouter.get('/authenticate-player', async (req, res) => {
    try {
        console.log("Email:", req.query.email)
        const authenticated = await fetchPlayerByEmail(req.query.email); //if error occures most likely porbably here
        console.log("Authenticated:", authenticated)
        if(authenticated) {
            return res.json({ status: true, message: "Player is authenticated" });
        } else {
            return res.json({ status: false, message: "Player is not authenticated" });
            //throw DomainError.notFound("Player is not authenticated");
        }
    } catch (error) {
        // res.status(404).json({ message: error.message });
        console.error(error);
        throw error
    }
})
teamRouter.get('/teams-by-location/:locationId', async (req, res) => {
    try {
        const locationId = req.params.locationId;
        if(!locationId){
            throw DomainError.invalid("Location ID is required");   
        }
        console.log("ddds", locationId)
        const teams = await fetchAllTeamsByLocation(parseInt(locationId)    );
        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

teamRouter.post('/create-team', async (req, res) => {
    try {
        // ?validate the input data
        const { teamName, locationId, sportId, adminId, description } = req.body;
        if (!teamName || !locationId || !sportId || !adminId) {
            throw DomainError.invalid("Missing required fields");
        }
        const teamId = await createTeam(teamName, locationId, sportId, adminId, description);
        res.status(201).json({ message: "Team created successfully", teamId });
    } catch (error) {
        console.error(error);
        if (error instanceof DomainError) {
            if (error.code === "INVALID_INPUT") {
                return res.status(400).json({ message: error.message });
            }
        }
        res.status(500).json({ message: "Internal server error" });
    }
}
)
teamRouter.get(`/registered-locations`,async (req,res)=>{
    try {
        const locations = await fetchLocations();
        res.json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})
export default teamRouter