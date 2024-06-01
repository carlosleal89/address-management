import React from 'react'
import { divProps } from '../interfaces/divProps';

const Container: React.FC<divProps> = ({children, classes}) => {
  return (
    <div className={classes}>{children}</div>
  )
}

export default Container;