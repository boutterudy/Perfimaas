import { Test, TestingModule } from "@nestjs/testing";
import { RecurringTransfersController } from "./recurring-transfers.controller";
import { RecurringTransfersService } from "./recurring-transfers.service";
import { UsersService } from "src/users/users.service";

describe("RecurringTransfersController", () => {
  let controller: RecurringTransfersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurringTransfersController],
      providers: [RecurringTransfersService, UsersService],
    }).compile();

    controller = module.get<RecurringTransfersController>(
      RecurringTransfersController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
