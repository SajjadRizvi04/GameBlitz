import express from 'express';
import { registerPlayerController } from './controller layer/player.controllers.js';
import passport from 'passport';

const authenticationRouter = express.Router();

authenticationRouter.post('/register', registerPlayerController);
authenticationRouter.get("/check-auth", (req, res) => {
    if (req.isAuthenticated()) {
        return res.json({   
            authenticated: true,
            user: {
                id: req.user.id,
                email: req.user.email,
                username: req.user.username
            }
        });
    } else {
        return res.json({ authenticated: false });
    }
});



export default authenticationRouter;