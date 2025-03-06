import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
  HttpException,
} from '@nestjs/common';
import { BolgService } from './bolg.service';
import { CreateBolgDto } from './dto/create-bolg.dto';
import { UpdateBolgDto } from './dto/update-bolg.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../shared/JwtGuard';
import { Request } from 'express';

@Controller('blog')
export class BolgController {
  constructor(private readonly bolgService: BolgService) {}

  @Post()
  @UseGuards(new JwtAuthGuard())
  create(@Body() createBolgDto: CreateBolgDto, @Req() req: Request) {
    createBolgDto.author = req.user['_id'];
    return this.bolgService.create(createBolgDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    return file;
  }

  @Get()
  findAll() {
    return this.bolgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bolgService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(new JwtAuthGuard())
  async update(
    @Param('id') id: string,
    @Body() updateBolgDto: UpdateBolgDto,
    @Req() req: Request,
  ) {
    const userId = req.user['_id'];
    const data = await this.bolgService.findOne(id);
    if (!data) throw new HttpException('id not found', 404);
    if (data.data.author !== userId)
      throw new HttpException('bu blog sizga tegishli emas', 404);
    const blogData = await this.bolgService.update(id, updateBolgDto);

    return blogData;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.bolgService.findOne(id);
    if (!data) throw new HttpException('id not found', 404);
    const deletData = await this.bolgService.remove(id);
    return deletData;
  }
}
