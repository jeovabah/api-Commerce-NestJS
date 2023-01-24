import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UserModule } from './users/user.module';
@Module({
  imports: [
    ProductsModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://joaperi:34232114jeova@cluster0.lz7zbqg.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
