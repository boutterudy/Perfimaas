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
import { Goal } from './interfaces/goal.interface';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { DeleteGoalDto } from './dto/delete-goal.dto';
import { CashFlowDistribution } from './interfaces/cash-flow-distribution.interface';
import { CreateCashFlowDistributionDto } from './dto/create-cash-flow-distribution.dto';
import { UpdateCashFlowDistributionDto } from './dto/update-cash-flow-distribution.dto';
import { DeleteCashFlowDistributionDto } from './dto/delete-cash-flow-distribution.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

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

  // Users password
  @Patch(':id/password')
  updatePassword(@Param('id') id: string, @Body() updatedPassword: UpdatePasswordDto) {
    return this.usersService.updatePassword(+id, updatedPassword);
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
  createBankAccounts(@Param('id') id: string, @Body() newBankAccount: CreateBankAccountDto) {
    return this.usersService.createBankAccounts(+id, newBankAccount);
  }

  @Patch(':id/bankaccounts/:bankAccountId')
  updateBankAccounts(@Param('id') id: string, @Param('bankAccountId') bankAccountId: string, @Body() updatedBankAccount: UpdateBankAccountDto) {
    return this.usersService.updateBankAccounts(+id, +bankAccountId, updatedBankAccount);
  }

  @Delete(':id/bankaccounts/:bankAccountId')
  deleteBankAccounts(@Param('id') id: string, @Param('bankAccountId') bankAccountId: string): DeleteBankAccountDto | NotFoundException {
    return this.usersService.deleteBankAccounts(+id, +bankAccountId);
  }

  // Users goals
  @Get(':id/goals')
  getGoals(@Param('id') id: string): Goal[] | NotFoundException {
    return this.usersService.getGoals(+id);
  }

  @Get(':id/goals/:goalId')
  getGoalById(@Param('id') id: string, @Param('goalId') goalId: string): Goal | NotFoundException {
    return this.usersService.getGoalById(+id, +goalId);
  }

  @Post(':id/goals')
  createGoal(@Param('id') id: string, @Body() newGoal: CreateGoalDto) {
    return this.usersService.createGoal(+id, newGoal);
  }

  @Patch(':id/goals/:goalId')
  updateGoal(@Param('id') id: string, @Param('goalId') goalId: string, @Body() updatedGoal: UpdateGoalDto) {
    return this.usersService.updateGoal(+id, +goalId, updatedGoal);
  }

  @Delete(':id/goals/:goalId')
  deleteGoal(@Param('id') id: string, @Param('goalId') goalId: string): DeleteGoalDto | NotFoundException {
    return this.usersService.deleteGoal(+id, +goalId);
  }

  // Users surplus cash-flow management
  @Get(':id/surpluscashflowmanagement')
  getSurplusCashFlowManagement(@Param('id') id: string): CashFlowDistribution[] | NotFoundException {
    return this.usersService.getSurplusCashFlowManagement(+id);
  }

  @Get(':id/surpluscashflowmanagement/:cashFlowDistributionId')
  getSurplusCashFlowManagementById(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string): CashFlowDistribution | NotFoundException {
    return this.usersService.getSurplusCashFlowManagementById(+id, +cashFlowDistributionId);
  }

  @Post(':id/surpluscashflowmanagement')
  createSurplusCashFlowManagement(@Param('id') id: string, @Body() newCashFlowDistribution: CreateCashFlowDistributionDto) {
    return this.usersService.createSurplusCashFlowManagement(+id, newCashFlowDistribution);
  }

  @Patch(':id/surpluscashflowmanagement/:cashFlowDistributionId')
  updateSurplusCashFlowManagement(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string, @Body() updatedCashFlowDistribution: UpdateCashFlowDistributionDto) {
    return this.usersService.updateSurplusCashFlowManagement(+id, +cashFlowDistributionId, updatedCashFlowDistribution);
  }

  @Delete(':id/surpluscashflowmanagement/:cashFlowDistributionId')
  deleteSurplusCashFlowManagement(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string): DeleteCashFlowDistributionDto | NotFoundException {
    return this.usersService.deleteSurplusCashFlowManagement(+id, +cashFlowDistributionId);
  }

  // Users unexpected cash-flow management
  @Get(':id/unexpectedcashflowmanagement')
  getUnexpectedCashFlowManagement(@Param('id') id: string): CashFlowDistribution[] | NotFoundException {
    return this.usersService.getUnexpectedCashFlowManagement(+id);
  }

  @Get(':id/unexpectedcashflowmanagement/:cashFlowDistributionId')
  getUnexpectedCashFlowManagementById(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string): CashFlowDistribution | NotFoundException {
    return this.usersService.getUnexpectedCashFlowManagementById(+id, +cashFlowDistributionId);
  }

  @Post(':id/unexpectedcashflowmanagement')
  createUnexpectedCashFlowManagement(@Param('id') id: string, @Body() newCashFlowDistribution: CreateCashFlowDistributionDto) {
    return this.usersService.createUnexpectedCashFlowManagement(+id, newCashFlowDistribution);
  }

  @Patch(':id/unexpectedcashflowmanagement/:cashFlowDistributionId')
  updateUnexpectedCashFlowManagement(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string, @Body() updatedCashFlowDistribution: UpdateCashFlowDistributionDto) {
    return this.usersService.updateUnexpectedCashFlowManagement(+id, +cashFlowDistributionId, updatedCashFlowDistribution);
  }

  @Delete(':id/unexpectedcashflowmanagement/:cashFlowDistributionId')
  deleteUnexpectedCashFlowManagement(@Param('id') id: string, @Param('cashFlowDistributionId') cashFlowDistributionId: string): DeleteCashFlowDistributionDto | NotFoundException {
    return this.usersService.deleteUnexpectedCashFlowManagement(+id, +cashFlowDistributionId);
  }
}
