import React from 'react'
import Button from './Button';

function Header() {
  return (
    <div className="flex bg-slate-800">
      <h1>Header</h1>
      <img src={ '' } alt="company logo" id="header-logo" />
      <Button text= 'Novo Endereço' route='/new-address' /> 
    </div>
  )
}

export default Header;