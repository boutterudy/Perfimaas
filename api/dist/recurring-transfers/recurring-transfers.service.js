"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringTransfersService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const user_interface_1 = require("../users/interfaces/user.interface");
let RecurringTransfersService = class RecurringTransfersService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllOf(id) {
        const user = this.usersService.getById(id);
        if (user instanceof common_1.NotFoundException) {
            return user;
        }
        else {
            let recurringTransfers = [];
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
            bankAccounts.forEach(function (ba) {
                totalBankAccountsCharges = totalBankAccountsCharges + ba.charges;
            });
            const surplusCashFlow = user.netMonthlyIncome - totalFixedMonthlyExpenses - totalVariableMonthlyExpenses - totalBankAccountsCharges;
            const surplusCashFlowManagement = user.surplusCashFlowManagement;
            let recurringTransferId = 1;
            bankAccounts.forEach(function (ba) {
                if (ba.charges > 0 && ba.id !== incomeBankAccount.id) {
                    const newRecurringTransfer = {
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
            const recurringTransferFixedMonthlyExpenses = {
                id: recurringTransferId,
                title: "Fixed monthly expenses",
                amount: totalFixedMonthlyExpenses,
                fromBankAccount: incomeBankAccount,
                toBankAccount: fixedMonthlyExpenseBankAccount,
            };
            recurringTransfers = [...recurringTransfers, recurringTransferFixedMonthlyExpenses];
            recurringTransferId++;
            const variableMonthlyExpensesRecurringTransfer = {
                id: recurringTransferId,
                title: "Variable monthly expenses",
                amount: totalVariableMonthlyExpenses,
                fromBankAccount: incomeBankAccount,
                toBankAccount: variableMonthlyExpensesBankAccount,
            };
            recurringTransfers = [...recurringTransfers, variableMonthlyExpensesRecurringTransfer];
            recurringTransferId++;
            surplusCashFlowManagement.forEach(function (cfd) {
                const newRecurringTransfer = {
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
    getChargesBankAccountRecurringTransfers(id) {
        let recurringTransfers = this.getAllOf(id);
        if (recurringTransfers instanceof common_1.NotFoundException) {
            return recurringTransfers;
        }
        else {
            recurringTransfers = recurringTransfers.filter(rt => rt.title.endsWith(" bank account charges"));
            return recurringTransfers;
        }
    }
    getFixedMonthlyExpensesRecurringTransfers(id) {
        let recurringTransfers = this.getAllOf(id);
        if (recurringTransfers instanceof common_1.NotFoundException) {
            return recurringTransfers;
        }
        else {
            recurringTransfers = recurringTransfers.filter(rt => rt.title === "Fixed monthly expenses");
            return recurringTransfers;
        }
    }
    getVariableMonthlyExpensesRecurringTransfers(id) {
        let recurringTransfers = this.getAllOf(id);
        if (recurringTransfers instanceof common_1.NotFoundException) {
            return recurringTransfers;
        }
        else {
            recurringTransfers = recurringTransfers.filter(rt => rt.title === "Variable monthly expenses");
            return recurringTransfers;
        }
    }
    getSavingRecurringTransfers(id) {
        let recurringTransfers = this.getAllOf(id);
        if (recurringTransfers instanceof common_1.NotFoundException) {
            return recurringTransfers;
        }
        else {
            recurringTransfers = recurringTransfers.filter(rt => rt.title === "Saving");
            return recurringTransfers;
        }
    }
    getInvestmentsRecurringTransfers(id) {
        let recurringTransfers = this.getAllOf(id);
        if (recurringTransfers instanceof common_1.NotFoundException) {
            return recurringTransfers;
        }
        else {
            recurringTransfers = recurringTransfers.filter(rt => rt.title === "Investments");
            return recurringTransfers;
        }
    }
};
RecurringTransfersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], RecurringTransfersService);
exports.RecurringTransfersService = RecurringTransfersService;
//# sourceMappingURL=recurring-transfers.service.js.map