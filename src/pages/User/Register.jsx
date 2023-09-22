import React from 'react';

import BgRotate from '../../components/BgRotate/BgRotate'
import Form from '../../components/Form/Form'
import FormInput from '../../components/input/formInput/FormInput'
import Button from '../../components/Button/Button';

export default function Register() {
  return (
    
    <div className='w-full flex justify-center items-center px-4 md:px-0 h-screen'>
       <BgRotate padding='p-2' width=' md:w-8/12 w-full lg:w-4/12'>

      <Form>
        <FormInput type="text" placeholder="نام کاربری"/>
        <FormInput type="number" placeholder="شماره تلفن"/>
        <FormInput type="password" placeholder="رمز عبور"/>
        <FormInput type="password" placeholder="تکرار رمز عبور"/>
       
       <div className="flex justify-center items-center w-full ">
        <Button width="w-full mt-6">

          ثبت نام
        </Button>

       </div>
        {/* <button className=' bg-color-4 p-2 rounded-md w-full text-color-1 text-lg '> ثبت نام </button> */}
      </Form>
       </BgRotate>
    </div>
  )
}
