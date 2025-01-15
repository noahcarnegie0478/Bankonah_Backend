import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  fullname: string;
  @IsDate()
  @IsNotEmpty()
  dob: Date;
  @IsInt()
  @IsNotEmpty()
  phone_number: number;
  @IsString()
  @IsNotEmpty()
  address_line1: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  state: string;
  @IsInt()
  postal_code: number;
  @IsString()
  country: string;
}
