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

export const fetchAllTeamsByLocation = async (locationId)=> {
    const [rows] = await connection.query(`select * from teams where location_id = ?`, [locationId]);
    return rows;
}


export const createTeam = async (
    teamName,
    locationId,
    sport,
    adminId,
    description
) => {
    const [row]= await connection.query(`select sport_id from sports where name = ?`, [sport]);
    if(row.length === 0){
        throw DomainError.notFound("Sport not found");
    }
    const sportId = row[0].sport_id;
    const [result] = await connection.query(
        `INSERT INTO teams (name, location_id, sport_id, admin_id, description)
         VALUES (?, ?, ?, ?, ?)`,
        [teamName, locationId, sportId, adminId, description]
    );
    return result.insertId; // Return the ID of the newly created team
}


export const fetchLocations = async()=>{
    const [rows] = await connection.query(`SELECT * FROM locations`);
    return rows;
}
