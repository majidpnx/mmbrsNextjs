"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function AppScreenshots() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full ">
      {/* اسکرول افقی */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto px-4 py-6 hide-scrollbar scroll-smooth"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={`/download/${n}.webp`}
            width={166}
            height={296}
            alt={`Screenshot ${n}`}
            className="rounded-xl shadow-md flex-shrink-0"
          />
        ))}
      </div>

      {/* دکمه‌های کنترل */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
