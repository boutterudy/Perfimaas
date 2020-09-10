import { Usage } from "../interfaces/usage.interface";
export declare class CreateBankAccountDto {
    readonly id: number;
    readonly bank: string;
    readonly charges: number;
    readonly usages: Usage[];
}
