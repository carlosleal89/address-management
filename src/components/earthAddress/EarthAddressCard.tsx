import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import earthImg from '../../images/earth.svg';
import BoldText from '../textTags/BoldText';
import SmallText from '../textTags/SmallText';
import ImageEl from '../Image';

export const EarthAdressCard: React.FC<addressProps> = ({ addressData }) => {  
  return (
    <>
      <ImageEl img={earthImg} alt='Imagem da Terra' />
      <div className='sm:ml-1'>
        <BoldText text={addressData.address} />
        <SmallText text={addressData.neighborhood} />
      </div>
      <div className='sm:mx-auto'>
        <BoldText text={addressData.country} />
        <BoldText text={addressData.city} />
        <SmallText text={addressData.zipCode} />
      </div>
      <Button
        text='Editar'
        route={`/edit-address/${addressData.id}`}
        classes='sm:w-10 h-10 my-auto ml-auto mr-1 justify-center'
      />
    </>
  )
}

