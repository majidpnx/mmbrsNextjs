'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu.js'

const Nav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Download', href: '/Download' },
    { label: 'Support', href: '/Support' },
    { label: 'Blog', href: '/Blog' },
  ];

  // Animation controller
  const controls = useAnimation();

  // Detect route change
  useEffect(() => {
    setActiveLink(pathname);
    controls.start({ opacity: 1, scaleX: 1, scaleY: 1 }); // Slide out animation for active link change

    setTimeout(() => {
      controls.start({ opacity: 1, scaleX: 1, scaleY: 1 }); // Slide-in animation for active link
    }, 500); // Timing for the transition
  }, [pathname, controls]);
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const checkScreen = () => {
      console.log(window.innerWidth)
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])



  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true);  // scrolling up
      } else {
        setShow(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  // console.log(show)
  // console.log(isMobile)
  return (
    <div className={
      ` overflow-x-hidden
     w-full 
     h-[64px]
   bg-[#fff] 
     shadow-custom 
     fixed top-0 left-0
     z-1
     
      `
    }
// ${show ? 'translate-y-0' : '-translate-y-full'      }
    >

      {
        isMobile == null ?

          null :
          isMobile ?
            <HamburgerMenu />
            :
            <motion.nav
              initial={{ y: 1, opacity: 1 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`
                
          w-full
          h-[62px]
          flex 
          justify-start 
          items-center
          max-w-4xl 
          m-auto gap-1 
          `}
            >
              <Image src={Logo} alt="Logo" width={170} height={40} loading="lazy" className="mr-[18%] ml-2.5" />

              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-sm h-[50] font-medium py-6 px-4 flex justify-start items-center transition-colors ${pathname === href
                    ? 'text-[#2196f3]'
                    : 'text-[#616161] hover:bg-[#D8E3EE]'
                    }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-0 left-1/9  w-3/4 h-[2px] bg-[#2196f3]"
                      animate={controls}
                    />
                  )}
                </Link>
              ))}
            </motion.nav>
      }


    </div>

  );
};

export default Nav;
