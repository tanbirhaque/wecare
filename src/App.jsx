import { Outlet } from 'react-router-dom'
import './App.css'
import { IoIosBatteryFull } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

function App() {

  return (
    <>
      <div className='bg-[#f5f5f5] min-h-screen pt-5'>
        <div className='max-w-[375px] max-h-[812px] h-[812px]  mx-auto bg-white relative shadow-lg'>
          <div className='w-[375px] flex items-center justify-between py-[10px] px-4 absolute'>
            <div>
              <p className='font-semibold text-[13px]'>9:41</p>
            </div>
            <div className='flex gap-[5px]'>
              {/* Network SVG */}
              <div className='mt-[3px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.9001 4.0001C14.9001 3.50304 14.4972 3.1001 14.0001 3.1001C13.503 3.1001 13.1001 3.50304 13.1001 4.0001V14.0001C13.1001 14.4972 13.503 14.9001 14.0001 14.9001C14.4972 14.9001 14.9001 14.4972 14.9001 14.0001V4.0001ZM8.1999 9.2999C8.1999 8.80285 7.79696 8.3999 7.2999 8.3999C6.80285 8.3999 6.3999 8.80285 6.3999 9.2999V13.9999C6.3999 14.497 6.80285 14.8999 7.2999 14.8999C7.79696 14.8999 8.1999 14.497 8.1999 13.9999V9.2999ZM4.0001 11.1001C4.49715 11.1001 4.9001 11.503 4.9001 12.0001V14.0001C4.9001 14.4972 4.49715 14.9001 4.0001 14.9001C3.50304 14.9001 3.1001 14.4972 3.1001 14.0001V12.0001C3.1001 11.503 3.50304 11.1001 4.0001 11.1001ZM11.6 6.70005C11.6 6.20299 11.1971 5.80005 10.7 5.80005C10.203 5.80005 9.80005 6.20299 9.80005 6.70005V14C9.80005 14.4971 10.203 14.9 10.7 14.9C11.1971 14.9 11.6 14.4971 11.6 14V6.70005Z" fill="#262626" />
                </svg>
              </div>
              {/* Wifi SVG */}
              <div className='mt-[3px]'>
                <FaWifi></FaWifi>
              </div>
              {/* Battery SVG */}
              <IoIosBatteryFull className='text-[22px]'></IoIosBatteryFull>
            </div>
          </div>
          <div className="text-[12px] absolute top-12 text-purple-600 right-4 bg-gray-200 px-2 rounded-md">skip</div>
          <div className='bg-[#f8f7ff] h-full'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
