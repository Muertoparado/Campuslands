import dotenv from 'dotenv';
dotenv.config();

export default {
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : 'campus',
    password : process.env.PASSWORD
} 
