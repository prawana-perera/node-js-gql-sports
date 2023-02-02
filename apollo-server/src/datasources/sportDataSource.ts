import { RESTDataSource } from '@apollo/datasource-rest';

export class SportDataSource extends RESTDataSource {
  override baseURL = process.env.SPORTS_DS_BASE_URL
}
