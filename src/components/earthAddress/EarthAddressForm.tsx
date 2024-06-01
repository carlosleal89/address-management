import React from 'react';
import useForm from '../../hooks/useForm';
import SubmitButton from '../SubmitButton';
import handleFormSubmit from '../../utils/handleSubmit';
import { useLocation } from 'react-router-dom';
import Button from '../Button';
import { editAddressProps } from '../../interfaces/editAddressProps';
import TextInput from '../TextInput';
import Container from '../Container';

const EarthAddressForm: React.FC<editAddressProps> = ({ addressData }) => {
  const { pathname } = useLocation(); 

  const initialValues = {
    type: 'earth',
    address: '',
    neighborhood: '',
    city: '',
    zipCode: '',
    country: '',
  };

  const [ formValues, handleInputChange ] = useForm(addressData ? addressData : initialValues);

  return (
    <form
      className="mt-10 mb-5 flex flex-col items-start gap-5 w-80"
      onSubmit={(event) => handleFormSubmit(event, formValues, pathname)}
    >
      <TextInput
        name='address'
        onChange={handleInputChange}
        text='Endereço'
        value={formValues.address}      
      />
      <TextInput
        name='neighborhood'
        value={formValues.neighborhood}
        onChange={handleInputChange}
        text='Bairro'      
      />
      <TextInput
        name='city'
        value={formValues.city}
        onChange={handleInputChange}
        text='Cidade'      
      />
      <TextInput
        name='zipCode'
        value={formValues.zipCode}
          onChange={handleInputChange}
        text='CEP'      
      />
      <TextInput
        name='country'
        value={formValues.country}
        onChange={handleInputChange}
        text='País'      
      />
      <Container classes='mt-10 w-full flex items-center justify-around'>
        <SubmitButton />
        <Button
          text= 'Voltar'
          route='/'
          classes='px-12 py-2 my-auto ml-1 mr-1 justify-center'
        />
      </Container>      
    </form>
  )
}

export default EarthAddressForm