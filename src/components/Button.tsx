import React from 'react';
import { useHistory } from 'react-router-dom';
import buttonProps from '../interfaces/buttonProps';

const  Button: React.FC<buttonProps> = ({ text, route, classes }) => {
  const history = useHistory();
  return (
    <button
      className={`${classes} hover:bg-blue-500 text-blue-500 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded`}
      onClick={() => history.push(route)}>
        {text}
    </button>
  )
}

export default Button;