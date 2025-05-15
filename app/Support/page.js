import React from 'react'
import Nav from '../Nav/Nav'
import one from '../Images/Support/one.png'
import Image from 'next/image'
import dynamic from 'next/dynamic';

import localFont from 'next/font/local'
const FaqAccordion = dynamic(() => import('../LandingComponents/FaqAccordion'))
async function getData() {
  return [
    {
      question: "how to increase telegram members?",
      answer: "Choose a Growth Strategy :1- Task-Based Growth : Membersgram allows users to perform tasks like joining other channels/groups to earn points.2- Buy Member Packages : If you prefer quick growth, purchase member packages."
    },
    {
      question: "Is Tailwind customizable?",
      answer: "Yes, Tailwind can be customized using a config file to fit your design system."
    },
    {
      question: "Can I use Tailwind with React?",
      answer: "Absolutely. Tailwind works seamlessly with React and other frameworks."
    }
  ];
}
const productSans = localFont({
  src: '../../public/font/ProductSans-Regular.ttf',
  display: 'swap',
})
export default async function Support() {
  const data = await getData();
  return (
    <div className={`${productSans.className} w-full h-screen`}>
      <Nav />
      <div className="w-full h-screen flex flex-col justify-start items-center" >
        <div>
          <Image src={one} width='fit' height='fit' />
        </div>
        <div className='mt-[56px] text-[32px] font-bold text-[#212121]'>
          Welcome to Membersgram Support
        </div>
        <div>
          <input type="text" placeholder='Search for your question' className='w-[400px] h-[48px] rounded-4xl border border-[#1976D2] mt-[24px] text-[16px] font-normal text-[#212121] pl-[16px]' />
        </div>
        <div className='mt-[72px]  w-full flex flex-col justify-center items-center'>
          <h1 className='mb-[40px]'>
            Frequently Questions
          </h1>
          <FaqAccordion data={data} />
        </div>
  <div className='mt-[72px]  w-full flex flex-col justify-center items-center'>
          <h1 className='mb-[40px]'>
         Question categories
          </h1>
          categories
        </div>
      </div>
    </div>
  )
}

