"use client"
import React from 'react'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export const Banner = () => {
    const images = [
        { url: "https://picsum.photos/seed/a/1600/900" },
        { url: "https://picsum.photos/seed/b/1920/1080" },
        { url: "https://picsum.photos/seed/c/1366/768" },
    ];

    return (
        <div className='bg-gray-100 px-12 mt-40'>
        <div className='grid grid-cols-12 px-10 py-6 gap-4'>
            <div className='col-span-12 md:col-span-8 h-full bg-white shadow-2xl box-shadow mx-12'>
                <Slider imageList={images} className="w-full h-full" />
                <div className='flex flex-row justify-center gap-12'>
                    <div className='border-2 bg-red-800 border-red-800 w-64 block mx-5 p-2 text-center mb-2'>
                    <button className='p-2 w-full rounded shadow-lg text-xl font-bold text-dark bg-white'>40 years of VOICE</button>
                    </div>
                     <div className='border-2 bg-red-800 border-red-800 w-64 block mx-5 p-2 text-center mb-2' >
                     <button className='p-2 w-full rounded shadow-lg text-xl font-bold text-dark bg-white'>वॉयस की 40वीं सालगिरह</button>
                     </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-3 flex flex-col bg-white p-6 space-y-6 w-60 h-full'>
                <ul className='space-y-10'>
                    <li className='text-lg font-semibold list-disc'>Two-Wheeler Loans: Get on the Road with Financial Flexibility!</li>
                    <li className='text-lg font-semibold list-disc'>Family Floater Health Insurance Policies</li>
                    <li className='text-lg font-semibold list-disc'>Righteous move to remove ‘fair’ from lovely</li>
                    <li className='text-lg font-semibold list-disc'>Wedding Insurance Buying Guide</li>
                    <li className='text-lg font-semibold list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
            </div>
            </div>
    )
}
