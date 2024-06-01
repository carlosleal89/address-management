import React from 'react';
import { useParams } from 'react-router-dom';
import checkId from '../utils/checkId';
import EarthAddressForm from '../components/earthAddress/EarthAddressForm';
import MarsAddressForm from '../components/marsAddress/MarsAddressForm';

const EditAddress = () => {

  const { id } = useParams<{ id: string }>();
  const addressEl = checkId(id);
  
  return (
    <div>
      <h1>Editar endereço</h1>
      {
        addressEl && addressEl.type === 'earth' ? (
          <EarthAddressForm addressData={ addressEl } />
        ) : (
          <MarsAddressForm addressData={ addressEl } />
        )
      }
    </div>
  )
}

export default EditAddress;