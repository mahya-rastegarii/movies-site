import { PiFilmSlateLight, PiFilmReelLight } from 'react-icons/pi';
import { BiLogoTelegram, BiLogoInstagram } from 'react-icons/bi';

import Link from 'next/link';

import SocialMediaButton from '../button/social-media-button';
import Logo from '../logo';
import Button from '../button/button';

export default function Footer() {

return(
  <>
  <div className=" w-10/12 bg-color-1 right-8  -rotate-2 rounded-3xl h-12 absolute shadow-lg"></div>
  <div className=" w-10/12 bg-color-2 right-2  -rotate-1 rounded-3xl h-12 absolute shadow-lg"></div>
    <div className='w-full p-3 flex justify-center  items-center bg-color-3 rounded-tr-3xl shadow-lg relative'>
    <div className="w-full flex flex-col space-y-5 md:space-y-16">

    <div className=' flex flex-col space-y-7 md:space-y-0 md:flex-row justify-around items-center'>

    <ul className=' text-color-1 space-y-3'>
      <li>
      
        <Link href="/">
        <Button btnType='link' width='w-full'>
        <PiFilmSlateLight className=' inline text-xl ml-1'/>
        همه فیلم ها
        </Button>
        </Link>
        
      </li>
      <li>
        <Link href="/">
         <Button btnType='link' width='w-full' >
        250 فیلم برتر IMDb
        </Button>
        </Link>
      {/* <button className=' hover:text-color-2 custom-transition'>
      
         250 فیلم برتر IMDb
         </button> */}
         </li>

    </ul>
    <ul className='  text-color-1 space-y-3 '>
    <li>
      <Link href="/">
      <Button btnType='link' width='w-full'>
      <PiFilmReelLight className='inline text-xl ml-1' />
      همه سریال ها
      </Button>
      </Link>
    {/* <button className=' hover:text-color-2 custom-transition'>
      <PiFilmReelLight className='inline text-xl ml-1'/>
      همه سریال ها
      </button> */}

    </li>
      <li> 
        <Link href="/">
        <Button btnType='link' width='w-full' >
         250 سریال برتر IMDb
        </Button>
        </Link>
      {/* <button className=' hover:text-color-2 custom-transition'>
        250 سریال برتر IMDb
      </button> */}
      </li>
    </ul>
   <div className=" flex flex-col justify-center space-y-4 items-center">
    {/* <h6 className='text-black  text-3xl font-semibold '> <span className=' text-color-2'>MOV</span>IES </h6> */}
    <Logo size='text-4xl'/>
    <ul className=' flex justify-center items-center'>
      <li>
        
          <SocialMediaButton hover= 'hover:bg-pink-700'>
            <BiLogoInstagram className='text-2xl'/>
          </SocialMediaButton>
      </li>
      <li>
          
          <SocialMediaButton hover='hover:bg-blue-700'>
            <BiLogoTelegram className='text-2xl'/>
          </SocialMediaButton>
      </li>
    </ul>

   </div>
    </div>
    <div className="flex flex-col justify-center items-center space-y-3">
      {/* <hr className={` w-11/12 text-color-1 ${theme === 'dark' ? "opacity-5" : ""} `} /> */}
  <p className=' text-color-1 opacity-80 text-sm font-thin '> تمامی حقوق مادی و معنوی این سایت محفوظ میباشد </p>
    </div>
    </div>
    </div>
    </>
)
}