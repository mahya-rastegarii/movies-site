import React from 'react'

import { BsHandThumbsUp, BsHandThumbsDown} from 'react-icons/bs'


import Button from '../../components/Button/Button';

import ProfilePhoto from '../../assets/img/user.png';

export default function CommentBox() {
  return (
    <div className=" bg-color-4  rounded-2xl w-full flex justify-between items-center py-3 px-4 ">
      <div className=" flex justify-start items-center">
       <div className=" flex justify-center items-center">
       <div className="flex flex-col items-center justify-center space-y-2 mx-3">
          <button><BsHandThumbsDown className=' inline text-2xl text-red-500'/></button>
          <span className='text-sm '>0</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <button><BsHandThumbsUp className=' inline text-2xl text-green-500'/></button>
          <span className='text-sm '>0</span>
        </div>
       
       </div>
       <div className=' flex- flex-col justify-center items-center space-y-3 mr-4'>
        <div className=" flex justify-start items-center ">
        <img className=' rounded-full  ml-4' src={ProfilePhoto} width={50} alt="ProfilePhoto" />
        <span className=' text-xl text-color-2'> Name</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, deleniti.111</p>
       </div>
       </div>
       <div className=' flex justify-center items-center'>
        <Button width="w-full" bgColor='bg-color-2'>
          گزارش اسپویل
        </Button>
       </div>
      
    </div>
  )
}
