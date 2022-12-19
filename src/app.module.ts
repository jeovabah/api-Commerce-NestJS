import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://joaperi:34232114jeova@cluster0.osn9cpc.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
