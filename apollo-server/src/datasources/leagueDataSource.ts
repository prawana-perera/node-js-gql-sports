import { League } from '../interfaces';
import { SportDataSource } from './sportDataSource';

export class LeagueDataSource extends SportDataSource {  
  async getLeague(id: String): Promise<League> {
    return this.get<League>(`leagues/${id}`);
  }

  async getLeagues(): Promise<League[]> {
    return this.get<League[]>(`leagues`);
  }
}
