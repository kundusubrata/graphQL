import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

dotenv.config(".env");

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

const { url } = await startStandaloneServer(apolloServer, {
  listen: { port: process.env.PORT },
});

console.log(`🚀  Server ready at: ${url}`);
