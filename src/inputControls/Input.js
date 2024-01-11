"use client"
import React, { Fragment } from 'react'

export const Input = ({type,value,model,handleChange}) => {
  return (
    <Fragment>
      <input name={model} onChange={handleChange} className='form-control' type={type} />
    </Fragment>
  )
}

