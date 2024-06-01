export interface IMars {
  type: string;
  address: string;
}

export interface IAddress {
  type: string;
  address: string;
  neighborhood?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}