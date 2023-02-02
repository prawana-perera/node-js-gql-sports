import { Article, OperationArgs } from '../interfaces';
import { SportDataSource } from './sportDataSource';

export class ArticleDataSource extends SportDataSource {
  async getArticle(id: String): Promise<Article> {
    return this.get<Article>(`articles/${id}`);
  }

  async getArticles({paging, filter}: OperationArgs): Promise<Article[]> {
    // The REST API did not seem to support paging/filtering/sorting params, that I could find... so have to fetch all
    // And do in memory paging/filtering/sorting
    let articles = await this.get<Article[]>(`articles`); // All articles
    
    const isFiltered = filter?.teamIds?.length || filter?.leagueIds?.length;
    let filteredArticles = [...articles];

    // Apply filtering using OR condition. Loooking for articles for specific teams or leagues
    if(isFiltered) {
      filteredArticles = articles
        .filter(article => filter?.teamIds?.includes(article.team.id))
        .concat(articles.filter(article => filter?.leagueIds?.includes(article.league.id)))

      // Dedupe as we may have duplicate articles
      filteredArticles = filteredArticles.reduce((accumulator, current) => {
        if(accumulator.find(article => article.id === current.id)) {
          return accumulator;
        }

        return accumulator.concat(current);
      }, [] as Article[]);
    }  

    // Sort in reverse chronological order based on createdAt
    filteredArticles.sort((a, b) => a.createdAt <= b.createdAt ? 1 : -1);

    // Apply paging
    const skip = paging?.skip || 0;
    const take = paging.take ? (skip + paging.take) : filteredArticles.length;

    return filteredArticles.slice(skip, take);  
  }
}
