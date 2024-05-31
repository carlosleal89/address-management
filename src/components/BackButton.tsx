import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
  const history = useHistory();
  return (
    <button
      className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-12 border border-amber-500 hover:border-transparent rounded"
      onClick={() => history.push('/')}>
        Voltar
    </button>
  )
}

export default BackButton;