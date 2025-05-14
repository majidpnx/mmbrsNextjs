// components/LandingImageSwitcher.js
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import LandingImage from '../Images/Landing/1.jpg'
import Minione from '../Images/Download/minione.png'
import Storedownload from '../Images/Download/Storedownload.webp'

export default function DownloadImageSwitcher() {
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
      src={isMobile ? Minione : Storedownload}
      alt="Landing"
      className={isMobile ? "w-[248px] h-[352px]" : "w-[511px] h-[700px]"}
      loading="lazy"
    />
  );
}
