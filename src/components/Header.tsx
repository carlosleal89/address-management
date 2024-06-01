import React from 'react'
import Button from './Button';
import logo from '../images/beyond_the_bytes.jpg';

function Header() {
  return (
    <div className="flex bg-slate-800 w-full h-20">
      <img src={ logo } alt="company logo" id="header-logo" className='w-20' />
      <Button text= 'Novo Endereço' route='/new-address' classes='my-4 ml-auto mr-4' /> 
    </div>
  )
}

export default Header;