import { IAddress } from '../interfaces/address';
import { earthAddressValidator, marsAddressValidator } from './schemas';

export const validateAddress = (formValues: IAddress) => {    
  const options = {
    abortEarly: false, // mostra todas a mensagens de erro, não somente a primeira
};
  const { type } = formValues;
  let error: any;
  if(type === 'earth') {
    const { address, neighborhood, city, zipCode, country } = formValues;
    error = earthAddressValidator.validate({ address, neighborhood, city, zipCode, country }, options)
  } else {
    error = marsAddressValidator.validate({address: formValues.address}, options);
  }


  if (error) {    
    return error;
  }
}