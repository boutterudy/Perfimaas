export class CreateBankAccountDto {
  readonly id: number;
  readonly bank: string;
  readonly charges: number;
  readonly usage?: string;
}
