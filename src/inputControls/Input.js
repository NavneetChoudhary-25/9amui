"use client"
import React, { Fragment } from 'react'

export const Input = ({ type, value, model, handleChange, options, values }) => {
  switch (type) {
    case 'text':
    case 'password':
    case 'date':
      return (
        <Fragment>
          <input name={model} onChange={handleChange} className='form-control' type={type} />
        </Fragment>
      )
    case 'radio':
      return (
        <Fragment>
          {
            options.map((val) => {
              return <><input className='ms-3' name={model} onChange={handleChange}  type={type} />{val}</>

            })
          }
        </Fragment>
      )
    case 'checkbox':
      return (
        <Fragment>
          {
            options.map((val) => {
              return <><input className='ms-3' name={model} onChange={handleChange}  type={type} />{val}</>

            })
          }
        </Fragment>
      )

  }

}

