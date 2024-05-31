const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>, formValues: any) => {
  event.preventDefault();

  const localStorageData = localStorage.getItem('beyondAddresses');

  const beyondAddresses = localStorageData ? JSON.parse(localStorageData) : [];

  beyondAddresses.push(formValues);

  localStorage.setItem('beyondAddresses', JSON.stringify(beyondAddresses));
};

export default handleFormSubmit;