import React from 'react'
import { useFormik } from 'formik'

import BgRotate from '../../components/BgRotate/BgRotate'
import Button from '../../components/Button/Button'
import { Schema } from '../../components/Form/Auth'
import FormInput from '../../components/input/formInput/FormInput'
export default function Login() {
  
  const AuthForm = useFormik({
    initialValues: {
      name:'',
      check: false,
      password:'',
    },

    onSubmit: values => {
       console.log(values)
    },
    validationSchema :Schema
  
  })
 

  
  return (
    <div className='w-full flex justify-center items-center  px-4 md:px-0 h-screen'>
       <BgRotate padding='p-2' width=' md:w-8/12 w-full lg:w-4/12'>

       <form onSubmit={AuthForm.handleSubmit} className='w-full flex justify-center items-center px-2 md:px-0'>
        <div className="flex flex-col w-full lg:w-7/12  justify-center items-center my-16 space-y-4">

      <FormInput onChange={AuthForm.handleChange} onBlur={AuthForm.handleBlur} value={AuthForm.values.name} type="text"  name='name' placeholder='نام کاربری' />
      {
        AuthForm.errors.name && AuthForm.touched.name &&  <div className="w-full flex justify-start items-center"><span className=' text-red-500 text-sm'>{AuthForm.errors.name}</span></div>
      }
      <FormInput onChange={AuthForm.handleChange} onBlur={AuthForm.handleBlur} value={AuthForm.values.password} type="password"  name="password" placeholder="رمز عبور"/>
      {
        AuthForm.errors.password && AuthForm.touched.password &&  <div className="w-full flex justify-start items-center"><span className=' text-red-500 text-sm'>{AuthForm.errors.password}</span></div>
      }
      <div className="w-full flex justify-start items-center text-color-1 font-semibold">
           <input className=' ml-2' type="checkbox" name="check" onChange={AuthForm.handleChange} checked={AuthForm.values.check} id="remember-me" />
    
            <label htmlFor="remember-me" className=' text-color-1 text-sm'>مرا به خاطر بسپار</label>
            </div>
            <div className="flex justify-center items-center w-full ">
        <Button width="w-full mt-6" type="submit">

         ورود   
        </Button>

       </div>
         </div>
      </form>
       </BgRotate>

    </div>
  )
}
