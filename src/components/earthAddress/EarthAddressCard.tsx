import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import earthImg from '../../images/earth.svg';
import BoldText from '../textTags/BoldText';
import SmallText from '../textTags/SmallText';
import ImageEl from '../Image';
import Container from '../Container';

export const EarthAdressCard: React.FC<addressProps> = ({ addressData }) => {  
  return (
    <>
      <ImageEl img={earthImg} alt='Imagem da Terra' />
      <Container classes='sm:ml-3 mr-auto w-80'>
        <BoldText text={addressData.address} />
        <SmallText text={addressData.neighborhood} />
      </Container>
      <Container classes='sm:mx-auto mr-auto'>
        <BoldText text={addressData.country} />
        <BoldText text={addressData.city} />
        <SmallText text={addressData.zipCode} />
      </Container>      
      <Button
        text='Editar'
        route={`/edit-address/${addressData.id}`}
        classes='sm:px-4 py-1 my-auto ml-1 mr-1 justify-center'
      />
    </>
  )
}

