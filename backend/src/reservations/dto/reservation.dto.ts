import { IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ReservationDto {
  @ApiProperty({ example: '1', description: 'Unique user ID' })
  @IsNumber()
  readonly user_id: number;

  @ApiProperty({ example: '1', description: "Unique spot's ID" })
  @IsNumber()
  readonly parking_spot_number: number;

  @ApiProperty({ example: 'YYYY-MM-DD', description: 'Date of reservation' })
  @IsDate({ message: 'YYYY-MM-DD' })
  readonly reserved_date: Date;

  @ApiProperty({ example: 'HH:MM:SS', description: 'Time of reservation' })
  @IsString({ message: 'HH:MM:SS' })
  readonly reserved_time: string;

  @ApiProperty({ example: 'booked', description: 'Current reservation status' })
  @IsString({ message: 'booked' })
  readonly status: string;
}
