import { NotFoundException } from '@nestjs/common';
import { RecurringTransfersService } from './recurring-transfers.service';
import { RecurringTransfer } from './interfaces/recurring-transfer.intarface';
export declare class RecurringTransfersController {
    private readonly recurringTransfersService;
    constructor(recurringTransfersService: RecurringTransfersService);
    getRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
    getChargesBankAccountRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
    getFixedMonthlyExpensesRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
    getVariableMonthlyExpensesRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
    getSavingRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
    getInvestmentsRecurringTransfers(id: string): RecurringTransfer[] | NotFoundException;
}
