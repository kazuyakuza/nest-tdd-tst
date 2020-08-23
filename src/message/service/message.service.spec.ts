import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { MessageClass } from '../class/message-class';

const haveCreateMethod = service =>
  describe('create', () => {
    it('should return created message id', async () => {
      const _return = await service.create(new MessageClass());
      expect(_return).toBeNumber();
      expect(_return).toBeGreaterThan(0);
    });
  });
const haveGetAllMethod = service =>
  describe('getAll', () => {
    it('should return all available messages', async () => {
      const _return = await service.getAll();
      expect(_return).toBeArray();
    });
  });
describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  haveCreateMethod(service);
  haveGetAllMethod(service);
});
