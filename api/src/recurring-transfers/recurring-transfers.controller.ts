import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { RecurringTransfersService } from './recurring-transfers.service';
import { RecurringTransfer } from './interfaces/recurring-transfer.intarface';

@Controller('recurringtransfers')
export class RecurringTransfersController {
  constructor(private readonly recurringTransfersService: RecurringTransfersService) {}

  @Get(':id')
  getRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getAllOf(+id);
  }

  @Get(":id/bankaccountscharges")
  getChargesBankAccountRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getChargesBankAccountRecurringTransfers(+id);
  }

  @Get(":id/fixedmonthlyexpenses")
  getFixedMonthlyExpensesRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getFixedMonthlyExpensesRecurringTransfers(+id);
  }

  @Get(":id/variablemonthlyexpenses")
  getVariableMonthlyExpensesRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getVariableMonthlyExpensesRecurringTransfers(+id);
  }

  @Get(":id/saving")
  getSavingRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getSavingRecurringTransfers(+id);
  }

  @Get(":id/investments")
  getInvestmentsRecurringTransfers(@Param('id') id: string): RecurringTransfer[] | NotFoundException {
    return this.recurringTransfersService.getInvestmentsRecurringTransfers(+id);
  }
}
