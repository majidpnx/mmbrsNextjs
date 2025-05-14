export default function Footer() {
    return (
      <footer className="w-full bg-gray-50 py-6 px-1">
        {/* <div className="w-[50%]  mx-auto flex justify-between items-center text-sm text-gray-600"> */}
        <div className="
        w-[80%] md:w-[50%]
         mx-auto
          flex flex-col md:flex-row
          justify-between 
          items-between md:items-center
           text-[12px] text-gray-600 h-[72px]">

          {/* Left side links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-800">Privacy policy</a>
            <a href="#" className="hover:text-gray-800">Contact us</a>
            <a href="#" className="hover:text-gray-800">About us</a>
          </div>
  
          {/* Right side social */}
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <a href="#">
              <svg className="w-5 h-5 fill-gray-600 hover:fill-gray-800" viewBox="0 0 24 24">
                <path d="M9.73 12.33l-.39 3.7c.56 0 .8-.24 1.1-.53l2.64-2.5 3.65 2.67c.67.37 1.16.17 1.33-.62l2.42-11.34c.24-1.11-.4-1.54-1.1-1.27L2.87 9.1c-1.05.42-1.04 1.02-.18 1.3l5.63 1.75 10.65-6.7L9.73 12.33z"/>
              </svg>
            </a>
            <a href="#">
              <svg className="w-5 h-5 fill-gray-600 hover:fill-gray-800" viewBox="0 0 24 24">
                <path d="M7.5 2C5 2 3 4 3 6.5v11C3 20 5 22 7.5 22h9c2.5 0 4.5-2 4.5-4.5v-11C21 4 19 2 16.5 2h-9zM12 7c1.38 0 2.5 1.12 2.5 2.5S13.38 12 12 12s-2.5-1.12-2.5-2.5S10.62 7 12 7zm6 12c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-.5c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  