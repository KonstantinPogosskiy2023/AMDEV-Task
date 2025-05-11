import { IsString, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateParkingSpotDto {
  @ApiProperty({ example: 'пр-т Рокосовского, 12', description: 'Address' })
  @IsString({ message: 'Must be a string' })
  @Length(5, 30, { message: 'Address: Not less than 5 chars and not biggest 30 chars' })
  readonly location: string;
}
