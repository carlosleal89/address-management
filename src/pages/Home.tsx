import React, { useEffect, useState } from 'react';
import { sendAlert } from '../utils/sendAlert';
import { IAddress } from '../interfaces/address';
import { MarsAdressCard } from '../components/marsAddress/MarsAdressCard';
import { EarthAdressCard } from '../components/earthAddress/EarthAddressCard';

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
    <div>
      <h1 className="text-xl font-semibold">Listagem de endereços</h1>      
      <div>
        { addressList.length > 0 ? (
          addressList.map(addressEl => (
            <div className="min-h-24 gap-1 mx-2 px-2 py-2 my-5 border border-blue-500 rounded flex" key={addressEl.id}>
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
          <p>Nenhum endereço cadastrado</p>
        )
        }
      </div>
    </div>
  )
}

export default Home;