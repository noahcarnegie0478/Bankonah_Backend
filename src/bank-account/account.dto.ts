import { IsNotEmpty, IsString } from 'class-validator';

export class AccountDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  user_id: string;
  @IsString()
  @IsNotEmpty()
  plaid_account_id: string;
  @IsString()
  @IsNotEmpty()
  dwolla_funding_id: string;
  @IsString()
  @IsNotEmpty()
  institution_name: string;
  @IsString()
  @IsNotEmpty()
  account_name: string;
  @IsString()
  @IsNotEmpty()
  account_mask: string;
  @IsString()
  @IsNotEmpty()
  account_type: string;
  balance_available: number;
  balance_current: number;
  @IsString()
  @IsNotEmpty()
  currency: string;
}
