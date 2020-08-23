import { Injectable } from '@nestjs/common';
import { MessageClass } from '../class/message-class';
import __db from '../../__DB_PROXY__';

@Injectable()
export class MessageService {
  private readonly collection: MessageClass[];
  constructor() {
    this.collection = __db['message'];
    this.collection = new Array<MessageClass>();
  }
  async create(message: MessageClass) {
    return this.collection.push(message);
  }
  async getAll() {
    return this.collection.map(msg => ({ ...msg }));
  }
}
