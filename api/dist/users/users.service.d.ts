import { NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Expense } from './interfaces/expense.interface';
import { DeleteUserDto } from './dto/delete-user.dto';
import { DeleteExpenseDto } from './dto/delete-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { BankAccount } from './interfaces/bank-account.interface';
import { DeleteBankAccountDto } from './dto/delete-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Goal } from './interfaces/goal.interface';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { DeleteGoalDto } from './dto/delete-goal.dto';
import { DeleteCashFlowDistributionDto } from './dto/delete-cash-flow-distribution.dto';
import { UpdateCashFlowDistributionDto } from './dto/update-cash-flow-distribution.dto';
import { CreateCashFlowDistributionDto } from './dto/create-cash-flow-distribution.dto';
import { CashFlowDistribution } from './interfaces/cash-flow-distribution.interface';
import { Usage } from './interfaces/usage.interface';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';
import { DeleteUsageDto } from './dto/delete-usage.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
export declare class UsersService {
    private users;
    constructor();
    getAll(): User[];
    getById(id: number): User | NotFoundException;
    createUser(user: CreateUserDto): User[];
    updateUser(id: number, updatedUser: UpdateUserDto): User | NotFoundException;
    deleteUser(id: number): DeleteUserDto | NotFoundException;
    getByEmail(email: string): Promise<User | undefined>;
    updateEmail(id: number, updatedEmail: UpdateEmailDto): User | NotFoundException;
    updatePassword(id: number, updatedPassword: UpdatePasswordDto): User | NotFoundException;
    getFixedMonthlyExpenses(id: number): Expense[] | NotFoundException;
    getFixedMonthlyExpenseById(id: number, expenseId: number): Expense | NotFoundException;
    createFixedMonthlyExpense(id: number, newExpense: Expense): Expense[] | NotFoundException;
    updateFixedMonthlyExpense(id: number, expenseId: number, updatedExpense: UpdateExpenseDto): Expense | NotFoundException;
    deleteFixedMonthlyExpense(id: number, expenseId: number): DeleteExpenseDto | NotFoundException;
    getVariableMonthlyExpenses(id: number): Expense[] | NotFoundException;
    getVariableMonthlyExpenseById(id: number, expenseId: number): Expense | NotFoundException;
    createVariableMonthlyExpense(id: number, newExpense: CreateExpenseDto): Expense[] | NotFoundException;
    updateVariableMonthlyExpense(id: number, expenseId: number, updatedExpense: UpdateExpenseDto): Expense | NotFoundException;
    deleteVariableMonthlyExpense(id: number, expenseId: number): DeleteExpenseDto | NotFoundException;
    getBankAccounts(id: number): BankAccount[] | NotFoundException;
    getBankAccountById(id: number, bankAccountId: number): BankAccount | NotFoundException;
    createBankAccounts(id: number, newBankAccount: CreateBankAccountDto): BankAccount[] | NotFoundException;
    updateBankAccounts(id: number, bankAccountId: number, updatedBankAccount: UpdateBankAccountDto): BankAccount | NotFoundException;
    deleteBankAccounts(id: number, bankAccountId: number): DeleteBankAccountDto | NotFoundException;
    getGoals(id: number): Goal[] | NotFoundException;
    getGoalById(id: number, goalId: number): Goal | NotFoundException;
    createGoal(id: number, newGoal: CreateGoalDto): Goal[] | NotFoundException;
    updateGoal(id: number, goalId: number, updatedGoal: UpdateGoalDto): Goal | NotFoundException;
    deleteGoal(id: number, goalId: number): DeleteGoalDto | NotFoundException;
    getBankAccountUsages(id: number, bankAccountId: number): Usage[] | NotFoundException;
    createBankAccountUsage(id: number, bankAccountId: number, newUsage: CreateUsageDto): Usage[] | NotFoundException;
    updateBankAccountUsage(id: number, bankAccountId: number, usageType: number, updatedUsage: UpdateUsageDto): Usage | NotFoundException;
    deleteBankAccountUsage(id: number, bankAccountId: number, usageType: number): DeleteUsageDto | NotFoundException;
    getSurplusCashFlowManagement(id: number): CashFlowDistribution[] | NotFoundException;
    getSurplusCashFlowManagementById(id: number, cashFlowDistributionId: number): CashFlowDistribution | NotFoundException;
    createSurplusCashFlowManagement(id: number, newCashFlowDistribution: CreateCashFlowDistributionDto): CashFlowDistribution[] | NotFoundException;
    updateSurplusCashFlowManagement(id: number, cashFlowDistributionId: number, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): CashFlowDistribution | NotFoundException;
    deleteSurplusCashFlowManagement(id: number, cashFlowDistributionId: number): DeleteCashFlowDistributionDto | NotFoundException;
    getUnexpectedCashFlowManagement(id: number): CashFlowDistribution[] | NotFoundException;
    getUnexpectedCashFlowManagementById(id: number, cashFlowDistributionId: number): CashFlowDistribution | NotFoundException;
    createUnexpectedCashFlowManagement(id: number, newCashFlowDistribution: CreateCashFlowDistributionDto): CashFlowDistribution[] | NotFoundException;
    updateUnexpectedCashFlowManagement(id: number, cashFlowDistributionId: number, updatedCashFlowDistribution: UpdateCashFlowDistributionDto): CashFlowDistribution | NotFoundException;
    deleteUnexpectedCashFlowManagement(id: number, cashFlowDistributionId: number): DeleteCashFlowDistributionDto | NotFoundException;
}
