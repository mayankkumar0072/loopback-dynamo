import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Dynamo} from '../models';
import {DynamoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DynamoRepository extends DefaultCrudRepository<
  Dynamo,
  typeof Dynamo.prototype.id
> {
  constructor(
    @inject('datasources.dynamo') dataSource: DynamoDataSource,
  ) {
    super(Dynamo, dataSource);
  }
}
