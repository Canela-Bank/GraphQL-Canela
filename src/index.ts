import express from 'express'
import { graphqlHTTP } from "express-graphql"
import cors from 'cors'
import {schema} from "./Schema/graphQLIndex"
import { DataSource } from 'typeorm'
import mysql from 'mysql2/promise'
import { connect } from 'http2'

const dbHost = process.env.DATABASE_HOST || 'localhost';
const dbPort = process.env.DATABASE_PORT || '3306';
const dbUser = process.env.DATABASE_USER || 'root';
const dbPassword = process.env.DATABASE_PASSWORD || 'password';

const main = async () => {
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        //Enables the nice graphic interface for query testing (similar to postman) under [host]/graphql
        graphiql: false 
    }))

    const port = 3002

    app.listen(port, () => {
        console.log("SERVER RUNNING ON PORT " + port)
    })
    
};


export const canelaUsersDB =  mysql.createPool({
    host: dbHost,
    port: parseInt(dbPort),
    user: dbUser,
    password: dbPassword,
    multipleStatements: true,
    database: "users_db"
})

export const canelaAccountsDB = mysql.createPool({
    host: dbHost,
    port: parseInt(dbPort),
    user: dbUser,
    password: dbPassword,
    multipleStatements: true,
    database: "accounts_db"
})

export const canelaLoansDB = mysql.createPool({
    host: dbHost,
    port: parseInt(dbPort),
    user: dbUser,
    password: dbPassword,
    multipleStatements: true,
    database: "loans_db"
})

export const canelaInvestmentsDB = mysql.createPool({
    host: dbHost,
    port: parseInt(dbPort),
    user: dbUser,
    password: dbPassword,
    multipleStatements: true,
    database: "investments_db"
})


main().catch((err) => {
    console.error(err);
})
