import { Controller, Get, Param, Req } from "@nestjs/common";
import { Request } from "express";
import { Car } from "./car.interface";
import { CarsService } from "./cars.service";

@Controller("cars")

export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carsService.getCar(id);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAllCars();
  }
}