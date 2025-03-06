import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { ResData } from 'src/lib/resData';

@Injectable()
export class BaseService<Entity, CDto, UDto> {
  constructor(
    private readonly baseRepostry: BaseRepository<Entity, CDto, UDto>,
  ) {}
  async create(createBaseDto: CDto): Promise<ResData<Entity>> {
    const data = await this.baseRepostry.create(createBaseDto);
    return new ResData<Entity>(201, 'create blog post', data);
  }

  async findAll(): Promise<ResData<Array<Entity>>> {
    const data = await this.baseRepostry.findAll();
    return new ResData<Array<Entity>>(200, 'sucsses', data);
  }

  async findOne(id: string): Promise<ResData<Entity>> {
    const data = await this.baseRepostry.findById(id);
    return new ResData<Entity>(200, 'sucsses', data);
  }

  async update(id: string, updateBaseDto: UDto): Promise<ResData<Entity>> {
    const isData = await this.baseRepostry.findById(id);
    if (!isData) throw new HttpException('not foud id', HttpStatus.NOT_FOUND);
    const data = await this.baseRepostry.update(id, updateBaseDto);
    return new ResData<Entity>(201, 'sucsess updated', data);
  }

  async remove(id: string): Promise<ResData<Entity>> {
    const isData = await this.baseRepostry.findById(id);
    if (!isData) throw new HttpException('not foud id', HttpStatus.NOT_FOUND);
    const deletData = await this.baseRepostry.delete(id);
    return new ResData<Entity>(201, 'sucssed deleted', deletData);
  }
}
