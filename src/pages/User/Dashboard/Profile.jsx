import React from 'react'

import ProfilePhoto from '../../../assets/img/user.png'

import Form from '../../../components/Form/Form'
import FormInput from '../../../components/input/formInput/FormInput'
import Button from '../../../components/Button/Button'
export default function Profile() {
 
  return (

    <div className=' flex flex-col justify-center py-4 items-center space-y-14 text-color-1'>
      <div className="flex flex-col justify-center items-center space-y-4">

                <img className=' rounded-full  ' src={ProfilePhoto} width={122} alt="ProfilePhoto" />
                <Button >
                تغییر عکس پروفایل
                </Button>
                {/* <button className=' font-bold bg-slate-900 p-2 rounded-md shadow-md custom-transition hover:bg-slate-700 '>تغییر عکس پروفایل</button> */}
      </div>
             k
                  {/* <form  >
                    <div className="w-full flex flex-col justify-center items-center space-y-6"> */}
                    <Form>

                  <div className="w-full flex items-center justify-between"> <label htmlFor="name">نام کاربری :</label> <FormInput width='w-7/12' type='text' id="name" /></div>
                  <div className="w-full flex items-center justify-between"> <label htmlFor="email"> ایمیل :</label> <FormInput width='w-7/12' type='email' id="email" /></div>
                  <div className="w-full flex items-center justify-between"> <label htmlFor="oldPass"> رمز عبور :</label> <FormInput width='w-7/12' type='password' id="oldPass" /></div>
                  <div className="w-full flex items-center justify-between"> <label htmlFor="newPass"> رمز عبور جدید :</label> <FormInput width='w-7/12' type='password' id="newPass" /></div>
                  <div className='w-full p-5'>

                    {/* <button className='w-full font-bold bg-slate-900 p-2 rounded-md shadow-md custom-transition  hover:bg-slate-700'> ذخیره تغییرات</button> */}
                    <Button width='w-full'>

                    ذخیره تغییرات
                    
                    </Button>
                  </div>
                    </Form>
                    {/* </div>
                  </form> */}
               
               
    </div>
  )
}
