import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { context } from './context.js';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

const { url } = await startStandaloneServer(server, {

  context: async ({ req, res }) => ({
    context
  }),
});

console.log(`🚀  Server ready at: ${url}`);