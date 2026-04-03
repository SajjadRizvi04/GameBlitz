import express from "express";
import session from "express-session";
import { sessionStore, connection } from "../database connection/database.js";
import passport from "../passport authentication logic/passport.index.js";
import { DomainError } from "../domain errors/domainErrors.js";
import authenticationRouter from "../endpoints/authentication/playerRoute.js";
import cors from "cors";
import { sportsRouter } from "../endpoints/sports/sports.routes.js";
// import { authenticatePlayer } from "../endpoints/team/player.service.js";
import teamRouter from "../endpoints/team/team.routes.js"

const app = express();
app.set("trust proxy", 1)
app.use(express.json());
app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
}))
app.use(session({
    secret:"login-secret",
    store:sessionStore,
    saveUninitialized: false,
    resave:false,
    cookie: {
    httpOnly:true,
    secure: false,// required for sameSite: 'None'
    sameSite: 'lax',   // allows cross-origin cookies
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  }
}))
app.use(passport.initialize());
app.use(passport.session());

// endpoints
app.use("/api/auth", authenticationRouter);
app.use("/api/sports", sportsRouter);
app.use("/api/players", teamRouter);


app.post("/login",passport.authenticate("local"), (req, res) => {
    res.json({
        message: "Login successful",
        user: {
            id: req.user.id,
            email: req.user.email,
            username: req.user.username
        }
    });
});

// error handling middlewrae
app.use((err, req, res, next) => {
    // console.log("Type of error :", err instanceof DomainError) 
    console.error(err);
    if(err instanceof DomainError){
        if (err.code === "NOT_FOUND") {
            return res.status(404).json({ message: err.message });
        }
        if (err.code === "INVALID_INPUT") {
            return res.status(400).json({ message: err.message });
        }
    }
    
    return res.status(500).json({ message: "Internal Server Error" });
});
app.listen(8000,()=>{
    console.log("Server Listening at port ",8000)
})


