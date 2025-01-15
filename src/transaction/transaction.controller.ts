import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionServices: TransactionService) {}
  @Post()
  async create(@Body() createTransactionDto: TransactionDto) {
    return await this.transactionServices.create(createTransactionDto);
  }
  @Get()
  async findAll() {
    return await this.transactionServices.findAll();
  }
}
