import { DomainError } from "../../domain errors/domainErrors.js";
import { connection } from "../../database connection/database.js";
import e from "express";
import { authenticatePlayer } from "./player.service.js";
import { fetchPlayerByEmail } from "./player.service.js";

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

export default teamRouter