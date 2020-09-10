import { Usage } from "../interfaces/usage.interface";
export declare class UpdateBankAccountDto {
    readonly bank: string;
    readonly charges: number;
    readonly usages: Usage[];
}
