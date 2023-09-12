import React from 'react'
import {MdOutlineFavoriteBorder, MdOutlineLogout} from 'react-icons/md';
import { AiOutlineProfile, AiOutlineComment} from 'react-icons/ai'

import BgRotateWrapper from '../../components/Wrappers/BgRotateWrapper';
import DashboardButton from '../../components/Button/DashboardButton';
import FavoritesList from './FavoritesList'
import Profile from './Profile'

import ProfilePhoto from '../../assets/img/user.png'

export default function Dashboard() {
  return (
    <div className='flex justify-around items-center my-16  p-2 h-screen'>

        <div className="w-2/12 flex shadow-md flex-col relative justify-center items-center bg-color-3 rounded-xl  font-semibold text-md space-y-16 text-color-1 ">
          <div className=' w-full flex flex-col justify-center items-center  '>
                <img className=' rounded-full absolute ' src={ProfilePhoto} width={122} alt="ProfilePhoto" />
          </div>

                <span className='font-bold text-xl text-color-1'>Name</span>

          <div className='  w-full  flex flex-col '>
            <ul className=' rounded-xl'>

          
           <DashboardButton>
            <AiOutlineProfile className=' inline ml-2 text-xl'/>
           داشبورد
           </DashboardButton>
           <DashboardButton>
            <MdOutlineFavoriteBorder className=' inline ml-2 text-xl'/>
          لیست مورد علاقه ها 
           </DashboardButton>
           <DashboardButton>
            <AiOutlineComment className=' inline ml-2 text-xl'/>
            کامنت ها
           </DashboardButton>
           <DashboardButton textColor="text-red-500" rounded=" rounded-b-xl">
            <MdOutlineLogout className=' inline ml-2 text-xl'/>
             خروج از حساب
           </DashboardButton>
           </ul>
          </div>
        </div>
        <div className="  w-6/12">
        <BgRotateWrapper>
           <div className="rounded-lg p-2">
             <Profile/>
             {/* <FavoritesList/> */}
           </div>
        </BgRotateWrapper>
        </div>

    </div>
  )
}
