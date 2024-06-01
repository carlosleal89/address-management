import { IAddress } from "../interfaces/address";

const checkId = (id: string) => {
  const localStorageData = localStorage.getItem('beyondAddresses');

  if (localStorageData?.length) {
    const beyondAddresses: IAddress[] = JSON.parse(localStorageData);
    const isAddress = beyondAddresses.find((addressEl : any) => addressEl.id === id);
    return isAddress;
  }
}

export default checkId;