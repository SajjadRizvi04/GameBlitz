import mysql2 from "mysql2/promise";
import session from "express-session";
import connectMySQL from "express-mysql-session";
import "dotenv/config"

const MySQLStore = connectMySQL(session);
let asyncConnect = async () => {
   
    try {
        
        const connection = await new mysql2.createPool({ 
        host:`72.62.196.72` , 
        user:"gameblitz_user" ,
        password:"thomasanesu@J444",     
        database:"gameblitz",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
        // port: process.env.DB_PORT,
    });

    return connection;
    } catch (error) {
        throw Error("Error connecting to the database:",error);
    }

}

export const connection = await asyncConnect();
export const sessionStore= new MySQLStore({},connection);