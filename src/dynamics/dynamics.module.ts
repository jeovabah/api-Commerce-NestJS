import { Module } from '@nestjs/common';
import { DynamicsService } from './dynamics.service';
import { DynamicsController } from './dynamics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicSchema } from './entities/dynamic.entity';

@Module({
  controllers: [DynamicsController],
  providers: [DynamicsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Dynamic', schema: DynamicSchema }]),
  ],
})
export class DynamicsModule {}
