import React from 'react'

import BgRotateWrapper from '../components/Wrappers/BgRotateWrapper'
import Form from '../components/Form/Form'
import FormInput from '../components/Form/FormInput'
import Button from '../components/Button/Button'

export default function Login() {
  return (
    <div className='w-full flex justify-center items-center  h-screen'>
       <BgRotateWrapper padding='p-2' width='w-4/12'>

      <Form>
      <FormInput type="text" placeholder='نام کاربری'/>
      <FormInput type="password" placeholder="رمز عبور"/>
      <div className="w-full flex justify-start items-center text-color-1 font-semibold">
           <input className=' ml-2' type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me" className=' text-color-1 text-sm'>مرا به خاطر بسپار</label>
            </div>
         {/* <button className=' bg-color-4 p-2 rounded-md w-full text-color-1 text-lg '> ورود </button> */}

         <Button width="w-full">
         ورود
         </Button>
      </Form>
       </BgRotateWrapper>

          

    </div>
  )
}
