import Button from "@/app/components/button/button";
import FormInput from "@/app/components/input/form-input/formInput";

import profilePhoto from "@/public/pic/user.png";
import { MdOutlineAddAPhoto } from "react-icons/md"
import { CiEdit } from "react-icons/ci";
import Image from "next/image";


export default function Profile() {

    return (
    
      <div className=' flex flex-col justify-center py-4 items-center space-y-14 text-color-1'>
      <div className="flex flex-col justify-center items-center space-y-4">

                <Image className=' rounded-full  ' src={profilePhoto} width={60} height={60} alt="ProfilePhoto" />
               
                  <div className="bg-color-1 absolute -top-1">
               {/* <MdOutlineAddAPhoto className=' inline '/> */}

                  </div>
               
                
               </div>
               <div className="flex justify-center items-center hover:text-color-2">
                <span> name  </span>
                <CiEdit className=' inline'/>
               </div>

               <div className="flex justify-center items-center hover:text-color-2">
                <span> ایمیل </span>
                <CiEdit className='inline '/>
               </div>

               <div className="flex justify-center items-center">
                <Button width="w-full">
                  تغییر رمز
                </Button>
               </div>

               <div className=' w-full px-4 md:px-0'>

               <form className='w-full flex justify-center items-center px-2 md:px-0'>
        <div className="flex flex-col w-full lg:w-7/12  justify-center items-center my-16 space-y-4">

                  <div className="w-full flex items-center justify-between"> <label htmlFor="oldPass"> رمز عبور :</label> <FormInput width='w-7/12'  type='password' id="oldPass" /></div>
                  <div className="w-full flex items-center justify-between"> <label htmlFor="newPass"> رمز عبور جدید :</label> <FormInput width='w-7/12'  type='password' id="newPass" /></div>
                  <div className='w-full p-5'>

                    
                    <Button width='w-full'>

                    ذخیره تغییرات
                    
                    </Button>
                  </div>
            </div>
      </form>
          
                    </div>
               
               
    </div>
    )
  }
  