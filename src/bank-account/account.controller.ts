import { Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}
  @Post()
  async createAccount(createAccountDto: AccountDto) {
    return await this.accountService.create(createAccountDto);
  }
  @Get()
  async findAll() {
    return await this.accountService.findAll();
  }
}
