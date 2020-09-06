"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: 1,
                netMonthlyIncome: 1200.85,
                fixedMonthlyExpenses: [
                    {
                        title: "OVH - VPS",
                        amount: 15.59,
                    },
                    {
                        title: "OVH - rudyboutte.com",
                        amount: 1.00,
                    },
                    {
                        title: "OVH - bonalim.com",
                        amount: 1.00,
                    },
                    {
                        title: "OVH - rudy.cloud",
                        amount: 1.80,
                    },
                ],
                variableMonthlyExpenses: [
                    {
                        title: "Fuel",
                        amount: 90.00,
                    },
                    {
                        title: "Shopping",
                        amount: 0.00,
                    },
                    {
                        title: "Pleasures",
                        amount: 100.00,
                    },
                ],
                bankAccounts: [
                    {
                        bank: "CIC",
                        charges: 6.00,
                        usage: "Fixed monthly expenses and monthly income",
                    },
                    {
                        bank: "N26",
                        charges: 0.00,
                        usage: "Daily (variable) expenses",
                    },
                    {
                        bank: "CIC",
                        charges: 6.00,
                        usage: "Saving",
                    },
                    {
                        bank: "Coinbase",
                        charges: 0.00,
                        usage: "Investments",
                    },
                ],
                unexpectedCashFlowManagement: [
                    {
                        title: "To make myself happy and to please others",
                        percentage: 33,
                    },
                    {
                        title: "In savings",
                        percentage: 13,
                    },
                    {
                        title: "In investments",
                        percentage: 50,
                    },
                    {
                        title: "Donation to charity",
                        percentage: 4,
                    },
                ],
                safetySavingsGoal: 4,
                goals: [
                    {
                        title: "Travel to Vietnam and Cambodia",
                        amount: 4076.00,
                    },
                ],
            },
        ];
    }
    getAll() {
        return this.users;
    }
    getById(id) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            return new common_1.NotFoundException('Cannot find any user with id ' + id);
        }
        else {
            return user;
        }
    }
    createUser(user) {
        this.users = [...this.users, user];
    }
    updateUser(id, updatedUser) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return new common_1.NotFoundException('Cannot find any user with id ' + id);
        }
        else {
            if (updatedUser.netMonthlyIncome) {
                user.netMonthlyIncome = updatedUser.netMonthlyIncome;
            }
            if (updatedUser.fixedMonthlyExpenses) {
                user.fixedMonthlyExpenses = updatedUser.fixedMonthlyExpenses;
            }
            if (updatedUser.variableMonthlyExpenses) {
                user.variableMonthlyExpenses = updatedUser.variableMonthlyExpenses;
            }
            if (updatedUser.bankAccounts) {
                user.bankAccounts = updatedUser.bankAccounts;
            }
            if (updatedUser.unexpectedCashFlowManagement) {
                user.unexpectedCashFlowManagement = updatedUser.unexpectedCashFlowManagement;
            }
            if (updatedUser.safetySavingsGoal) {
                user.safetySavingsGoal = updatedUser.safetySavingsGoal;
            }
            if (updatedUser.goals) {
                user.goals = updatedUser.goals;
            }
            this.users = [...this.users.map(u => u.id !== id ? u : user)];
            return user;
        }
    }
    deleteUser(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return new common_1.NotFoundException('Cannot find any user with id ' + id);
        }
        else {
            const nbOfUsersBeforeDelete = this.users.length;
            this.users = this.users.filter(u => u.id !== id);
            return {
                usersDeleted: nbOfUsersBeforeDelete - this.users.length,
                nbUsersAfterDelete: this.users.length,
            };
        }
    }
};
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map