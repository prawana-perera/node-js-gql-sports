import { Article, Author, ContextValue, League, OperationArgs, Team } from "./interfaces";

export const resolvers = {
  Query: {
    leagues: async (_parent: any, _args, { dataSources }: ContextValue): Promise<League[]> => {
      return dataSources.leagueDataSource.getLeagues();
    },
    teams: async (_parent: any, _args: any, { dataSources }: ContextValue): Promise<Team[]> => {
      return dataSources.teamDataSource.getTeams();
    },
    articles: async (_parent: any, args: OperationArgs, { dataSources }: ContextValue): Promise<Article[]> => {
      return dataSources.articleDataSource.getArticles(args);
    },
  },
  Team: {
    league: async (parent: Team, _args: any, { dataSources }: ContextValue): Promise<League> => {
      return dataSources.leagueDataSource.getLeague(parent.league.id);
    },
  },
  Article: {
    league: async (parent: Article, _args: any, { dataSources }: ContextValue): Promise<League> => {
      return dataSources.leagueDataSource.getLeague(parent.league.id);
    },
    team: async (parent: Article, _args: any, { dataSources }: ContextValue): Promise<Team> => {
      return dataSources.teamDataSource.getTeam(parent.team.id);
    },
    author: async (parent: Article, _args: any, { dataSources }: ContextValue): Promise<Author> => {
      return dataSources.authorDataSource.getAuthor(parent.author.id);
    },
  },
};
