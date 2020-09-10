import { Injectable, NotFoundException } from '@nestjs/common';
import { RecurringTransfer } from './interfaces/recurring-transfer.intarface';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class RecurringTransfersService {
  constructor(private readonly usersService: UsersService) {}

  getAllOf(id: number): RecurringTransfer[] | NotFoundException {
    const user: User | NotFoundException = this.usersService.getById(id);
    if(user instanceof NotFoundException) {
      return user;
    } else {
      let recurringTransfers: RecurringTransfer[] = [];
      const bankAccounts = user.bankAccounts;
      const incomeBankAccount = user.bankAccounts.find(ba => ba.usages.find(u => u.type === 1));
      const fixedMonthlyExpenses = user.fixedMonthlyExpenses;
      let totalFixedMonthlyExpenses = 0;
      fixedMonthlyExpenses.forEach(function (fme) {
        totalFixedMonthlyExpenses = totalFixedMonthlyExpenses + fme.amount;
      });
      const fixedMonthlyExpenseBankAccount = user.bankAccounts.find(ba => ba.usages.find(u => u.type === 2));
      const variableMonthlyExpenses = user.variableMonthlyExpenses;
      let totalVariableMonthlyExpenses = 0;
      variableMonthlyExpenses.forEach(function (vme) {
        totalVariableMonthlyExpenses = totalVariableMonthlyExpenses + vme.amount;
      });
      const variableMonthlyExpensesBankAccount = user.bankAccounts.find(ba => ba.usages.find(u => u.type === 3));
      let totalBankAccountsCharges = 0;
      bankAccounts.forEach(function(ba) {
        totalBankAccountsCharges = totalBankAccountsCharges + ba.charges;
      });
      const surplusCashFlow = user.netMonthlyIncome - totalFixedMonthlyExpenses - totalVariableMonthlyExpenses - totalBankAccountsCharges;
      const surplusCashFlowManagement = user.surplusCashFlowManagement;
      let recurringTransferId = 1;

      // Recurring transfer for each bank account charges > 0 except income bank account
      bankAccounts.forEach(function (ba) {
        if(ba.charges > 0 && ba.id !== incomeBankAccount.id) {
          const newRecurringTransfer: RecurringTransfer = {
            id: recurringTransferId,
            title: ba.bank + " bank account charges",
            amount: ba.charges,
            fromBankAccount: incomeBankAccount,
            toBankAccount: ba,
          };
          recurringTransfers = [...recurringTransfers, newRecurringTransfer];
          recurringTransferId++;
        }
      });


      // Fixed monthly expenses recurringTransfer
      const recurringTransferFixedMonthlyExpenses: RecurringTransfer = {
        id: recurringTransferId,
        title: "Fixed monthly expenses",
        amount: totalFixedMonthlyExpenses,
        fromBankAccount: incomeBankAccount,
        toBankAccount: fixedMonthlyExpenseBankAccount,
      };

      recurringTransfers = [...recurringTransfers, recurringTransferFixedMonthlyExpenses];
      recurringTransferId++;

      // Daily (variable) expenses recurringTransfer
      const variableMonthlyExpensesRecurringTransfer: RecurringTransfer = {
        id: recurringTransferId,
        title: "Variable monthly expenses",
        amount: totalVariableMonthlyExpenses,
        fromBankAccount: incomeBankAccount,
        toBankAccount: variableMonthlyExpensesBankAccount,
      };

      recurringTransfers = [...recurringTransfers, variableMonthlyExpensesRecurringTransfer];
      recurringTransferId++;

      // Surplus Cash-Flow recurringTransfers
      surplusCashFlowManagement.forEach(function (cfd) {
        const newRecurringTransfer: RecurringTransfer = {
          id: recurringTransferId,
          title: cfd.title,
          amount: Math.round((cfd.percentage / 100 * surplusCashFlow + Number.EPSILON) * 100) / 100,
          fromBankAccount: incomeBankAccount,
          toBankAccount: bankAccounts.find(ba => ba.id === cfd.bankAccount),
        };

        recurringTransfers = [...recurringTransfers, newRecurringTransfer];
        recurringTransferId++;
      });
      return recurringTransfers;
    }
  }

  getChargesBankAccountRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException {
    let recurringTransfers: RecurringTransfer[] | NotFoundException = this.getAllOf(id);
    if (recurringTransfers instanceof NotFoundException) {
      return recurringTransfers;
    } else {
      recurringTransfers = recurringTransfers.filter(rt => rt.title.endsWith(" bank account charges"));
      return recurringTransfers;
    }
  }

  getFixedMonthlyExpensesRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException {
    let recurringTransfers: RecurringTransfer[] | NotFoundException = this.getAllOf(id);
    if (recurringTransfers instanceof NotFoundException) {
      return recurringTransfers;
    } else {
      recurringTransfers = recurringTransfers.filter(rt => rt.title === "Fixed monthly expenses");
      return recurringTransfers;
    }
  }

  getVariableMonthlyExpensesRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException {
    let recurringTransfers: RecurringTransfer[] | NotFoundException = this.getAllOf(id);
    if (recurringTransfers instanceof NotFoundException) {
      return recurringTransfers;
    } else {
      recurringTransfers = recurringTransfers.filter(rt => rt.title === "Variable monthly expenses");
      return recurringTransfers;
    }
  }

  getSavingRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException {
    let recurringTransfers: RecurringTransfer[] | NotFoundException = this.getAllOf(id);
    if (recurringTransfers instanceof NotFoundException) {
      return recurringTransfers;
    } else {
      recurringTransfers = recurringTransfers.filter(rt => rt.title === "Saving");
      return recurringTransfers;
    }
  }

  getInvestmentsRecurringTransfers(id: number): RecurringTransfer[] | NotFoundException {
    let recurringTransfers: RecurringTransfer[] | NotFoundException = this.getAllOf(id);
    if (recurringTransfers instanceof NotFoundException) {
      return recurringTransfers;
    } else {
      recurringTransfers = recurringTransfers.filter(rt => rt.title === "Investments");
      return recurringTransfers;
    }
  }
}
