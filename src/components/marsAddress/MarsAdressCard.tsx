import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import marsImg from '../../images/mars.png';

export const MarsAdressCard: React.FC<addressProps> = ({ addressData }) => {
  return (
    <>
      <img src={marsImg} alt='imagem de marte' className='w-10' />
      <p>{addressData.type}</p>
      <p>Endereço: {addressData.address}</p>
      <Button text='Editar' route={`/edit-address/${addressData.id}`} />
    </>
  )
}

