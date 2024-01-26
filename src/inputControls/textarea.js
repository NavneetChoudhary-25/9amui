"use client"
import React, { Fragment } from 'react'

export const Textarea = ({ value, model, handleChange }) => {
  return (
    <Fragment>
      <textarea value={value} name={model} onChange={handleChange} className='form-control' />
    </Fragment>
  )

}

