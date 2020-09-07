import { NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Expense } from './interfaces/expense.interface';
import { DeleteUserDto } from './dto/delete-user.dto';
import { DeleteExpenseDto } from './dto/delete-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class UsersService {
    users: User[];
    getAll(): User[];
    getById(id: number): User | NotFoundException;
    createUser(user: CreateUserDto): User[];
    updateUser(id: number, updatedUser: UpdateUserDto): User | NotFoundException;
    deleteUser(id: number): DeleteUserDto | NotFoundException;
    getFixedMonthlyExpenses(id: number): Expense[] | NotFoundException;
    getFixedMonthlyExpensesById(id: number, expenseId: number): Expense | NotFoundException;
    createFixedMonthlyExpense(id: number, newExpense: Expense): Expense[] | NotFoundException;
    updateFixedMonthlyExpense(id: number, expenseId: number, updatedExpense: UpdateExpenseDto): Expense | NotFoundException;
    deleteFixedMonthlyExpense(id: number, expenseId: number): DeleteExpenseDto | NotFoundException;
}
