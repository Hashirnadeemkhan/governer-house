"use client"
import React from 'react'
import Wrapper from '../shared/Wrapper' // Remove .tsx extension and use the absolute path
import Image from 'next/image'
import menTech from "../../assets/menTech.jpg";
import solopreneurs from "../../assets/solopreneurs.jpg"
import techPeople from "../../assets/techPeople.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import slideShow1 from "../../assets/slideShow1.jpg"
import slideShow2 from "../../assets/slideShow2.jpg"
import slideShow3 from "../../assets/slideShow3.jpg"
import slideShow4 from "../../assets/slideShow4.jpg"
import slideShow5 from "../../assets/slideShow5.jpg"
import slideShow6 from "../../assets/slideShow6.jpg"
import slideShow7 from "../../assets/slideShow7.jpg"
import slideShow8 from "../../assets/slideShow8.jpg"














const Technology = () => {
  return (
    <section className='mt-16'>
      <Wrapper>
        <div>
          {/* Text section */}
          <div>
            <h2 className='text-custom-blue lg:text-3xl text-2xl bg-[#ffffff] font-bold text-center'>
              Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
            </h2>
            <p className='text-justify tracking-normal sm:tracking-wider leading-[1.7rem] mt-10'>
              The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
            </p>
          </div>

          {/* Image section */}
          <div className='gap-5 bg-gray-300 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10  '>
            <Image className='rounded-lg shadow-lg' src={menTech} alt='tech' />
            <Image className='rounded-lg shadow-lg h-full' src={solopreneurs} alt='solo' />
            <Image className='rounded-lg shadow-lg' src={techPeople} alt='techPeople' />
          </div>

         
        

    {/* Swiper component */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {/* Swiper slides with images */}
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow1} alt="Slide 1" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow2} alt="Slide 2" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow3} alt="Slide 3" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow4} alt="Slide 4" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow5} alt="Slide 5" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow6} alt="Slide 6" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow7} alt="Slide 7" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <Image src={slideShow8} alt="Slide 8" className="rounded-lg" layout="responsive" />
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </Wrapper>
    </section>
  );
};

export default Technology
