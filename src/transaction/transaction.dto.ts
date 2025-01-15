import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class TransactionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  account_id: string;
  @IsString()
  @IsNotEmpty()
  type: string;
  @IsInt()
  @IsNotEmpty()
  amount: number;
  @IsDate()
  @IsNotEmpty()
  date: Date;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  status: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsString()
  @IsNotEmpty()
  created_at: Date;
}
