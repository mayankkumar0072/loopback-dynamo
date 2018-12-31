import {Entity, model, property} from '@loopback/repository';

@model()
export class Dynamo extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  constructor(data?: Partial<Dynamo>) {
    super(data);
  }
}
