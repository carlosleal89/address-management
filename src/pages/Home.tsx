import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendAlert } from '../utils/SendAlert';
import Button from '../components/Button';

function Home() {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    const getAddressList = async () => {
      try {
        const localStorageData = localStorage.getItem('beyondAddresses');
        console.log(localStorageData);
        
        // setUsersList(data);
        setIsLoading(false);
      } catch(error: any) {
      console.error(error.message);
      sendAlert('Erro!',
        'Ocorreu um erro interno no servidor. Por favor, tente novamente.', 'error');
      setIsLoading(false);
      }
    }
    getAddressList();
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <Button text= 'Novo Endereço' route='/new-address' />
    </div>
  )
}

export default Home;