'use client';
import React from 'react'
import Nav from '../Nav/Nav'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BlogCard from './BlogCard.js'
import Footer from '../Footer/Footer'
import { useState, useEffect, useRef } from 'react';
import Loading3 from '../Images/Landing/loading3.svg';
import Navigation from '../components/Navigation';

import useStore from '../store/useStore'
const Blog = () => {
  const [Post, setPost] = useState('')
  const { data, loading, error, fetchData } = useStore()
  useEffect(() => {
    // console.log('first')
    if (!data) {
      // console.log('second')
      fetchData()
    }
  }, [data,fetchData])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!data) return <p>No data</p>
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   fetch('https://membersgram.com/wp-json/wp/v2/posts?per_page=12&page=1&_embed&categories=224')
  //     .then(res => res.json())
  //     .then(data => setPost(data))
  //     .catch(err => console.error(err));



  // }, []);
  // console.log(Post)
  //   console.log(user);


  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(`/api/BlogPosts/`);
  //       const data = await res.json();
  //       // console.log(data)
  //       setPost(data);
  //     };

  //     fetchData();
  // }, []);
  // console.log(data)
  // const users = useStore((state) => state.data?data:null)
  // console.log(users)

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">

      <div className="w-full  ">
        <Navigation />
        <div className="w-full h-fit flex flex-row justify-center item-center text-2xl mt-[24px]" >
          Membersgram Blog


        </div>

        <div className='w-full overflow-x-hidden   m-auto mt-[48px] flex flex-row justify-center items-center flex-wrap ' >
          {
            data ?
              data.map(item =>
                <BlogCard item={item} key={item.id} />
              )
              : <div className="flex h-[90vh] flex-col items-center justify-center space-y-4">
                <Image src={Loading3} alt="Loading" className="w-24 h-24" />
              </div>

          }

        </div>
      </div>


      <Footer />

    </div>
  )
}

export default Blog