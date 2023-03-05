import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDynamicDto } from './dto/create-dynamic.dto';
import { UpdateDynamicDto } from './dto/update-dynamic.dto';
import { Dynamic, DynamicDocument } from './entities/dynamic.entity';

@Injectable()
export class DynamicsService {
  constructor(
    @InjectModel(Dynamic.name) private dynamic: Model<DynamicDocument>,
  ) {}
  create(createDynamicDto: CreateDynamicDto) {
    try {
      const dynamic = new this.dynamic(createDynamicDto);
      return dynamic.save();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  findAll() {
    try {
      return this.dynamic.find();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  findOne(id: string) {
    try {
      return this.dynamic.findById(id);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  update(id: string, updateDynamicDto: UpdateDynamicDto) {
    try {
      return this.dynamic.findByIdAndUpdate(
        {
          _id: id,
        },
        { updateDynamicDto },
      );
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  remove(id: string) {
    try {
      return this.dynamic.findByIdAndDelete(id);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
