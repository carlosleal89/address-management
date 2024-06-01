import React from 'react';
import { useHistory } from 'react-router-dom';
import buttonProps from '../interfaces/buttonProps';

const  Button: React.FC<buttonProps> = ({ text, route }) => {
  const history = useHistory();
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded"
      onClick={() => history.push(route)}>
        {text}
    </button>
  )
}

export default Button;