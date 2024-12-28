"use client"
import React, { useState } from 'react'
import Logo from "/public/logo.png"
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { CompulsoryData } from '@/data/main/complusory';
import { tracks } from '@/data/main/tracks';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const navLinks=[
  {id:1 , title: "Home", Link:"/"},
{id: 2 , title: "Apply", Link:"/apply"},
{id:3, title:"Jobs",Link:"/jobs"},
{id:4, title:"Result",Link :"/result"}
]

const Navbar = () => {
  const[open,setOpen] =useState(false)   //Controls whether the mobile menu is open or closed.by default close ha
  const[showMenu,setShowMenu] =useState(false)          //Controls whether the dropdown for courses is visible.
  return (
<>
    <div className='sticky top-0 z-30 w-full bg-custom-blue backdrop-blur-3xl print:hidden'>
  <div className='m-auto flex h-16 w-[95%] lg:w-[90%] items-center justify-between'>
    <Link href={"/"}>
      <Image
        src={Logo}
        alt="logo"
        width={90}
        className='mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]'
      />
    </Link>
  <h2 className='hidden text-[1.125rem] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl'>Tuition Free Education Program on Latest Technologies</h2>
  <h2 className='lg:hidden text-[1.125rem] font-extrabold text-[#b9d8f3] '>Tuition Free Program{" "}</h2>
  
  {/* Desktop Navbar (for bigger screens) */}

<div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10 '>
  {navLinks.map((item)=>(
    <Link key={item.id} href={item.Link}>
    <div>{item.title}</div></Link>
  ))}

  {/* Courses Dropdown */}
  <div className='relative cursor-pointer' onClick={()=>setShowMenu(!showMenu)}>  {/* Toggles the dropdown menu. */}
    <div className='flex items-center'>Courses<IoIosArrowDown className='pl-2 size-5'/>
    </div>
    {/* When showMenu is true */}
    {showMenu && (
      <div className='my absolute right-0 mt-20 w-30 rounded-lg bg-white text-black shadow-2xl'>
        <div className='bg-zinc-50 p-5 h-[300px] sm:h-auto overflow-y-auto'>
          <h1 className='text-left text-lg font-bold text-black pb-3'>Core Courses</h1>
          {CompulsoryData.map((val)=>(
            <Link href={`/compulsory/${val.id}`} key={val.id}>
            <div className='py-1 px-2 text-sm text-black hover:text-custom-blue' key={val.id}>{val.text}</div>
             </Link>
          ))}
          <hr className='mt-5 mb-5'/>
          <h1 className='text-left text-lg font-bold text-black pb-3'>Advanced Courses</h1>
          {tracks.map((val)=>(
            <Link href={`/tracks/${val.id}`} key={val.id}>
            <div className='py-1 px-2 text-sm text-black hover:text-custom-blue'  key={val.id}>{val.name}</div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
</div>

{/* Mobile Navbar (for smaller screens) */}

<div className='block sm:hidden'>
<FiMenu size={24} className=' text-white' onClick={()=>setOpen(true)}/>   {/* opens the mobile menu when clicked hamburger icon */}
</div>
  </div>
</div>

{/* When the mobile menu is open, this section becomes visible */}

<div className={`fixed left-0 top-0 z-40 h-full w-full bg-custom-blue print:hidden ${!open && "hidden"}`}> {/* agr menu band ho means open false ho tu ye div hidden hojaye */}
  <div className='absolute right-5 top-5'>
  <RxCross1 className='text-white' size={25} onClick={()=>setOpen(false)}  />    {/*  A close (X) button at the top-right corner closes the menu (setOpen(false)).*/}
  </div>

  {/* Rendering Mobile Links */}
<div className='m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white'>
  {navLinks.map((item)=>(
    <Link href={item.Link} onClick={()=>setOpen(false)} key={item.id}>       {/* Clicking a link also closes the menu (setOpen(false)).*/}
      <div className='border-b border-[#1468a4] py-5 capitalize'>{item.title}</div>
    </Link>
  ))}

{/* Mobile Courses Dropdown */}
  <div className={`py-5 ${!showMenu && "border-b"} border-[#146895]`} onClick={()=>setShowMenu(!showMenu)}>   {/* Toggles the dropdown menu. */}
    <div className='flex justify-between items-center'>
      Courses
      <IoIosArrowDown size={16}/>
    </div>
    <div className={`overflow-y-auto mt-3 rounded-xl bg-[#146895] ${showMenu ? "h-auto": "h-0 overflow-hidden"}`}>
      <h2 className='mt-3 px-2 text-center text-lg text-white  font-semibold'>Core Courses</h2>
      {CompulsoryData.map((val,index)=>(
            <Link onClick={()=>setOpen(false)} key={index} href={`/compulsory/${val.id}`}>
            <div className=' px-2 text-sm text-white py-2' key={val.id}>{val.text}</div>
            <div className='border-b border-blue-500 capitalize'></div>
            </Link>
           
          ))}
      <h2 className='mt-3 px-2 text-center text-lg text-white font-semibold'>Advanced Courses</h2>
      {tracks.map((val)=>(
            <Link href={`/tracks/${val.id}`} key={val.id}>
            <div className=' px-2 text-sm text-white py-2 mt-3' key={val.id}>{val.name}</div>
            <div className='border-b border-blue-500 capitalize'></div>
            </Link>
           
          ))}
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Navbar
