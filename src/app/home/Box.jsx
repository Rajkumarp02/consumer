"use client"
import React from 'react'

export const Box = () => {
  return (
    <div className='bg-white p-16 hover:cursor-pointer'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='flex flex-col bg-white border-r-8 border-yellow-400 hover:border-yellow-800 border-b-8 border-yellow-800 p-4'>
          <div className='hover:bg-gradient-to-r from-[#581c87] to-[#FFFFFF] hover:rounded hover:p-5 flex-grow'>
            <h4 className='text-blue-500 font-bold text-xl'>Who we are</h4>
            <p className='py-6 text-md font-medium text-dark tracking-wide leading-loose'>
              Consumer VOICE is a Voluntary Action Group of Academicians, 
              Professionals and Volunteers who work relentlessly to raise awareness amongst Indian consumers about their own Consumer Rights and the governing Consumer Laws. Consumer VOICE provides independent and unbiased reviews of food items, consumer durables…
            </p>
          </div>
          <button className='px-3 py-3 text-start text-red-700 text-lg font-bold italic font-serif self-start mt-4'>Read More</button>
        </div>

        <div className='flex flex-col bg-white border-r-8 border-yellow-400 hover:border-yellow-800 border-b-8 border-yellow-800 p-4'>
          <div className='hover:bg-gradient-to-r from-[#581c87] to-[#FFFFFF] hover:rounded hover:p-5 flex-grow'>
            <h4 className='text-blue-500 font-bold text-xl hover:text-yellow-900'>Our Vision</h4>
            <p className='py-6 text-md font-medium text-dark tracking-wide leading-loose'>
              To pursue strong and effective Consumers Rights Advocacy to reinforce consumers rights and empowerment by raising consumer awareness of their rights in today’s dynamic economy, develop policies, regulations and standards in the market place…
            </p>
          </div>
          <button className='px-3 py-3 text-start text-red-700 text-lg font-bold italic font-serif self-start mt-4'>Read More</button>
        </div>

        <div className='flex flex-col bg-white border-r-8 border-yellow-400 hover:border-yellow-800 border-b-8 border-yellow-800 p-4'>
          <div className='hover:bg-gradient-to-r from-[#581c87] to-[#FFFFFF] hover:rounded hover:p-5 flex-grow'>
            <h4 className='text-blue-500 font-bold text-xl hover:text-yellow-900'>From Coo's Desk</h4>
            <p className='py-6 text-md font-medium text-dark tracking-wide leading-loose'>
              This day aims to protect consumer rights and protect them from market abuse and social injustices that may undermine their rights. In India, National Consumer’s Rights Day is celebrated every year on December 24. The day serves as a reminder that consumers have the right to be protected from unfair business practices and to have access to safe, quality goods and services…
            </p>
          </div>
          <button className='px-3 py-3 text-start text-red-700 text-lg font-bold italic font-serif self-start mt-4'>Read More</button>
        </div>
      </div>
    </div>
  )
}
