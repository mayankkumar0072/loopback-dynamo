import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './dynamo.datasource.json';

export class DynamoDataSource extends juggler.DataSource {
  static dataSourceName = 'dynamo';

  constructor(
    @inject('datasources.config.dynamo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
