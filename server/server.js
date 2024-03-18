import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";
import http from 'http';

const app = express();

dotenv.config(".env");
const httpServer = http.createServer(app);

app.get("/rest",(req,res) => {
    res.json({
        data: 'You hit rest endpoint'
    })
});

const typeDefs = `
    type Query{
        totalPosts: Int!
    }
`;
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();

app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

await new Promise((resolve) => httpServer.listen({ port: process.env.PORT }, resolve));

console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`);
console.log(`🚀 graphQL Server ready at http://localhost:${process.env.PORT}/graphql`);

console.log('PORT:', process.env.PORT);