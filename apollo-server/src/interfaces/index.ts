import { LeagueDataSource } from '../datasources/leagueDataSource';
import { TeamDataSource }  from '../datasources/teamDataSource';
import { ArticleDataSource } from '../datasources/articleDataSource';
import { AuthorDataSource } from '../datasources/authorDataSource';

export interface ContextValue {
  dataSources: {
    leagueDataSource: LeagueDataSource
    teamDataSource: TeamDataSource,
    articleDataSource: ArticleDataSource,
    authorDataSource: AuthorDataSource,
  };
}

interface BaseResource {
  id: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface Author extends BaseResource {
  title?: string;
  name: string;
  shortname: string;
  imageUrlString: string;
}

export interface Team extends BaseResource {
  name: string;
  shortname: string;
  league: League;
}

export interface League extends BaseResource {
  title: string;
  shortname: string;
  name: string;
  sportType: string 
}

export interface Article extends BaseResource {
  body: string;
  imageUrlString: string;
  title: string
  author: Author;
  team: Team;
  league: League;
}

export interface OperationArgs {
  paging: {
    skip: number;
    take: number
  },
  filter: {
    teamIds: [string]
    leagueIds: [string]
  }
}