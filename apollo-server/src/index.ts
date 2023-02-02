import * as dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

import { LeagueDataSource } from './datasources/leagueDataSource';
import { TeamDataSource }  from './datasources/teamDataSource';
import { ArticleDataSource } from './datasources/articleDataSource';
import { AuthorDataSource } from './datasources/authorDataSource';

// https://www.apollographql.com/docs/apollo-server/data/fetching-rest/
interface ContextValue {
  dataSources: {
    leagueDataSource: LeagueDataSource
    teamDataSource: TeamDataSource,
    articleDataSource: ArticleDataSource,
    authorDataSource: AuthorDataSource,
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {        
          leagueDataSource: new LeagueDataSource({cache}),
          teamDataSource: new TeamDataSource({cache}),
          articleDataSource: new ArticleDataSource({cache}),
          authorDataSource: new AuthorDataSource({cache}),
        },
      };
    },
  });

  return url;
}

startServer().then(url => console.log(`🚀 Server ready at ${url}`));
