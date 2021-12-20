import { Module } from "@nestjs/common";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from "./car.schema";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}