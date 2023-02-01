const { RESTDataSource } = require('apollo-datasource-rest');

class SportDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SPORTS_DS_BASE_URL;
  }
}

exports.SportDataSource = SportDataSource;
