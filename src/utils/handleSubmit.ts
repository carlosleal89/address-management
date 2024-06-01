import { IAddress } from "../interfaces/address";
import extractIdFromUrl from "./extractId";
import generatedId from "./generateId";
import updateAddress from "./updateAddress";

const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>, formValues: IAddress, url: string) => {
  event.preventDefault();

  const localStorageData = localStorage.getItem('beyondAddresses');

  const beyondAddresses = localStorageData ? JSON.parse(localStorageData) : [];

  if (url.includes('edit')) {
    const id = extractIdFromUrl(url);
    updateAddress(beyondAddresses, id, formValues);
  } else {
    const newId = generatedId();  
  
    beyondAddresses.push({...formValues, id: newId});
  
    localStorage.setItem('beyondAddresses', JSON.stringify(beyondAddresses));
  }

};

export default handleFormSubmit;