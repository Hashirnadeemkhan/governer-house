import React from 'react'
import Boxes from '../shared/Boxes'
import ai from "../../assets/Ai.jpg"
import automation from "../../assets/automation.jpg"
import cloud  from "../../assets/cloudComputing.jpg"
import metaverse from "../../assets/metaverse.jpg"
import genomics from "../../assets/genomics.jpg"
import iot from "../../assets/iot.jpg"
import Wrapper from '../shared/Wrapper'

const AdvanceCourse = () => {
  return (
    <Wrapper>
    <div>
        <h2 className='text-custom-blue lg:text-3xl text-2xl bg-[#ffffff] font-bold'>Core Courses Sequence</h2>
        <div className='gap-10 mb-20 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 text-center font-semibold text-[#606068] text-lg'>
        <Boxes text='Artificial Intelligence' imageSrc={ai} />
        <Boxes text='Web 3 and Metaverse' imageSrc={metaverse} />
        <Boxes text='Cloud-Native Computing' imageSrc={cloud} />
        <Boxes text='Ambient Computing and IOT' imageSrc={iot} />
        <Boxes text='Genomics and Bioinformics' imageSrc={genomics} />
        <Boxes text='Network Programmibility and Automation' imageSrc={automation} />
        </div>
    </div>
    </Wrapper>
  )
}

export default AdvanceCourse
