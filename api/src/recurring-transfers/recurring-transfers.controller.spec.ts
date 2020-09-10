import { Test, TestingModule } from '@nestjs/testing';
import { RecurringTransfersController } from './recurring-transfers.controller';

describe('RecurringTransfersController', () => {
  let controller: RecurringTransfersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurringTransfersController],
    }).compile();

    controller = module.get<RecurringTransfersController>(RecurringTransfersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
