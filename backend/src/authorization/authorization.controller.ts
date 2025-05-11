import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SignInResponseDto } from "./dto/authResponse.dto";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthorizationController {

  constructor(private  authService: AuthorizationService) {
  }

  @Post('/login')
  @ApiOperation({ summary: "User's authorization" })
  @ApiResponse({ status: 200, type: SignInResponseDto })
  @UsePipes(ValidationPipe)
  signIn(@Body() userDto: AuthDto): Promise<{ user_id: number; token: string }> {
    return this.authService.signIn(userDto);
  }

  @Post('/register')
  @ApiOperation({ summary: "User's registration" })
  @ApiResponse({ status: 200, type: SignInResponseDto })
  @UsePipes(ValidationPipe)
  signUp(@Body() userDto: AuthDto) {
    return this.authService.signUp(userDto);
  }
}


