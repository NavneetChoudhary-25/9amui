"use client"
import React, { useState } from 'react'
import styles from './Login.module.css'
import Link from 'next/link'
import configuration from './configuration.json'
import { Input } from '@/inputControls/Input'
import { handleFieldValidation,handleFormValidation } from '@/validations/appValidations'

export const Login = () => {
  const[inputControls,setInputControls]=useState(configuration)
  const fnChange = (eve) => {
    setInputControls(handleFieldValidation(eve,inputControls))
  }

  const handleLogin=()=>{
    const [isFormInvalid, clonedInputControls, dataObj]= handleFormValidation(inputControls)
    if (isFormInvalid){
      setInputControls(clonedInputControls)
      return;
    }

    console.log("send the request with this data")
    console.log(dataObj)

  }

  return (
    <div className='container-fluid'>
      <h2 className='text-center my-3'>Login</h2>
      {
        inputControls?.map(({ lbl, tag, type, value, errorMessage, model }) => {
          return <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
              <b>{lbl}:</b>
            </div>
            <div className='col-sm-3'>
              < Input model={model} type={type} handleChange={fnChange} />
            </div>
            <div className='col-sm-4'>
              <b className='text-danger'>{errorMessage}</b>

            </div>
          </div>
        })
      }


      <div className='row'>
        <div className ='offset-sm-5 col-sm-7'>
          <button onClick={handleLogin} className ='btn btn-primary me-3'>Login</button>
          <Link href ="/register">To Register</Link>
        </div>

      </div>

    </div>
  )
}
