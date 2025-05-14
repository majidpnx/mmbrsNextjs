// components/HamburgerMenu.js
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Menu, X } from 'lucide-react' // optional: for icons
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    const controls = useAnimation();
    const [activeLink, setActiveLink] = useState(pathname);

    useEffect(() => {
        setActiveLink(pathname);
        controls.start({ opacity: 1, scaleX: 1, scaleY: 1 }); // Slide out animation for active link change

        setTimeout(() => {
            controls.start({ opacity: 1, scaleX: 1, scaleY: 1 }); // Slide-in animation for active link
        }, 5); // Timing for the transition
    }, [pathname, controls]);
    const menuVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    }
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Download', href: '/Download' },
        { label: 'Support', href: '/Support' },
        { label: 'Blog', href: '/Blog' },
    ];
    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 p-2 focus:outline-none mt-[8px]"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        className="fixed  top-10 bottom-0 w-screen h-full bg-white shadow-lg z-40 py-6"
                    >

                        <nav className="w-full flex flex-col gap-4">
                            {navItems.map(({ label, href }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={` w-full relative text-sm h-[50] font-medium py-6 px-4 flex justify-start items-center transition-colors ${pathname === href
                                        ? 'text-[#2196f3] bg-[#DFF1FF] rounded-r-full'
                                        : 'text-[#616161] hover:bg-[#D8E3EE]'
                                        }`} >
                                    {label}
                                </Link>

                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
