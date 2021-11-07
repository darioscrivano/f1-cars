import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CarDocument, Car } from "./car.schema";


@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}
  private readonly cars: Car[] = [];

  getCar(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  findAllCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
}