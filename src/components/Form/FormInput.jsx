import React from 'react'

export default function FormInput({type, placeholder, name, id, width}) {
  return (
    <input className={` bg-slate-700 rounded-xl p-2 border ${ width ? width: "w-full" }  border-slate-900 shadow-md outline-none text-white`} type={type} name={name} id={id}  placeholder={placeholder} />

  )
}
