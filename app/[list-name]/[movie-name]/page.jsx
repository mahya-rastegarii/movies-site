'use client';


import { MoviesData } from "@/app/fetch/movies-data";
import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineDateRange, MdOutlineTimer } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";


import HeaderBackdrop from "@/app/components/backdrops/header-backdrop";
import BackgroundRotate from "@/app/components/background/backgroundRotate";
import Button from "@/app/components/button/button";
import GenreLabel from "@/app/components/label/genre-label";
import ImdbLabel from "@/app/components/label/imdb-label";
import CommentBox from "@/app/components/box/comment-box";
import DownloadBox from "@/app/components/box/download-box";
import Disclosure from "@/app/components/disclosure/Disclosure";
// import { useRouter } from "next/router";

import Image from "next/image";
import { comments } from "@/app/fetch/comments";




export default function Movie() {
  // const router = useRouter();

  // const {id} = router.query;

  // const [movieInfo, setMovieInfo] =useState([])

 const movieInfo = {
    id: 0,
    name: "Oppenheimer",
    pic: "/pic/bg1.webp",
    type:"سریال",
    time: 65,
    year:1390,
    status: "درحال پخش",
    director:"deddeddd",
    tv:"hp",
    rate: 8.2,
    country:"آمریکا",
    genres: ["بیوگرافی", "جنایی"],
    summary:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quasi dignissimos unde blanditiis fugit nulla voluptatibus labore reprehenderit eius repudiandae. Quo ratione eaque dolorem mollitia incidunt recusandae neque, praesentium accusamus.",
  }
 

  // useEffect (() => {
  
  //   const movie = MoviesData.filter(m =>  m.id === id);
 
  //    setMovieInfo(movie);
  
  // }, []);

  return (
    <>
    
        <div className=" flex flex-col justify-center items-center mb-16 space-y-20">
         
         

          <HeaderBackdrop bg={movieInfo.pic}>
            <div className=" w-full z-10 lg:p-10 flex lg:flex-row  flex-col justify-center items-center p-4 ">
              <div className=" mx-3 w-full lg:w-3/12 flex justify-center lg:justify-end items-center">

                <Image
                  className="rounded-2xl shadow-gray-900 shadow-2xl "
                  width={500}
                height={300}
                  src={movieInfo.pic}
                  alt={movieInfo.name}
                />
              </div>
              <div className=" mx-3 flex w-7/12 flex-col lg:justify-start justify-center items-start text-white font-semibold space-y-4 ">
                <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row w-full justify-center lg:justify-between items-center">
                  <h4 className=" font-bold text-white text-lg">
                    {movieInfo.name} {movieInfo.type}
                  </h4>

                

                  <ImdbLabel score={movieInfo.rate} />
                </div>
                <div className="flex w-full flex-col text-white  space-y-4 ">
                  <div className=" flex lg:justify-start items-center justify-center text-slate-300">
                    {movieInfo.genre?.map((genre, index) => (
                      <GenreLabel borderColor="border-slate-300" key={index}>
                        {genre}
                      </GenreLabel>
                    ))}
                  </div>
                  <div className="w-full flex lg:flex-col lg:justify-start justify-center lg:space-y-5 items-center">
                    <div className="w-full flex  lg:justify-start justify-center items-center">
                      <MdOutlineTimer className=" inline ml-2 text-xl text-color-2 mr-7 lg:mr-0" />
                      <span className=" ">زمان : {movieInfo.time} دقیقه</span>
                    </div>
                  </div>
                  <div className="w-full flex lg:justify-start lg:flex-col justify-center lg:space-y-5 items-center">
                    {movieInfo.year ? (
                      <div className="w-full flex  lg:justify-start justify-center items-center">
                        <MdOutlineDateRange className=" inline ml-2 text-xl text-color-2" />
                        <span className=" ">
                          {" "}
                          سال انتشار : {movieInfo.year}
                        </span>
                      </div>
                    ) : movieInfo.status ? (
                      <div className="w-full flex  lg:justify-start justify-center items-center">
                        <GrStatusUnknown className=" inline ml-2 text-xl text-color-2" />
                        <span className=" ">
                          {" "}
                          وضعیت پخش : {movieInfo.status}
                        </span>
                      </div>
                    ) : null}
                    {movieInfo.director ? (
                      <div className="w-full flex  lg:justify-start justify-center items-center">
                        <RiUserLine className=" inline ml-2 text-xl text-color-2 mr-7 lg:mr-0" />
                        <span className=" ">
                          کارگردان : {movieInfo.director}
                        </span>
                      </div>
                    ) : movieInfo.tv ? (
                      <div className="w-full flex  lg:justify-start justify-center items-center">
                        <PiTelevisionLight className=" inline ml-2 text-xl text-color-2 mr-7 lg:mr-0" />
                        <span className=" "> شبکه : {movieInfo.tv}</span>
                      </div>
                    ) : null}
                  </div>
                  {/* <div className='w-full flex justify-start items-center'><PiFilmReelBold className=' inline ml-2 text-xl text-color-2'/><span className=' '>ژانر : </span></div> */}
                  <div className="w-full flex  lg:justify-start justify-center items-center">
                    <BsGlobe className=" inline ml-2 text-xl text-color-2" />
                    <span className=" ">محصول کشور : {movieInfo.country}</span>
                  </div>

                  <div className="w-full flex lg:justify-start justify-center items-center">
                    <p>{movieInfo.summary}</p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <span className="  bg-green-600 p-2 rounded-lg text-sm">
                      زیرنویس چسبیده
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HeaderBackdrop>
          <div className=" md:w-10/12 w-full lg:w-7/12 flex flex-col p-5 space-y-20">
            {movieInfo.desc && (
              <BackgroundRotate padding=" p-4">
                <div className="w-full text-right text-color-1">
                  {movieInfo.desc}
                </div>
              </BackgroundRotate>
            )}

            <BackgroundRotate padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">
              <Disclosure title="لینک های دانلود" open="true">
                <div className="p-8 flex flex-col space-y-3">
                  <div>
                    <Disclosure
                      bg="bg-color-2"
                      rounded="rounded-lg"
                      border="border-color-1"
                      title="نسخه زیرنویس چسبیده فارسی"
                    >
                      <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">
                        <DownloadBox quality="1080p" />
                        <DownloadBox quality="720p" />
                        <DownloadBox quality="480p" />
                      </div>
                    </Disclosure>
                  </div>
                  <div>
                    <Disclosure
                      bg="bg-color-2"
                      rounded="rounded-lg"
                      border="border-color-1"
                      title="نسخه دوبله فارسی"
                    >
                      <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">
                        <DownloadBox quality="1080p" />
                        <DownloadBox quality="720p" />
                        <DownloadBox quality="480p" />
                      </div>
                    </Disclosure>
                  </div>
                </div>
              </Disclosure>
            </BackgroundRotate>


            <BackgroundRotate padding="p-1" rotate1="-rotate-1" rotate2="rotate-1">
              <Disclosure title="نظرات" open="true">
                <div className="w-full  flex flex-col justify-center items-center p-4 space-y-2">
                  <textarea
                    rows="6"
                    // onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-color-2 rounded-md p-2 outline-none  border shadow-sm resize-y focus:placeholder:opacity-75 focus:border-2 border-color-1"
                    // value={commentText}
                    placeholder="دیدگاه خود را بنویسید..."
                  />
                  <div className=" w-full flex flex-col justify-center items-center">
                    <Button
                      width="w-3/12"
                      bgColor="bg-color-hover"
                      // clicked={() => AddNewComment(movieInfo.name, "mahya")}
                    >
                      {" "}
                      ارسال دیدگاه{" "}
                    </Button>
                  </div>
                </div>
                <hr className=" border-color-1 opacity-50" />
                <div className=" w-full flex flex-col justify-center items-center space-y-6 pt-4">
                  <div className="w-full flex justify-between px-4">
                    <FaRegCommentDots className="inline text-color-2 text-2xl" />

                    <span className="text-xl text-color-2 ">
                      {comments.length}
                    </span>
                  </div>

               { comments ? (
                    comments?.map((comment) => (
                      <CommentBox key={comment.id} {...comment} />
                    ))
                  ) : null}
                </div>
              </Disclosure>
            </BackgroundRotate>
          
          </div>
        </div>
      
    </>
   )
  }
  