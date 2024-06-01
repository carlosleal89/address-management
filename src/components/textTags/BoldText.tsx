import React from 'react';
import { textProps } from '../../interfaces/textProps';

const BoldText: React.FC<textProps> = ({ text, label }) => {
  return (
    <p className='font-semibold'>{`${label ? label : ''} ${text}`}</p>
  )
}

export default BoldText;