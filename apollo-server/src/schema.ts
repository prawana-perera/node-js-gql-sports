export const typeDefs = `#graphql
  type League {
    id: ID!
    name: String!
    shortName: String!
    sportType: String!
    title: String!
    createdAt: String!
    deletedAt: String
    updatedAt: String
  }

  type Team {
    id: ID!
    league: League!
    name: String!
    shortName: String!
    createdAt: String!
    deletedAt: String
    updatedAt: String
  }

  type Author {
    id: ID!
    name: String!
    title: String
    imageUrlString: String!
    createdAt: String!
    deletedAt: String
    updatedAt: String
  }

  type Article {
    id: ID!
    title: String!
    body: String!
    imageUrlString: String!
    author: Author!
    league: League!
    team: Team!
    createdAt: String!
    deletedAt: String
    updatedAt: String
  }

  input Paging {
    skip: Int
    take: Int
  }

  input ArticlesFilter {
    teamIds: [String]
    leagueIds: [String]
  }

  type Query {
    leagues: [League!]!
    teams: [Team!]!
    articles(paging: Paging, filter: ArticlesFilter): [Article!]!
  }
`;
