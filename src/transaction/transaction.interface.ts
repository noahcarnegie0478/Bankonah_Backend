export interface Transaction {
  id: string;
  account_id: string;
  type: string;
  amount: number;
  date: Date;
  description: string;
  status: string;
  category: string;
  created_at: Date;
}
