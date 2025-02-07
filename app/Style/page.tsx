"use client";
import React from 'react'
import Image from 'next/image';
import p1 from "@/public/images/dress-style-1.png"
import p2 from "@/public/images/dress-style-2.png"
import p3 from "@/public/images/dress-style-3.png"
import p4 from "@/public/images/dress-style-4.png"


export default function DressStyle() {
  return (
<div data-aos="zoom-in" className="max-w-[95%] lg:max-w-[1239px] mx-auto bg-[#F0F0F0] rounded-[30px] mt-10 sm:mt-16 lg:mt-28">
  <div className="py-8 px-6 sm:py-10 sm:px-12 lg:py-11 lg:px-14">
    {/* Header */}
    <h1 className="text-center text-[24px] sm:text-[36px] lg:text-[48px] font-extrabold mt-3">
      BROWSE BY DRESS STYLE
    </h1>

    {/* Grid Section */}
    <div className="mt-12 sm:mt-16 lg:mt-20 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[10rem] sm:auto-rows-[14rem] lg:auto-rows-[18rem]">
      {/* Casual */}
      <div className="bg1 bg-white text-black rounded-lg p-4 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Casual</h1>
        <Image src={p1} alt='casual' width={500} height={500}></Image>
      </div>

      {/* Formal */}
      <div className="bg2 bg-white text-black rounded-lg p-4 sm:col-span-2 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Formal</h1>
        <Image src={p2} alt='formal' width={500} height={500}></Image>
      </div>

      {/* Party */}
      <div className="bg3 bg-white text-black rounded-lg p-4 col-span-2 sm:col-span-1 lg:col-span-2 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Party</h1>
        <Image src={p3} alt='party' width={500} height={500}></Image>
      </div>

      {/* Gym */}
      <div className="bg4 bg-white text-black rounded-lg p-4 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Gym</h1>
        <Image src={p4} alt='gym' width={500} height={500}></Image>
      </div>
    </div>
  </div>
</div>


  )
}