import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import earthImg from '../../images/earth.svg';

export const EarthAdressCard: React.FC<addressProps> = ({ addressData }) => {  
  return (
    <>
      <img src={earthImg} alt='imagem da terra' className='w-10' />
      <p>Rua: {addressData.address}</p>
      <p>Bairro: {addressData.neighborhood}</p>
      <p>Cidade: {addressData.city}</p>
      <p>País: {addressData.country}</p>
      <p>CEP: {addressData.zipCode}</p>
      <Button text='Editar' route={`/edit-address/${addressData.id}`} />
    </>
  )
}

