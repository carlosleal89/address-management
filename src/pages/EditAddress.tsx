import React from 'react';
import { useParams } from 'react-router-dom';
import checkId from '../utils/checkId';
import EarthAddressForm from '../components/earthAddress/EarthAddressForm';
import MarsAddressForm from '../components/marsAddress/MarsAddressForm';
import Container from '../components/Container';

const EditAddress = () => {

  const { id } = useParams<{ id: string }>();
  const addressEl = checkId(id);
  
  return (
    <Container classes='m-8'>
      <h1>Editar endereço</h1>
      {
        addressEl && addressEl.type === 'earth' ? (
          <EarthAddressForm addressData={ addressEl } />
        ) : (
          <MarsAddressForm addressData={ addressEl } />
        )
      }
    </Container>    
  )
}

export default EditAddress;