import passport from "passport"
import Strategy from "passport-local"
import { connection } from "../database connection/database.js"
import { DomainError } from "../domain errors/domainErrors.js"
import bcrypt from "bcrypt"

passport.use(new Strategy(
    {
        usernameField:"email",
        passwordField:"password" 
    }
,async (email,password,done)=>{
    try {
        const [rows] = await connection.query(`SELECT * FROM players WHERE email = ?`,[email])
        const user = rows[0]
        
         if (!user) {
          return done(null, false, { message: "User not found" });
        }
        
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return done(null, false, { message: "Incorrect password" });
        }
        
        return done(null, user.id);
    } catch (error) {
        done(error,null)
        throw DomainError.invalid(error.message)
    }
}))