"use client"
import React from 'react'

const SearchComponent = () => {
    const HandleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        console.log(searchValue)

        // const filteredData = data.filter(item =>
        //   item.question.toLowerCase().includes(searchValue)
        // );
        // setFilteredData(filteredData);
    }
    return (
        <div>


            <div className="relative w-full mt-[24px]">
                <input
                    onChange={(e) => HandleSearch(e)}
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




            {/* <input
                onChange={(e) => HandleSearch(e)}
                type="text"
                placeholder='Search in questions'
                className='w-[100%] h-[48px] rounded-[8px] border border-[#E5E5E5] mt-[24px] text-[16px] font-normal text-[#212121] pl-[16px] focus:outline-none focus:ring-0' />
            <div className='w-full h-[48px]  border border-[#E5E5E5] mt-[24px] text-[16px] font-normal text-[#212121] pl-[16px]'>
                show results here
            </div> */}
        </div>

    )
}

export default SearchComponent