import { BankAccount } from "src/users/interfaces/bank-account.interface";

export interface RecurringTransfer {
  id: number;
  title: string;
  amount: number;
  fromBankAccount: BankAccount;
  toBankAccount: BankAccount;
}
