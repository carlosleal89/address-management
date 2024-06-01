import React from 'react'
import { textProps } from '../../interfaces/textProps'

const SmallText: React.FC<textProps> = ({ text }) => {
  return (
    <p className='text-sm text-slate-500'>{text}</p>
  )
}

export default SmallText