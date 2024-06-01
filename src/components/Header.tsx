import React from 'react'
import Button from './Button';
import logo from '../images/beyond_the_bytes.jpg';

function Header() {
  return (
    <div className="flex bg-slate-800">
      <img src={ logo } alt="company logo" id="header-logo" className='w-12' />
      <Button text= 'Novo Endereço' route='/new-address' /> 
    </div>
  )
}

export default Header;