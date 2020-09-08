import { NotFoundException } from '@nestjs/common';
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
    createFixedMonthlyExpense(id: string, newExpense: CreateExpenseDto): NotFoundException | Expense[];
    updateFixedMonthlyExpense(id: string, expenseId: string, updatedExpense: UpdateExpenseDto): NotFoundException | Expense;
    deleteFixedMonthlyExpense(id: string, expenseId: string): NotFoundException | DeleteExpenseDto;
    getVariableMonthlyExpenses(id: string): Expense[] | NotFoundException;
    getVariableMonthlyExpenseById(id: string, expenseId: string): Expense | NotFoundException;
    createVariableMonthlyExpense(id: string, newExpense: CreateExpenseDto): NotFoundException | Expense[];
    updateVariableMonthlyExpense(id: string, expenseId: string, updatedExpense: UpdateExpenseDto): NotFoundException | Expense;
    deleteVariableMonthlyExpense(id: string, expenseId: string): DeleteExpenseDto | NotFoundException;
    getBankAccounts(id: string): BankAccount[] | NotFoundException;
    getBankAccountById(id: string, bankAccountId: string): BankAccount | NotFoundException;
    createBankAccounts(id: string, newBankAccount: CreateBankAccountDto): NotFoundException | BankAccount[];
    updateBankAccounts(id: string, bankAccountId: string, updatedBankAccount: UpdateBankAccountDto): NotFoundException | BankAccount;
    deleteBankAccounts(id: string, bankAccountId: string): DeleteBankAccountDto | NotFoundException;
    getGoals(id: string): Goal[] | NotFoundException;
    getGoalById(id: string, goalId: string): Goal | NotFoundException;
    createGoal(id: string, newGoal: CreateGoalDto): NotFoundException | Goal[];
    updateGoal(id: string, goalId: string, updatedGoal: UpdateGoalDto): NotFoundException | Goal;
    deleteGoal(id: string, goalId: string): DeleteGoalDto | NotFoundException;
    getSurplusCashFlowManagement(id: string): CashFlowDistribution[] | NotFoundException;
    getSurplusCashFlowManagementById(id: string, cashFlowDistributionId: string): CashFlowDistribution | NotFoundException;
    createSurplusCashFlowManagement(id: string, newCashFlowDistribution: CreateCashFlowDistributionDto): NotFoundException | CashFlowDistribution[];
    updateSurplusCashFlowManagement(id: string, cashFlowDistributionId: string, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): NotFoundException | CashFlowDistribution;
    deleteSurplusCashFlowManagement(id: string, cashFlowDistributionId: string): DeleteCashFlowDistributionDto | NotFoundException;
    getUnexpectedCashFlowManagement(id: string): CashFlowDistribution[] | NotFoundException;
    getUnexpectedCashFlowManagementById(id: string, cashFlowDistributionId: string): CashFlowDistribution | NotFoundException;
    createUnexpectedCashFlowManagement(id: string, newCashFlowDistribution: CreateCashFlowDistributionDto): NotFoundException | CashFlowDistribution[];
    updateUnexpectedCashFlowManagement(id: string, cashFlowDistributionId: string, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): NotFoundException | CashFlowDistribution;
    deleteUnexpectedCashFlowManagement(id: string, cashFlowDistributionId: string): DeleteCashFlowDistributionDto | NotFoundException;
}
