import { DomainError } from "../../domain errors/domainErrors.js";
import { connection } from "../../database connection/database.js";
import e from "express";
import { authenticatePlayer } from "./player.service.js";

const teamRouter = e.Router()

teamRouter.get('/authenticate-player', async (req, res) => {
    try {
        const authenticated = await fetchPlayerByEmail(req.query.email); //if error occures most likely porbably here
        if(authenticated) {
            return res.json({ status: true, message: "Player is authenticated" });
        } else {
            return res.json({ status: false, message: "Player is not authenticated" });
            //throw DomainError.notFound("Player is not authenticated");
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

export default teamRouter