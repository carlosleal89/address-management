import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import { IMars } from '../../interfaces/address';

export const MarsAdressCard: React.FC<addressProps> = ({ addressData }) => {
  return (
    <>
      <p>{addressData.type}</p>
      <p>Endereço: {addressData.address}</p>
      <Button text='Editar' route='/edit-user/:id' />
    </>
  )
}

