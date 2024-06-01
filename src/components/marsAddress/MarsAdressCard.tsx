import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import marsImg from '../../images/mars.png';
import BoldText from '../textTags/BoldText';

export const MarsAdressCard: React.FC<addressProps> = ({ addressData }) => {
  return (
    <>
      <img src={marsImg} alt='imagem de marte' className='w-10 mt-1 mb-auto' />
      <BoldText label='Lote:' text={addressData.address} />
      <Button
        text='Editar'
        route={`/edit-address/${addressData.id}`}
        classes='sm:w-10 h-10 my-auto ml-auto mr-1 justify-center'
      />
    </>
  )
}

