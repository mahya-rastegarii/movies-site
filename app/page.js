"use client";

import { Images } from "@/app/fetch/slider3D-data";
import { useEffect, useState } from "react";

import Slider3D from "./components/slider/slider3D/slider";
import SliderContainer from "./components/slider/slider3D/slider-container";
import AdvancedSearchBox from "./components/search/advanced-search-box";
import Container from "./components/searchBox-sidebar/container";
import SimpleSlider from "./components/slider/simple-slider/slider";

export default function Home() {
  const [slideInfo, setSlideInfo] = useState();

  const slider = [
    {
      delay: 2500,
      title: " جدیدترین فیلم ها",
      // data: newMovie,
      data: Images,

    },
    {
      delay: 2500,
      title: " جدیدترین سریال ها",
      // data: NewSerial,
      data: Images,
    },
  ];
  useEffect(()=> {
    setSlideInfo(Images[0])
  }, [])

  return (
    <main className=" w-full flex flex-col justify-center items-center">
      <SliderContainer slideInfo={slideInfo}>
        <Slider3D setSlideInfo={setSlideInfo} />
      </SliderContainer>
    
      <Container>
         {slider.map((slider, index) => (
              <SimpleSlider {...slider} key={index} />
            ))}
      </Container>
    </main>
  );
}
