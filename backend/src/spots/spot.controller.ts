import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post, Query, UseGuards
} from '@nestjs/common';
import { SpotService } from './spot.service';
import { CreateParkingSpotDto } from './dto/create-parking-spot.dto';
import { JwtAuthGuard } from "../authorization/jwt.auth.guard";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Spot } from "../models/spot/spot.model";

@Controller('parking-spots')
export class SpotController {

  constructor(
    private readonly spotService: SpotService
  ) {}

  @Post()
  @ApiOperation({ summary: "Creating parking spot" })
  @ApiResponse({ status: 200, type: Spot })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  createSpot(@Body() createParkingSpotDto: CreateParkingSpotDto) {
    return this.spotService.createSpot(createParkingSpotDto);
  }

  @Get(':id')
  @ApiOperation({ summary: "Getting parking spot by ID" })
  @ApiResponse({ status: 200, type: Spot })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getSpotById(@Param() params) {
    return this.spotService.getSpotById(params.id);
  }

  @Get('/occupied/:id')
  @HttpCode(HttpStatus.OK)
  getFullyBookedDatesForSpot(@Param('id') id: number ) {
    return this.spotService.getFullyBookedDatesForSpot(id);
  }

  @Get()
  @ApiOperation({ summary: "Getting all parking spots" })
  @ApiResponse({ status: 200, type: [Spot] })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getAllSpots() {
    return this.spotService.getAllSpots();
  }

  @Get(':parking_spot_id/available-times')
  @ApiOperation({ summary: "Getting parking-spot's available time slots" })
  @ApiResponse({ status: 200, type: String, isArray: true, })
  @UseGuards(JwtAuthGuard)
  getAvailableTimes(
    @Param('parking_spot_id', ParseIntPipe) parkingSpotId: number,
    @Query('date') date: string,
  ): Promise<string[]> {
    return this.spotService.getAvailableTimes(parkingSpotId, date);
  }
}
