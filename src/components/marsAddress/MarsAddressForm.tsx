import React from 'react';
import useForm from '../../hooks/useForm';
import SubmitButton from '../SubmitButton';
import { useLocation } from 'react-router-dom';
import handleFormSubmit from '../../utils/handleSubmit';
import Button from '../Button';
import { editAddressProps } from '../../interfaces/editAddressProps';
import Container from '../Container';
import TextInput from '../TextInput';


const MarsAddressForm: React.FC<editAddressProps> = ({ addressData }) => {
  const { pathname } = useLocation(); 

  const initialValues = {
    type: 'mars',
    address: ''
  };

  const [ formValues, handleInputChange ] = useForm(addressData ? addressData : initialValues);

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event, formValues, pathname)}
      className="sm:mt-10 mb-5 flex flex-col items-start gap-5 w-80"  
    >
      <TextInput
        name='address'
        onChange={handleInputChange}
        text='Endereço'
        value={formValues.address}      
      />
      <Container classes='mt-10 w-full flex items-center justify-around'>
        <SubmitButton />
        <Button
          text= 'Voltar'
          route='/'
          classes='sm:px-12 py-2 my-auto ml-1 mr-1 justify-center'
        />
      </Container>
    </form>
  )
}

export default MarsAddressForm