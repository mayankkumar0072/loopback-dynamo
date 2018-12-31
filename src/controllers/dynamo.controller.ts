import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Dynamo} from '../models';
import {DynamoRepository} from '../repositories';

export class DynamoController {
  constructor(
    @repository(DynamoRepository)
    public dynamoRepository : DynamoRepository,
  ) {}

  @post('/dynamos', {
    responses: {
      '200': {
        description: 'Dynamo model instance',
        content: {'application/json': {schema: {'x-ts-type': Dynamo}}},
      },
    },
  })
  async create(@requestBody() dynamo: Dynamo): Promise<Dynamo> {
    return await this.dynamoRepository.create(dynamo);
  }

  @get('/dynamos/count', {
    responses: {
      '200': {
        description: 'Dynamo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Dynamo)) where?: Where,
  ): Promise<Count> {
    return await this.dynamoRepository.count(where);
  }

  @get('/dynamos', {
    responses: {
      '200': {
        description: 'Array of Dynamo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Dynamo}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Dynamo)) filter?: Filter,
  ): Promise<Dynamo[]> {
    return await this.dynamoRepository.find(filter);
  }

  @patch('/dynamos', {
    responses: {
      '200': {
        description: 'Dynamo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() dynamo: Dynamo,
    @param.query.object('where', getWhereSchemaFor(Dynamo)) where?: Where,
  ): Promise<Count> {
    return await this.dynamoRepository.updateAll(dynamo, where);
  }

  @get('/dynamos/{id}', {
    responses: {
      '200': {
        description: 'Dynamo model instance',
        content: {'application/json': {schema: {'x-ts-type': Dynamo}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Dynamo> {
    return await this.dynamoRepository.findById(id);
  }

  @patch('/dynamos/{id}', {
    responses: {
      '204': {
        description: 'Dynamo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() dynamo: Dynamo,
  ): Promise<void> {
    await this.dynamoRepository.updateById(id, dynamo);
  }

  @put('/dynamos/{id}', {
    responses: {
      '204': {
        description: 'Dynamo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dynamo: Dynamo,
  ): Promise<void> {
    await this.dynamoRepository.replaceById(id, dynamo);
  }

  @del('/dynamos/{id}', {
    responses: {
      '204': {
        description: 'Dynamo DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dynamoRepository.deleteById(id);
  }
}
