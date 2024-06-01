import { IAddress } from "../interfaces/address";

const updateAddress = (addressList: IAddress[], addressId: string, formValues: IAddress) => {
  const addressesArray = addressList;
  const elementIndex = addressesArray.findIndex(addressEl => addressEl.id === addressId);
  if (elementIndex !== -1) {
    addressesArray[elementIndex] = formValues;
    localStorage.setItem('beyondAddresses', JSON.stringify(addressesArray));
  }
}

export default updateAddress;