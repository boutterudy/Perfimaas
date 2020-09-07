import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './interfaces/expense.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): User[];
    getById(id: string): User | NotFoundException;
    createUser(newUser: CreateUserDto): User[];
    updateUser(id: string, updatedUser: UpdateUserDto): User | NotFoundException;
    deleteUser(id: string): DeleteUserDto | NotFoundException;
    getFixedMonthlyExpenses(id: string): Expense[] | NotFoundException;
    getFixedMonthlyExpenseById(id: string, expenseId: string): Expense | NotFoundException;
    createFixedMonthlyExpense(id: string, newExpense: CreateExpenseDto): Expense[] | NotFoundException;
    updateFixedMonthlyExpense(id: string, expenseId: string, updatedExpense: UpdateExpenseDto): Expense | NotFoundException;
    deleteFixedMonthlyExpense(id: string, expenseId: string): NotFoundException | import("./dto/delete-expense.dto").DeleteExpenseDto;
    getVariableMonthlyExpenses(id: string): Expense[] | NotFoundException;
    getVariableMonthlyExpenseById(id: string, expenseId: string): Expense | NotFoundException;
    createVariableMonthlyExpense(id: string, newExpense: CreateExpenseDto): Expense[] | NotFoundException;
    updateVariableMonthlyExpense(id: string, expenseId: string, updatedExpense: UpdateExpenseDto): Expense | NotFoundException;
    deleteVariableMonthlyExpense(id: string, expenseId: string): NotFoundException | import("./dto/delete-expense.dto").DeleteExpenseDto;
}
