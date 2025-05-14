'use client';

import Image from 'next/image';
import Loading3 from './Images/Landing/loading3.svg';
// import LandingImage from './Images/Landing/1.jpg'
export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <Image src={Loading3} alt="Loading" className="w-24 h-24" />
     
      {/* <p className="text-lg font-semibold animate-pulse">Loading Dashboard...</p> */}
    </div>
  );
}