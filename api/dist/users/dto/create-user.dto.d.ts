import { Expense } from "../interfaces/expense.interface";
import { BankAccount } from "../interfaces/bank-account.interface";
import { CashFlowDistribution } from "../interfaces/cash-flow-distribution.interface";
import { Goal } from "../interfaces/goal.interface";
export declare class CreateUserDto {
    readonly id: number;
    readonly netMonthlyIncome: number;
    readonly fixedMonthlyExpenses: Array<Expense>;
    readonly variableMonthlyExpenses: Array<Expense>;
    readonly bankAccounts: Array<BankAccount>;
    readonly surplusCashFlowManagement: Array<CashFlowDistribution>;
    readonly unexpectedCashFlowManagement: Array<CashFlowDistribution>;
    readonly safetySavingsGoal?: number;
    readonly goals: Array<Goal>;
}
