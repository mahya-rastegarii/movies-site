import React from 'react'

import BgRotate from '../../components/BgRotate/BgRotate'
import Form from '../../components/Form/Form'
import FormInput from '../../components/input/formInput/FormInput'
import Button from '../../components/Button/Button'

export default function Login() {
  return (
    <div className='w-full flex justify-center items-center  px-4 md:px-0 h-screen'>
       <BgRotate padding='p-2' width=' md:w-8/12 w-full lg:w-4/12'>

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
       </BgRotate>

          

    </div>
  )
}
