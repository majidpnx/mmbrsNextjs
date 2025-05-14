'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';
export default function TelegramCard({item}) {
    // console.log(item)
  return (
    <Link 
    // href={item.id}
    href={`/Blog/Posts/${item.id}/`}
    // href={{
    //   pathname: `/Blog/Posts/${item.id}/`,
    //   query: { post: JSON.stringify(item) },
    // }}
    >
  
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="w-[350px] m-10 h-[444px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
    >
      <div className="w-full h-[200px] relative">
        <Image
          // src={telegramImg}
          src={item._embedded['wp:featuredmedia']?.[0]?.source_url}
          alt="Telegram"
          layout="fill"
          objectFit="fill"
          className="rounded-t-xl "
          
        />
         {/* <img  
          src={item._embedded['wp:featuredmedia']?.[0]?.source_url}
         className='w-[360px] h-[189px]'
         />  */}

      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.title.rendered}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {/* {item.excerpt.rendered} */}
          <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered.length > 50 ?item.excerpt.rendered.slice(0, 50)+'...' :item.excerpt.rendered }} />
        </p>
        <div className="text-xs text-gray-400 flex gap-2">
          <span>{item.views} View</span>
          <span>•</span>
          <span>17 April 2022</span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
