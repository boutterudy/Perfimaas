import { Controller, Get, Post, Body, Param, Patch, NotFoundException, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './interfaces/expense.interface';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  // Users
  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): User | NotFoundException {
    return this.usersService.getById(+id);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto): User[] {
    return this.usersService.createUser(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: UpdateUserDto): User | NotFoundException {
    return this.usersService.updateUser(+id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): DeleteUserDto | NotFoundException {
    return this.usersService.deleteUser(+id);
  }

  // Users fixed monthly expenses
  @Get(':id/fixedmonthlyexpenses')
  getFixedMonthlyExpenses(@Param('id') id: string): Expense[] | NotFoundException {
    return this.usersService.getFixedMonthlyExpenses(+id);
  }

  @Get(':id/fixedmonthlyexpenses/:expenseId')
  getFixedMonthlyExpensesById(@Param('id') id: string, @Param('expenseId') expenseId: string): Expense | NotFoundException {
    return this.usersService.getFixedMonthlyExpensesById(+id, +expenseId);
  }

  @Post(':id/fixedmonthlyexpenses')
  createFixedMonthlyExpense(@Param('id') id: string, @Body() newExpense: CreateExpenseDto) {
    return this.usersService.createFixedMonthlyExpense(+id, newExpense);
  }

  @Patch(':id/fixedmonthlyexpenses/:expenseId')
  updateFixedMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string, @Body() updatedExpense: UpdateExpenseDto) {
    console.log('id', +id, 'expenseId', +expenseId);
    return this.usersService.updateFixedMonthlyExpense(+id, +expenseId, updatedExpense);
  }

  @Delete(':id/fixedmonthlyexpenses/:expenseId')
  deleteFixedMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string) {
    return this.usersService.deleteFixedMonthlyExpense(+id, +expenseId);
  }
}
