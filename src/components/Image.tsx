import React from 'react';
import { imgProps } from '../interfaces/imgProps';

const ImageEl: React.FC<imgProps> = ({ img, alt }) => {
  return (
    <img src={img} alt={alt} className='w-10 mt-1 mb-auto' />
  )
}

export default ImageEl;