import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Car } from "./car.interface";
import { CarsService } from "./cars.service";
import { CreateCatDto } from "./create-car.dto";

@Controller("cars")

export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carsService.getCar(id);
  }

  @Post()
  create(@Body() createCarDTO: CreateCatDto): Promise<Car> {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const newCar = {...createCarDTO, id};
    return this.carsService.createCar(newCar);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAllCars();
  }
}