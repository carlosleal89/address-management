import React from 'react'
import Button from './Button';
import logo from '../images/beyond_the_bytes.jpg';
import ImageEl from './Image';

function Header() {
  return (
    <div className="flex bg-slate-800 w-full h-20">
      <ImageEl img={logo} alt='Logo da Beyond The Bytes' classes='w-20' />
      <Button text= 'Novo Endereço' route='/new-address' classes='my-4 ml-auto mr-4 px-2 py-1' /> 
    </div>
  )
}

export default Header;