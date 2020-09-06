import { Controller, Get, Post, Body, Param, Patch, NotFoundException, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): User | NotFoundException {
    return this.usersService.getById(+id);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    this.usersService.createUser(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: UpdateUserDto): User | NotFoundException {
    return this.usersService.updateUser(+id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): DeleteUserDto | NotFoundException {
    return this.usersService.deleteUser(+id);
  }
}
