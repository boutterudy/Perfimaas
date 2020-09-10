import { Usage } from "../interfaces/usage.interface";

export class CreateBankAccountDto {
  readonly id: number;
  readonly bank: string;
  readonly charges: number;
  readonly usages: Usage[];
}
