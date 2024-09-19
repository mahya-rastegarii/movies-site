
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';

import { Images } from '@/app/fetch/slider3D-data';
import Image from 'next/image';


export default function Slider3D ( {setSlideInfo} ) {

    // const {setSlideInfo } = useDataMovieContext()

    return (



        





        <div className='w-full h-full'>

        <Swiper

     onSlideChange={(event) => {
      
     const filterImage = [...Images?.filter((item)=> item.id === event.realIndex)]
          const CurrentImg = filterImage[0]
          setSlideInfo(CurrentImg)
         
     }}
        
        className=" w-full h-full m-8 p-20"
        
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        //  slidesPerView={'auto'}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
        }}
        
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        //  pagination={{ el: '.swiper-pagination', clickable: true }}
        //  navigation={{
          //    nextEl: '.swiper-button-next',
          //    prevEl: '.swiper-button-prev',
          //    clickable: true,
          //  }}

          breakpoints={{
            640: {
              slidesPerView: 1,
            
              
            },
            768: {
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
             
            },
          }}
          
          modules={[Autoplay, EffectCoverflow]}
          
          >
      {Images?.map((img) => (
        <SwiperSlide className="swiper-3DSlider bg-center bg-cover w-full flex justify-center  items-center relative" onClick={()=>console.log(img.id)}  key={img.id} >
          <Image className=" block  rounded-md " width={400} height={200} src={img.pic}   alt={img.name}/>
        </SwiperSlide>
      ))}
    </Swiper>

      </div>
    )
}