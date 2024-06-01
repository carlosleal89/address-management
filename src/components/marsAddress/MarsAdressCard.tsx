import React from 'react';
import Button from '../Button';
import { addressProps } from '../../interfaces/addressProps';
import marsImg from '../../images/mars.png';
import BoldText from '../textTags/BoldText';
import ImageEl from '../Image';
import Container from '../Container';

export const MarsAdressCard: React.FC<addressProps> = ({ addressData }) => {
  return (
    <>
      <ImageEl img={marsImg} alt='Imagem de Marte' />
      <Container classes='ml-3 w-48 mr-auto '>
        <BoldText label='Lote:' text={addressData.address} />        
      </Container>
      <Container classes='ml-auto'>
        <BoldText text='Marte' />
      </Container>
      <Button
        text='Editar'
        route={`/edit-address/${addressData.id}`}
        classes='px-4 py-1 my-auto ml-auto mr-1 justify-center'
      />
    </>
  )
}

