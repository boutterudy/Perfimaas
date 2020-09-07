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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_expense_dto_1 = require("./dto/create-expense.dto");
const update_expense_dto_1 = require("./dto/update-expense.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll() {
        return this.usersService.getAll();
    }
    getById(id) {
        return this.usersService.getById(+id);
    }
    createUser(newUser) {
        return this.usersService.createUser(newUser);
    }
    updateUser(id, updatedUser) {
        return this.usersService.updateUser(+id, updatedUser);
    }
    deleteUser(id) {
        return this.usersService.deleteUser(+id);
    }
    getFixedMonthlyExpenses(id) {
        return this.usersService.getFixedMonthlyExpenses(+id);
    }
    getFixedMonthlyExpenseById(id, expenseId) {
        return this.usersService.getFixedMonthlyExpenseById(+id, +expenseId);
    }
    createFixedMonthlyExpense(id, newExpense) {
        return this.usersService.createFixedMonthlyExpense(+id, newExpense);
    }
    updateFixedMonthlyExpense(id, expenseId, updatedExpense) {
        console.log('id', +id, 'expenseId', +expenseId);
        return this.usersService.updateFixedMonthlyExpense(+id, +expenseId, updatedExpense);
    }
    deleteFixedMonthlyExpense(id, expenseId) {
        return this.usersService.deleteFixedMonthlyExpense(+id, +expenseId);
    }
    getVariableMonthlyExpenses(id) {
        return this.usersService.getVariableMonthlyExpenses(+id);
    }
    getVariableMonthlyExpenseById(id, expenseId) {
        return this.usersService.getVariableMonthlyExpenseById(+id, +expenseId);
    }
    createVariableMonthlyExpense(id, newExpense) {
        return this.usersService.createVariableMonthlyExpense(+id, newExpense);
    }
    updateVariableMonthlyExpense(id, expenseId, updatedExpense) {
        console.log('id', +id, 'expenseId', +expenseId);
        return this.usersService.updateVariableMonthlyExpense(+id, +expenseId, updatedExpense);
    }
    deleteVariableMonthlyExpense(id, expenseId) {
        return this.usersService.deleteVariableMonthlyExpense(+id, +expenseId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Array)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.Get(':id/fixedmonthlyexpenses'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getFixedMonthlyExpenses", null);
__decorate([
    common_1.Get(':id/fixedmonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getFixedMonthlyExpenseById", null);
__decorate([
    common_1.Post(':id/fixedmonthlyexpenses'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_expense_dto_1.CreateExpenseDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createFixedMonthlyExpense", null);
__decorate([
    common_1.Patch(':id/fixedmonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_expense_dto_1.UpdateExpenseDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateFixedMonthlyExpense", null);
__decorate([
    common_1.Delete(':id/fixedmonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteFixedMonthlyExpense", null);
__decorate([
    common_1.Get(':id/variablemonthlyexpenses'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getVariableMonthlyExpenses", null);
__decorate([
    common_1.Get(':id/variablemonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getVariableMonthlyExpenseById", null);
__decorate([
    common_1.Post(':id/variablemonthlyexpenses'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_expense_dto_1.CreateExpenseDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createVariableMonthlyExpense", null);
__decorate([
    common_1.Patch(':id/variablemonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_expense_dto_1.UpdateExpenseDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateVariableMonthlyExpense", null);
__decorate([
    common_1.Delete(':id/variablemonthlyexpenses/:expenseId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('expenseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteVariableMonthlyExpense", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map