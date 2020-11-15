import { Expense } from "./expense.interface";
import { BankAccount } from "./bank-account.interface";
import { CashFlowDistribution } from "./cash-flow-distribution.interface";
import { Goal } from "./goal.interface";

export interface User {
  id: number;
  email: string;
  password: string;
  netMonthlyIncome: number;
  fixedMonthlyExpenses: Array<Expense>;
  variableMonthlyExpenses: Array<Expense>;
  bankAccounts: Array<BankAccount>;
  surplusCashFlowManagement: Array<CashFlowDistribution>;
  unexpectedCashFlowManagement: Array<CashFlowDistribution>;
  safetySavingsGoal?: number;
  goals: Array<Goal>;
}
