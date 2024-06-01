import React, { useEffect, useState } from 'react';
import { sendAlert } from '../utils/sendAlert';
import { IAddress } from '../interfaces/address';
import { MarsAdressCard } from '../components/marsAddress/MarsAdressCard';
import { EarthAdressCard } from '../components/earthAddress/EarthAddressCard';
import BoldText from '../components/textTags/BoldText';
import Container from '../components/Container';

function Home() {
  const [ addressList, setAddressList ] = useState<IAddress[]>([]);

  useEffect(() => {
    const getAddressList = async () => {
      try {
        const localStorageData = localStorage.getItem('beyondAddresses');
        if (localStorageData?.length) {
          setAddressList(JSON.parse(localStorageData));
        }
      } catch(error: any) {
      console.error(error.message);
      sendAlert('Erro!',
        'Ocorreu um erro interno no servidor. Por favor, tente novamente.', 'error');
      }
    }
    getAddressList();
  }, [])

  return (
    <Container classes=''>
      <Container classes='text-xl ml-2 mb-5'>
        <BoldText text='Listagem de endereços' />
      </Container> 
      <Container classes=''>
        { addressList.length > 0 ? (
          addressList.map(addressEl => (
            <div className="min-h-24 gap-1 mx-2 px-2 my-5 py-2 border border-blue-500 rounded flex" key={addressEl.id}>
              {
                addressEl.type === 'earth' ? (
                  <EarthAdressCard addressData = { addressEl } />                  
                ) : (
                  <MarsAdressCard addressData = { addressEl } />
                )
              }
            </div>
          ))
        ) : (
          <Container classes='mt-10 ml-5 text-xl'>
            <BoldText text='Nenhum endereço cadastrado!' />
          </Container>
        )
        }        
      </Container>    
    </Container>
  )
}

export default Home;