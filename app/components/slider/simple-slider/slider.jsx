
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {Autoplay, FreeMode} from 'swiper/modules';
import BackgroundRotate from '../../background/backgroundRotate';


function SimpleSlider({ title, data : allData, delay}) {
  
    return (

        <div className="w-full flex justify-center items-start flex-col lg:my-12">
    {/* 
          {
            simpleSliderError && toast.error(simpleSliderError)
          } */}
    
        <div className=" w-full flex justify-between items-center">
            <BackgroundRotate width=' w-6/12  md:w-3/12 lg:w-2/12' padding='p-1 lg:p-2'>
    
         <div className="flex justify-center items-center">
           <h4 className=' text-color-1 font-bold'>{title}</h4>
           
        </div>
            </BackgroundRotate>
            {/* <div>
           <Button width="w-full" btnType="link"> مشاهده همه<AiOutlineArrowLeft className=' inline mr-2'/></Button>
            </div> */}
              
     
           </div>
      <div className='w-full h-full'>
    
            <Swiper
            
            
            className=" w-full h-full m-8 p-20"
            
            slidesPerView={5}
            spaceBetween={2}
            loop={true}
            freeMode={true}
          // centeredSlides={true}
         autoplay={{
              delay: delay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            //  pagination={pagination}
    
            breakpoints={{
              640: {
                slidesPerView: 1,
              spaceBetween: 0
                
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 4
                
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 2
               
               
              },
            }}
            
    
            modules={[Autoplay,FreeMode]}
           
              
              >
          {allData?.map((slide) => (
            <SwiperSlide className="  bg-center bg-cover w-full h-44 lg:h-64 flex justify-center items-center hover:scale-105 custom-transition my-4 "  key={slide.id}>
              <div className=' w-full h-full  flex flex-col justify-center items-center' onClick={() => filmInfo(slide.name)}>
              <img className="  w-52 h-44 lg:h-64 rounded-lg cursor-pointer  shadow-md " src={slide.pic} alt={slide.name} />
              <div className='  px-2 -mt-3   rounded-lg shadow-md text-black  bg-color-hover '>
                <span className='text-md font-bold '>{slide.rate}</span>
                <span className='text-sm '>/10</span>
                </div>
                <span className=' text-md text-color-1 font-semibold'>{slide.type} {slide.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    
          </div>
          </div>
      )
}

export default SimpleSlider;