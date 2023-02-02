import { Team } from '../interfaces';
import { SportDataSource } from './sportDataSource';

export class TeamDataSource extends SportDataSource {
  async getTeam(id: String): Promise<Team> {
    return this.get<Team>(`teams/${id}`);
  }

  async getTeams(): Promise<Team[]> {
    return this.get<Team[]>(`teams`);
  }
}
