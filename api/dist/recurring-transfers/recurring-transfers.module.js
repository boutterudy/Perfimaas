"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringTransfersModule = void 0;
const common_1 = require("@nestjs/common");
const recurring_transfers_service_1 = require("./recurring-transfers.service");
const recurring_transfers_controller_1 = require("./recurring-transfers.controller");
const users_service_1 = require("../users/users.service");
let RecurringTransfersModule = class RecurringTransfersModule {
};
RecurringTransfersModule = __decorate([
    common_1.Module({
        providers: [recurring_transfers_service_1.RecurringTransfersService, users_service_1.UsersService],
        controllers: [recurring_transfers_controller_1.RecurringTransfersController]
    })
], RecurringTransfersModule);
exports.RecurringTransfersModule = RecurringTransfersModule;
//# sourceMappingURL=recurring-transfers.module.js.map