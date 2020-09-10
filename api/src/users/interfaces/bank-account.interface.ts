import { Usage } from "./usage.interface";

export interface BankAccount {
  id: number;
  bank: string;
  charges: number;
  usages: Usage[];
}
