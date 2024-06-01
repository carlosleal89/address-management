import React, { useEffect, useState } from 'react';
import { sendAlert } from '../utils/SendAlert';
import Button from '../components/Button';
import { IMars, IEarth } from '../interfaces/address';

function Home() {
  const [ addressList, setAddressList ] = useState<IMars[] | IEarth[]>([]);

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
      <h1 className="text-xl font-semibold">Home</h1>
      
      <div>
        { addressList.length > 0 ? (
          addressList.map(addressEl => (
            <div className="md:gap-2 gap-40 mt-5 mb-5 border rounded flex md:justify-start lg:justify-between py-3 px-3" key={addressEl.address}>
              <p>{addressEl.type}</p>
              <p>Endereço: {addressEl.address}</p>
              <Button text='Editar' route='/edit-user/:id' />
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