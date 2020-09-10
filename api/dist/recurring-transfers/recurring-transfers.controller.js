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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringTransfersController = void 0;
const common_1 = require("@nestjs/common");
const recurring_transfers_service_1 = require("./recurring-transfers.service");
let RecurringTransfersController = class RecurringTransfersController {
    constructor(recurringTransfersService) {
        this.recurringTransfersService = recurringTransfersService;
    }
    getRecurringTransfers(id) {
        return this.recurringTransfersService.getAllOf(+id);
    }
    getChargesBankAccountRecurringTransfers(id) {
        return this.recurringTransfersService.getChargesBankAccountRecurringTransfers(+id);
    }
    getFixedMonthlyExpensesRecurringTransfers(id) {
        return this.recurringTransfersService.getFixedMonthlyExpensesRecurringTransfers(+id);
    }
    getVariableMonthlyExpensesRecurringTransfers(id) {
        return this.recurringTransfersService.getVariableMonthlyExpensesRecurringTransfers(+id);
    }
    getSavingRecurringTransfers(id) {
        return this.recurringTransfersService.getSavingRecurringTransfers(+id);
    }
    getInvestmentsRecurringTransfers(id) {
        return this.recurringTransfersService.getInvestmentsRecurringTransfers(+id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getRecurringTransfers", null);
__decorate([
    common_1.Get(":id/bankaccountscharges"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getChargesBankAccountRecurringTransfers", null);
__decorate([
    common_1.Get(":id/fixedmonthlyexpenses"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getFixedMonthlyExpensesRecurringTransfers", null);
__decorate([
    common_1.Get(":id/variablemonthlyexpenses"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getVariableMonthlyExpensesRecurringTransfers", null);
__decorate([
    common_1.Get(":id/saving"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getSavingRecurringTransfers", null);
__decorate([
    common_1.Get(":id/investments"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RecurringTransfersController.prototype, "getInvestmentsRecurringTransfers", null);
RecurringTransfersController = __decorate([
    common_1.Controller('recurringtransfers'),
    __metadata("design:paramtypes", [recurring_transfers_service_1.RecurringTransfersService])
], RecurringTransfersController);
exports.RecurringTransfersController = RecurringTransfersController;
//# sourceMappingURL=recurring-transfers.controller.js.map