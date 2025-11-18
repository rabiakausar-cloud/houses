import React, { useState } from 'react'
export const Blog1 = () => {
 
    
  return (
<div className='bg-black pt-20 px-10 h-[950px] '>
  <div className='flex flex-row justify-center items-center py-10 gap-12'>
    <div>
      <img src="/src/assets/h3.jpg" alt="" />
      <p className='text-white  text-2xl pt-2'>9 Easy DIY project to<br></br> improve your Home</p>
    </div>
    <div>
      <img src="/src/assets/h4.jpg" alt="" />
      <p className='text-white  text-2xl pt-2'>9 Easy DIY project to <br /> improve your Home</p>
    </div>
    <div>
      <img src="/src/assets/h5.jpg" alt="" />
      <p className='text-white  text-2xl pt-2'>9 Easy DIY project to <br /> improve your Home</p>
    </div>

  </div>
  <div className='bg-gray-300 mt-20 py-20 mx-20 rounded-lg flex flex-col justify-center items-center'>
    <h1 className='text-2xl font-bold'>For recent news & updates</h1>
    <p className='text-center text-lg'> We help businesses customize, automate and scale up their ad,<br></br> prodution and delivry</p>
     <div className='flex flex-row mt-4'  >
      <input type="email" placeholder='Ente your email' className='py-2 pl-2  mr-2  w-[400px] rounded-lg bg-white' value="" />
        <button className="bg-black text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
        Subscribe
      </button>
         
     </div>
  </div>
</div>  )
}
