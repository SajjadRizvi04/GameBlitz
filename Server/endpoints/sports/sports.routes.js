import { DomainError } from "../../domain errors/domainErrors.js";
import { connection } from "../../database connection/database.js";
import e from "express";

const sportsRouter = e.Router();
sportsRouter.get("/registered-sports", async (req, res) => {
    const [rows] = await connection.query(
        `SELECT name FROM sports`
    );
    const sports = rows.map(row => row.name);
    res.json({ sports }); 
})

export { sportsRouter };