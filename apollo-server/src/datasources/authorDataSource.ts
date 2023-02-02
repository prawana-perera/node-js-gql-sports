import { Author } from '../interfaces';
import { SportDataSource } from './sportDataSource';

export class AuthorDataSource extends SportDataSource {
  async getAuthor(id: String): Promise<Author> {
    return this.get<Author>(`authors/${id}`);
  }

  async getAuthors(): Promise<Author[]> {
    return this.get<Author[]>(`authors`);
  }
}