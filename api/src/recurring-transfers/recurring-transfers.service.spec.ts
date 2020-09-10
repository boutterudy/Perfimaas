import { Test, TestingModule } from '@nestjs/testing';
import { RecurringTransfersService } from './recurring-transfers.service';

describe('RecurringTransfersService', () => {
  let service: RecurringTransfersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurringTransfersService],
    }).compile();

    service = module.get<RecurringTransfersService>(RecurringTransfersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
