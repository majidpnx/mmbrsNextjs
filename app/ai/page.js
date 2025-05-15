"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
const page = () => {
    const [Propmt, setPropmt] = useState('')
    const [Result, setResult] = useState('')
    const sendMessage = async () => {
        console.log(Propmt)
        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: Propmt }
                ]
            }),
        });
  
        const data = await res.json();
        console.log(data)
       setResult(data.result.data[0].url)
       setPropmt('')
    };
    return (
        <div className=' w-[50%] m-auto mt-[24px]'>
            <div className="relative w-full mt-[24px]">
                <input
                    onChange={(e) => setPropmt(e.target.value)}
                    value={Propmt}
                    type="text"
                    placeholder=" "
                    id="search"
                    className="peer w-full h-[48px] rounded-[8px] border border-[#E5E5E5] text-[16px] font-normal text-[#212121] pl-[16px] pt-[1px] focus:outline-none focus:ring-0 focus:border-[#1976D2] "
                />
                <label
                    htmlFor="search"
                    className="absolute text-[#999] 
                    text-[14px] left-[16px] top-[14px] transition-all
                     peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[16px]
                      peer-placeholder-shown:text-[#999] peer-focus:top-[-8px] peer-focus:text-[14px] peer-focus:text-[#1976D2] bg-white px-[4px]"
                >
                    Search in questions
                </label>
            </div>
            <button onClick={sendMessage} className='border-amber-100 bg-[#f5f5f5] w-full mt-[24px]'>
                send
            </button>

            <div>
                {/* {Result ? Result.result : 'no result'} */}
                <Image src={Result?Result:null}  alt="result"
    width={400}
    height={300} />
            </div>

        </div>
    )
}

export default page