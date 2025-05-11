import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
  @ApiProperty({ example: 'example@gmail.com', description: 'Email address' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  email: string;

  @ApiProperty({ example: 'Qwerty123456', description: 'Password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Not less than 4 chars and not biggest 16 chars' })
  password: string;
}
