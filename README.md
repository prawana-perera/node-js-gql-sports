# node-js-gql-sports
An example React front end and backend app in NodeJS using GraphQL API.

The backend service is a GraphQL API which proxies through to an REST API to fetch data. 

## Features
- Base features included quering leagues and teams
- Added new features to
  - View chronologically sorteded articles 
    - Allow to filter by one or more teams and/or leagues
    - Pagination of articles
  - Allow a user to select teams and/or leagues to follow, and renders a feed of articles for those teams/leagues
- Other techincal features added:
  - Upgraded apollo-server project to use latest version and typescript (https://www.apollographql.com/docs/apollo-server/getting-started/)
  - Hot reload Appollo Server for development purpose when code changes occur
  - Caching at Appolo Server to prevent downstream calls to REST APIs


# Local Setup

Copy the `env.template` file and name it `.env`
```bash
cp .env.template .env
```

Update the `SPORTS_DS_BASE_URL` to a service returning API data as per test data files.

