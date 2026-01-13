 import React from 'react'
 
 const Header = () => {
   return (
     <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>Akshay ✌</span></h1>
        <button className='rounded-sm px-5 py-2 bg-red-600 text-lg font-medium'>Logout</button>
     </div>
   )
 }
 
 export default Header