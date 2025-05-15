import React from 'react'
import Nav from '../Nav/Nav'
import one from '../Images/Support/one.png'
import Image from 'next/image'
import dynamic from 'next/dynamic';
// import join from '../Images/Support/join.png'
// import order from '../Images/Support/order.png'
// import fq from '../Images/Support/fq.png'
// import shop from '../Images/Support/shop.png'
// import left from '../Images/Support/left.png'
// import transfer from '../Images/Support/transfer.png'

const Footer = dynamic(() => import('../Footer/Footer'), {
  // ssr: false, // فقط در کلاینت رندر میشه
  loading: () => <p>Loading...</p>,
})

const SearchComponent = dynamic(() => import('./SearchComponent'), {
  // ssr: false, // فقط در کلاینت رندر میشه
  loading: () => <p>Loading...</p>,
})


import localFont from 'next/font/local'

const QuestionImage = [];
const QuestionText = ['Join Problems', 'Order Problems', 'Frequently Questions', 'Shop Problems', 'Left Problems', 'Transfer Problems'];

for (let i = 1; i <= 6; i++) {
  QuestionImage.push({ 'image': require(`../Images/Support/${i}.png`).default });
}
async function getImages() {
  return QuestionImage
}

const FaqAccordion = dynamic(() => import('../LandingComponents/FaqAccordion'))
async function getData() {
  return [
    {
      question: "How can I pay with cryptocurrency to buy telegram group or channel members and view?",
      answer: "For your convenience, we have provided a version of Membersgram where you can register your purchase with currency. Friends who want to have access to Marketing store, this version is suitable for you. You can download this version from the link below:https://membersgram.com/MembersgramApp/membersgram.apk"
    },
    {
      question: "Why are my Membersgram account coins negative?",
      answer: "As explained in the application, you will receive negative coins if you leave the joined channels prematurely. Therefore, if your coin balance is negative, it means you have left some channels."
    },
    {
      question: "Why isn't the number of users leaving my Telegram channel or group being counted?",
      answer: "Please be patient. Compensatory coins will be calculated for you a few days after joining, but this process may take some time."
    }, {
      question: "Why is my Telegram account banned?",
      answer: "Unfortunately, your account has been banned by Telegram. Membergram has not interfered in this matter and has fully complied with all user rules and privacy. We will try to find a way to restore your account and will contact you if possible."
    },
    {
      question: "Why are the large member and view packages not available in the store?",
      answer: "Given the App's dynamics and conditions, and in order to ensure your satisfaction under various circumstances, the store's packages are adjusted intelligently to meet your diverse needs."
    },
    {
      question: "I ordered views for my Telegram posts, but they haven't been added. Why?",
      answer: "If you delete the post after requesting views, you will not receive any.If you have ordered an album post, different numbers of views may be displayed on different versions of Telegram. This is a Telegram issue and we cannot do anything about it.Otherwise, If you have any more problems, please send your order tracking number to support."
    }
  ];
}
const productSans = localFont({
  src: '../../public/font/ProductSans-Regular.ttf',
  display: 'swap',
})
export default async function Support() {
  const data = await getData();
  const ImagesQ = await getImages();



 
  return (
    <div className={`${productSans.className} w-full h-screen`}>
      <Nav />
      <div className="w-full h-screen flex flex-col justify-start items-center " >
        <div>
          <Image src={one} width='fit' height='fit' />
        </div>
        <div className='mt-[56px] text-[32px] font-bold text-[#212121]'>
          Welcome to Membersgram Support
        </div>
        <div className='w-[100%] max-w-[589px] m-auto'>
        <SearchComponent />
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
          <div className='flex flex-row justify-center items-center gap-15 max-w-[799px] flex-wrap'>
            {ImagesQ.map((item, index) =>
              <div key={index} className='w-[213px] h-[156] border-[1px] border-solid border-[#BDBDBD] rounded-[8px] flex flex-col justify-center items-center hover:bg-[#F5F5F5] hover:cursor-pointer'>
                <div><Image alt={QuestionText[index]} src={item.image} /></div>
                <div className='mt-[16px] text-[16px] font-medium'>{QuestionText[index]}</div>
              </div>
            )}




          </div>
        </div>
        <div className='mt-[72px] mb-[72px]  w-full flex flex-col justify-center items-center'>
          <h1 className='mb-[40px]'>
            More question?
          </h1>
          <div className='text-[#1976d2] w-[208px] h-[48px] rounded-4xl border border-[#1976D2] mt-[24px] text-[16px] font-normal  pl-[16px] flex flex-row justify-center items-center'>
            Contact support
          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}

