import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Post, Get, Body } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDto) {
    this.userService.create(createUserDTO);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
