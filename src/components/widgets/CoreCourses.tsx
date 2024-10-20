import React from 'react'
import Wrapper from '../shared/Wrapper'
import programmingFundamental from "../../assets/programming.jpg"
import nextjs from "../../assets/nextjs.jpg"
import earnaslearn from "../../assets/earn_as_your_learn.jpg"


import Boxes from '../shared/Boxes'

const CoreCourses = () => {
  return (
        <Wrapper>
    <div>
        <h2 className='text-custom-blue lg:text-3xl text-2xl bg-[#ffffff] font-bold'>Core Courses Sequence</h2>
        <div className='gap-10 mb-20  text-center font-semibold text-[#606068] text-lg flex flex-col lg:flex-row w-full xl:max-w-[70%]  '>
            <Boxes text='Programming Fundamentals' imageSrc={programmingFundamental} />
            <Boxes text='Web2 Using NextJS' imageSrc={nextjs} />
            <Boxes text='Earn as You Learn' imageSrc={earnaslearn} />
          </div>
       

    </div>
    </Wrapper>
  )
}

export default CoreCourses
