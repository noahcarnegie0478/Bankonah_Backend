import { Injectable } from '@nestjs/common';
import { Account } from './account.interface';

@Injectable()
export class AccountService {
  private readonly acounts: Account[] = [];
  create(account: Account) {
    this.acounts.push(account);
  }
  findAll(): Account[] {
    return this.acounts;
  }
}
