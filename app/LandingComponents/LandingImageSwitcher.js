// components/LandingImageSwitcher.js
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import LandingImage from '../Images/Landing/1.jpg'
// import LandingImage1 from '../Images/Landing/Store.webp'
import LandingImage1 from '../Images/Landing/Store_1.webp'

export default function LandingImageSwitcher() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768); // یا هر breakpoint دلخواه
    };

    checkSize(); // برای بار اول
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <Image
      src={isMobile ? LandingImage1 : LandingImage}
      alt="Landing"
      className="w-fit h-fit"
      loading="lazy"
    />
  );
}
