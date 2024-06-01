import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import marsImg from '../../images/mars.png';
import BoldText from '../textTags/BoldText';
import ImageEl from '../Image';

export const MarsAdressCard: React.FC<addressProps> = ({ addressData }) => {
  return (
    <>
      <ImageEl img={marsImg} alt='Imagem de Marte' />
      <BoldText label='Lote:' text={addressData.address} />
      <Button
        text='Editar'
        route={`/edit-address/${addressData.id}`}
        classes='sm:w-10 h-10 my-auto ml-auto mr-1 justify-center'
      />
    </>
  )
}

