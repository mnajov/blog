import { HydratedDocument, Model } from 'mongoose';

export abstract class BaseRepository<E, CDto, UDto> {
  constructor(private readonly model: Model<E>) {}
  async create(dto: CDto): Promise<HydratedDocument<E>> {
    return await this.model.create(dto);
  }
  async findAll(): Promise<Array<E>> {
    return await this.model.find();
  }
  async findById(id: string): Promise<HydratedDocument<E>> {
    return await this.model.findById(id);
  }
  async update(id: string, dto: UDto): Promise<HydratedDocument<E>> {
    return await this.model.findByIdAndUpdate({ _id: id }, dto, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
