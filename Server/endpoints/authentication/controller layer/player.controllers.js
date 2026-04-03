// controllers/player.controller.js
import { DomainError } from "../../../domain errors/domainErrors.js";
import { registerPlayer } from "../service layer/player.service.js";

export async function registerPlayerController(req, res) {
  try {
    const { email, password, username, selectedSports } = req.body;

    // 🔹 Basic validation
    if (!email || !password || !username) {
      return res.status(400).json({
        message: 'email, password, and username are required'
      });
    }

    if (!Array.isArray(selectedSports) || selectedSports.length === 0) {
      throw DomainError.invalid("At least one sport must be selected");
    }

    // Optional: trim + normalize
    const normalizedPayload = {
      email: email.trim().toLowerCase(),
      password,
      username: username.trim(),
      selectedSports
    };

    const result = await registerPlayer(normalizedPayload);

    return res.status(201).json({
      message: 'Player created successfully',
      data: result
    });

  } catch (error) {
    console.error(error);
    throw error; // Let the global error handler deal with it
  }
}

