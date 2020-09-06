import { NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    users: User[];
    getAll(): any[];
    getById(id: number): User | NotFoundException;
    createUser(user: CreateUserDto): void;
    updateUser(id: number, updatedUser: UpdateUserDto): User | NotFoundException;
    deleteUser(id: number): NotFoundException | {
        usersDeleted: number;
        nbUsersAfterDelete: number;
    };
}
