// services/player.service.js
import { connection} from '../../../database connection/database.js';
import bcrypt from 'bcrypt';
import { DomainError} from '../../../domain errors/domainErrors.js';

export async function registerPlayer({ email, password, username, selectedSports }) {
  const conn = await connection.getConnection();

  try {
    await conn.beginTransaction();

    // 🔹 1. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 2. Insert player
    const [playerResult] = await conn.execute(
      `INSERT INTO players (email, username, password)
       VALUES (?, ?, ?)`,
      [email, username, hashedPassword]
    );

    console.log("Selected sports are ", selectedSports)
    const playerId = playerResult.insertId;

    // 🔹 3. Get sport IDs from names
    const [sportsRows] = await conn.query(
      `SELECT id, name FROM sports WHERE name IN (?)`,
      [selectedSports]
    );

    if (sportsRows.length !== selectedSports.length) {
      throw DomainError.invalid("One or more selected sports are invalid");
    }

    // 🔹 4. Prepare bulk insert
    const playerSportsValues = sportsRows.map(sport => [
      playerId,
      sport.id
    ]);

    await conn.query(
      `INSERT INTO player_sports (player_id, sport_id)
       VALUES ?`,
      [playerSportsValues]
    );

    await conn.commit();

    return {
      id: playerId,
      email,
      username
    };

  } catch (error) {
    await conn.rollback();
    throw error;

  } finally {
    await conn.release();   
  }
}


