import BackgroundRotate from "@/app/components/background/backgroundRotate";
import Button from "@/app/components/button/button";
import FormInput from "@/app/components/input/form-input/formInput";


export default function Login() {
    return (
     
      <div className='w-full flex justify-center items-center  px-4 md:px-0 h-screen'>



      <BackgroundRotate padding='p-2' width=' md:w-8/12 w-full lg:w-4/12'>

       <form 
      //  onSubmit={AuthForm.handleSubmit}
        className='w-full flex justify-center items-center px-2 md:px-0'>
        <div className="flex flex-col w-full lg:w-7/12  justify-center items-center my-16 space-y-4">

      <FormInput
      //  onChange={AuthForm.handleChange}
      //   onBlur={AuthForm.handleBlur}
      //    value={AuthForm.values.userName}
          type="text"  name='userName' placeholder='نام کاربری' />
      {/* {
        AuthForm.errors.userName && AuthForm.touched.userName &&  <div className="w-full flex justify-start items-center"><span className=' text-red-500 text-sm'>{AuthForm.errors.userName}</span></div>
      } */}
      <FormInput
      //  onChange={AuthForm.handleChange}
      //   onBlur={AuthForm.handleBlur}
      //    value={AuthForm.values.password}
          type="password"  name="password" placeholder="رمز عبور"/>
      {/* {
        AuthForm.errors.password && AuthForm.touched.password &&  <div className="w-full flex justify-start items-center"><span className=' text-red-500 text-sm'>{AuthForm.errors.password}</span></div>
      } */}
      <div className="w-full flex justify-start items-center text-color-1 font-semibold">
           <input className=' ml-2' type="checkbox" name="check"
            // onChange={AuthForm.handleChange}
            //  checked={AuthForm.values.check}
              id="remember-me" />
    
            <label htmlFor="remember-me" className=' text-color-1 text-sm'>مرا به خاطر بسپار</label>
            </div>
            <div className="flex justify-center items-center w-full ">
        <Button
         width="w-full mt-6"
         type="submit"
          // clicked={LogIn}
          >

         ورود   
        </Button>

       </div>
         </div>
      </form>
       </BackgroundRotate>

    </div>
    );
  }
  