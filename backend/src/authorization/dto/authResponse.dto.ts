import { ApiProperty } from '@nestjs/swagger';

export class SignInResponseDto {

  @ApiProperty({ example: '1', description: "Unique user's ID" })
  user_id: number;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...', description: "Token" })
  token: string;
}
