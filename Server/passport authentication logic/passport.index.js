import passport from "passport";
import "./passport.local.js"
import { connection } from "../database connection/database.js";
import { DomainError } from "../domain errors/domainErrors.js";

passport.serializeUser((id,done)=>{
    // console.log("Test 5",id)
    done(null,id);
})

passport.deserializeUser(async (user_id,done)=>{
    try {
        const [rows] = await connection.query(`SELECT * FROM players WHERE id = ?`,user_id)
        const user = rows[0]
        if(!user){
            throw DomainError.notFound("User Not Found")
        }
    
        console.log("The user from database is :",user)
        done(null,user)
    } catch (error) {
        done(error,null)
    }
})

export default passport;