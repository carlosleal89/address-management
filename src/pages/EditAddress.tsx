import React from 'react';
import { useParams } from 'react-router-dom';
import checkId from '../utils/checkId';
import EarthAddressForm from '../components/earthAddress/EarthAddressForm';
import MarsAddressForm from '../components/marsAddress/MarsAddressForm';
import Container from '../components/Container';
import BoldText from '../components/textTags/BoldText';

const EditAddress = () => {

  const { id } = useParams<{ id: string }>();
  const addressEl = checkId(id);
  
  return (
    <Container classes='m-8'>
      <Container classes='text-xl'>
        <BoldText text='Novo Endereço' />
      </Container>
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