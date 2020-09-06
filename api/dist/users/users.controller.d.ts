import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): User[];
    getById(id: string): User | NotFoundException;
    createUser(newUser: CreateUserDto): void;
    updateUser(id: string, updatedUser: UpdateUserDto): User | NotFoundException;
    deleteUser(id: string): DeleteUserDto | NotFoundException;
}
