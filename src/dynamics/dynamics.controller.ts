import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DynamicsService } from './dynamics.service';
import { CreateDynamicDto } from './dto/create-dynamic.dto';
import { UpdateDynamicDto } from './dto/update-dynamic.dto';

@Controller('dynamics')
export class DynamicsController {
  constructor(private readonly dynamicsService: DynamicsService) {}

  @Post()
  create(@Body() createDynamicDto: CreateDynamicDto) {
    return this.dynamicsService.create(createDynamicDto);
  }

  @Get()
  findAll() {
    return this.dynamicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDynamicDto: UpdateDynamicDto) {
    return this.dynamicsService.update(id, updateDynamicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicsService.remove(id);
  }
}
