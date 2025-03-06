import { Module } from '@nestjs/common';
import { BolgService } from './bolg.service';
import { BolgController } from './bolg.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bolg, bolgSchema } from './entities/bolg.entity';
import { BlogRepository } from './blog.repository';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: 1024 * 1024 * 8 },
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
    MongooseModule.forFeature([{ name: Bolg.name, schema: bolgSchema }]),
  ],
  controllers: [BolgController],
  providers: [BolgService, BlogRepository],
})
export class BolgModule {}
