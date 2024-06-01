import generatedId from "./generateId";

const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>, formValues: any) => {
  event.preventDefault();

  const newId = generatedId();

  const localStorageData = localStorage.getItem('beyondAddresses');

  const beyondAddresses = localStorageData ? JSON.parse(localStorageData) : [];

  beyondAddresses.push({...formValues, id: newId});

  localStorage.setItem('beyondAddresses', JSON.stringify(beyondAddresses));
};

export default handleFormSubmit;