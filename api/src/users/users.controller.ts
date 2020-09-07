import { Controller, Get, Post, Body, Param, Patch, NotFoundException, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './interfaces/expense.interface';
import { DeleteExpenseDto } from './dto/delete-expense.dto';
import { BankAccount } from './interfaces/bank-account.interface';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { DeleteBankAccountDto } from './dto/delete-bank-account.dto';

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
  getFixedMonthlyExpenseById(@Param('id') id: string, @Param('expenseId') expenseId: string): Expense | NotFoundException {
    return this.usersService.getFixedMonthlyExpenseById(+id, +expenseId);
  }

  @Post(':id/fixedmonthlyexpenses')
  createFixedMonthlyExpense(@Param('id') id: string, @Body() newExpense: CreateExpenseDto) {
    return this.usersService.createFixedMonthlyExpense(+id, newExpense);
  }

  @Patch(':id/fixedmonthlyexpenses/:expenseId')
  updateFixedMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string, @Body() updatedExpense: UpdateExpenseDto) {
    return this.usersService.updateFixedMonthlyExpense(+id, +expenseId, updatedExpense);
  }

  @Delete(':id/fixedmonthlyexpenses/:expenseId')
  deleteFixedMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string) {
    return this.usersService.deleteFixedMonthlyExpense(+id, +expenseId);
  }

  // Users variable monthly expenses
  @Get(':id/variablemonthlyexpenses')
  getVariableMonthlyExpenses(@Param('id') id: string): Expense[] | NotFoundException {
    return this.usersService.getVariableMonthlyExpenses(+id);
  }

  @Get(':id/variablemonthlyexpenses/:expenseId')
  getVariableMonthlyExpenseById(@Param('id') id: string, @Param('expenseId') expenseId: string): Expense | NotFoundException {
    return this.usersService.getVariableMonthlyExpenseById(+id, +expenseId);
  }

  @Post(':id/variablemonthlyexpenses')
  createVariableMonthlyExpense(@Param('id') id: string, @Body() newExpense: CreateExpenseDto) {
    return this.usersService.createVariableMonthlyExpense(+id, newExpense);
  }

  @Patch(':id/variablemonthlyexpenses/:expenseId')
  updateVariableMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string, @Body() updatedExpense: UpdateExpenseDto) {
    return this.usersService.updateVariableMonthlyExpense(+id, +expenseId, updatedExpense);
  }

  @Delete(':id/variablemonthlyexpenses/:expenseId')
  deleteVariableMonthlyExpense(@Param('id') id: string, @Param('expenseId') expenseId: string): DeleteExpenseDto | NotFoundException {
    return this.usersService.deleteVariableMonthlyExpense(+id, +expenseId);
  }

  // Users bank accounts
  @Get(':id/bankaccounts')
  getBankAccounts(@Param('id') id: string): BankAccount[] | NotFoundException {
    return this.usersService.getBankAccounts(+id);
  }

  @Get(':id/bankaccounts/:bankAccountId')
  getBankAccountById(@Param('id') id: string, @Param('bankAccountId') bankAccountId: string): BankAccount | NotFoundException {
    return this.usersService.getBankAccountById(+id, +bankAccountId);
  }

  @Post(':id/bankaccounts')
  createBankAccounts(@Param('id') id: string, @Body() newExpense: CreateBankAccountDto) {
    return this.usersService.createBankAccounts(+id, newExpense);
  }

  @Patch(':id/bankaccounts/:bankAccountId')
  updateBankAccounts(@Param('id') id: string, @Param('bankAccountId') bankAccountId: string, @Body() updatedExpense: UpdateBankAccountDto) {
    return this.usersService.updateBankAccounts(+id, +bankAccountId, updatedExpense);
  }

  @Delete(':id/bankaccounts/:bankAccountId')
  deleteBankAccounts(@Param('id') id: string, @Param('bankAccountId') bankAccountId: string): DeleteBankAccountDto | NotFoundException {
    return this.usersService.deleteBankAccounts(+id, +bankAccountId);
  }
}
