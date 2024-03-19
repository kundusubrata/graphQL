import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from "dotenv";
import path from "path";

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import mergedTypeDefs from "./typeDefs/index.js";
import mergedResolvers from './resolvers/index.js';

import { connectDB } from './db/connectDB.js';


const __dirname = path.resolve();
dotenv.config({ path: "server/config/.env" });
// console.log("Dotenv path:", path.resolve(__dirname, "/config/.env"));



const app = express();
const httpServer = http.createServer(app);

// Connect the database
connectDB();

app.get("/rest",(req,res) => {
    res.json({
        data: 'You hit rest endpoint'
    })
});


const apolloServer = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

await apolloServer.start();

app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

await new Promise((resolve) => httpServer.listen({ port: process.env.PORT }, resolve));

console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`);
console.log(`🚀 graphQL Server ready at http://localhost:${process.env.PORT}/graphql`);
