import React from 'react'
import Nav from '../Nav/Nav'
export const dynamic = 'force-static';

const Support = () => {
  return (
    <div className=" w-full h-screen">
    <Nav />
    <div className="w-full h-screen flex flex-row justify-center item-center" >
  
  {/* <div id="cover" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <img id="loading1" src="<?php echo get_template_directory_uri(); ?>/img/loading3.svg" alt="loading" class="w-60 h-20" />
  </div> */}



  <div class="max-w-[1366px] mx-auto mt-14 px-4">
 
    <div class="flex flex-col items-center justify-center mb-6 mt-6">
      <div class="mb-2">
        {/* <img src="<?php echo get_template_directory_uri(); ?>/public/images/Support/SupportTitle.webp" alt="Support Title" title="Support Title" class="w-[70px] h-[70px]"> */}
      </div>
      <h1 class="text-center text-[24px] font-medium leading-[30px]">
        How can we provide the best support for you
      </h1>
    </div>

   
    <div class="mb-12">
      <h3 class="text-[20px] font-bold leading-6 mb-4">&nbsp;</h3>
      <div class="flex flex-wrap justify-center max-w-[1131px] mx-auto">
      
        
          <a href="$href" title="" class="w-[205px] h-[140px] m-[20px] border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200 text-center no-underline\">
            {/* <img src="" alt="" class="w-[109px] h-[68px]\"> */}
            <h2 class="text-[14px] font-normal mt-4 text-gray-900\"></h2>
          </a>
     
      </div>
    </div>

   
    <div class="mb-20">
      <h3 class="text-[20px] font-bold leading-6 mb-4"></h3>
      <div class="flex flex-row items-center mt-10 mb-20">
        <a href="mailto:membersgramapp@gmail.com" class="flex items-center bg-white h-14 pl-4 hover:bg-gray-300 w-full no-underline">
          {/* <img src="<?php echo get_template_directory_uri(); ?>/public/images/Support/Email.svg" alt="Send email" class="w-[22px] h-[22px]"> */}
          <h3 class="ml-4 text-[16px] text-[#616161] font-normal">Send email</h3>
        </a>
      </div>
    </div>
  </div>








    </div>
    </div>
  )
}

export default Support