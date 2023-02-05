import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UserModule } from './users/user.module';
import { ColorsModule } from './colors/colors.module';
@Module({
  imports: [
    ProductsModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://joaperi:34232114jeova@cluster0.v7ogoq4.mongodb.net/test',
    ),
    ColorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
