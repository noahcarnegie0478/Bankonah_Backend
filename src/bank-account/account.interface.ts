export interface Account {
  id: string;
  user_id: string;
  plaid_account_id: string;
  dwolla_funding_id: string;
  institution_name: string;
  account_name: string;
  account_mask: string;
  account_type: string;
  balance_available: number;
  balance_current: number;
  currency: string;
  //   created_at: string;
  //   updated_at: string;
}
