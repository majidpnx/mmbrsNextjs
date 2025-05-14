// components/AOSWrapper.js
'use client';

import { useEffect ,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);

  return children;
}