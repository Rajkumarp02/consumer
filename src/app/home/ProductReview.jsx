import Image from 'next/image'
import React from 'react'
import water from "../assests/water.jpg";
import instant from "../assests/instant.jpg";
import sa from "../assests/sa.png";
import visa from "../assests/visa.jpg";
import tooth from "../assests/toothpaste.jpg";
import solar from "../assests/Solar.png";
import waterm from "../assests/waterm.jpg";
import smart from "../assests/smart.png";

export const ProductReview = () => {
  return (
    <div className='bg-gray-100 px-24 py-12'>
        <button className='bg-red-800 text-white text-lg rounded p-5'>Product Reviews and Best Buy</button>
        <div className='grid grid-cols-4 mt-24 flex flex-row gap-6'>
             <div className='flex flex-col hover:cursor-pointer  justify-center items-center'>
               <div className='rounded-full'>
                <Image src={water} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Packaged drinking water</p>
             </div>

              
             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={instant} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Instant noodles</p>
             </div>
              

             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={visa} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>credit and debit cards</p>
             </div>



             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={sa} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Handwash & Hand sanitisers</p>
             </div>
            </div>

            <div className='grid grid-cols-4 mt-10 flex flex-row gap-6'>
             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={smart} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Smart Phones</p>
             </div>

         
             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={solar} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Solar Rooftop System</p>
             </div>

             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={waterm} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Water Purifier</p>
             </div>


             <div className='flex flex-col hover:cursor-pointer justify-center items-center'>
               <div className='rounded-full'>
                <Image src={tooth} className='rounded-full'/>
               </div>
               <p className='text-dark font-bold text-xl py-4'>Toothpastes </p>
             </div>


        </div>
    </div>
  )
}
