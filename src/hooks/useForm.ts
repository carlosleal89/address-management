import { ChangeEvent, useState } from 'react';

export default function useForm(initialValues: any) {
  const [ values, setValues ] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return [values, handleChange];
}