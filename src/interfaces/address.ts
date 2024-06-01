export interface IAddress {
  id?: string;
  type: string;
  address: string;
  neighborhood?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}