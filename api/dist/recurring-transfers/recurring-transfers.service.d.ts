import { NotFoundException } from '@nestjs/common';
import { RecurringTransfer } from './interfaces/recurring-transfer.intarface';
import { UsersService } from 'src/users/users.service';
export declare class RecurringTransfersService {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllOf(id: number): RecurringTransfer[] | NotFoundException;
    getChargesBankAccountRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException;
    getFixedMonthlyExpensesRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException;
    getVariableMonthlyExpensesRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException;
    getSavingRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException;
    getInvestmentsRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException;
}
