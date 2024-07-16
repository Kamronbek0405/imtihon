import React from 'react'
import './input.css'

export const Input = ({ children, variant, type , className, id, placeholder,  }) => {
  return (
    <>
    <form >
        <label >
        <input id={id} type={type} className={className  + " input " + variant } placeholder={placeholder} />
        </label>
    </form>
    </>
  )
}
