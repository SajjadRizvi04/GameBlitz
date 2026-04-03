import { connection } from "../../database connection/database.js";
import { DomainError } from "../../domain errors/domainErrors.js";

export const fetchPlayerByEmail = async (email) => {
    try {
        const [rows] = await connection.query(
            `SELECT id FROM players WHERE email = ?`,
            [email]
        );
        if (rows.length === 0) {
            throw DomainError.notFound("Player not found");
        }
        const userId = rows[0].id;

        if (userId != null) {
            authenticatePlayer(userId)
        }
    } catch (error) {
        throw DomainError.invalid(error.message);
    }
}

export const authenticatePlayer = async (userId) => {
    const [teamMembersRows] = await connection.query(
        `SELECT team_id FROM team_members WHERE player_id = ?`,
        [userId]
    );

    if (teamMembersRows.length === 0) {
        // throw DomainError.notFound("Player is not a member of any team");
        return false
    }
    
    const teamId = teamMembersRows[0].team_id;

    if (teamId != null) {
        return true
    }else{
        return false
    }
    // return rows[0];
}
