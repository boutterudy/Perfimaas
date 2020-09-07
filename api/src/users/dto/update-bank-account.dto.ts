export class UpdateBankAccountDto {
  readonly bank: string;
  readonly charges: number;
  readonly usage?: string;
}
