import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaPalette, FaShieldAlt, FaChartBar, FaSms, FaLightbulb, FaIndustry } from 'react-icons/fa';


function Services() {
  return (
    <div className=' mx-80'>
      <h1 className=' flex justify-center text-gray-700 font-bold text-3xl pt-8'>Our Services</h1>
      <div className='grid grid-cols-3 pt-4 gap-4'>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
            Software Development
            <p className="text-gray-500 text-sm">We plan, design and develop robust software applications.</p>
          </div>
          <div className='absolute top-2 right-2'>
            <FaLaptopCode className="h-6 w-6 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Mobile App Development
            <p className="text-gray-500 text-sm">We develop cross-platform mobile applications.</p>
          </div>
          <div classname=''>
          <FaMobileAlt className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Website Design
            <p className="text-gray-500 text-sm">Aesthetically pleasing website designs.</p>
          </div>
          <div classname=''>
          <FaPalette className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Digital Marketing
            <p className="text-gray-500 text-sm">Premier provider of digital marketing.</p>
          </div>
          <div classname=''>
          <FaChartBar className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Cybersecurity
            <p className="text-gray-500 text-sm">Secure your digital platforms.</p>
          </div>
          <div classname=''>
          <FaShieldAlt className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Bulk SMS
            <p className="text-gray-500 text-sm">Quick and easy integration Bulk SMS service.</p>
          </div>
          <div classname=''>
          <FaSms className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Research & Innovations
            <p className="text-gray-500 text-sm">We help companies to conduct extensive research and innovations.</p>
          </div>
          <div classname=''>
          <FaLightbulb className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>
        <div className='relative flex border rounded-lg bg-green-100 hover:bg-green-200 text-green-700 p-2'>
          <div className='flex-grow'>
          Industry Training
            <p className="text-gray-500 text-sm">Professional training on digital solutions.</p>
          </div>
          <div>
          <FaIndustry className="h-6 w-6 mr-2 text-green-700" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services