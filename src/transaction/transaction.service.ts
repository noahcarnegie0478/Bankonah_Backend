import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.interface';

@Injectable()
export class TransactionService {
  private Transactions: Transaction[] = [];
  create(transaction: Transaction) {
    this.Transactions.push(transaction);
  }
  findAll(): Transaction[] {
    return this.Transactions;
  }
}
