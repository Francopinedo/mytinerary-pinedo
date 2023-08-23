import React from 'react'
import { Link as Anchor } from 'react-router-dom'
export default function Header() {
  return (
<>

	<div class="shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div>
         <img src="../public/logo.jpg" alt="Logo" className='object-cover h-10 w-15' />
        </div>

        <div class="hidden sm:flex sm:items-center">
          
        </div>

        <div class="hidden sm:flex sm:items-center nav">
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/'>Home</Anchor>
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/cities'>Cities</Anchor> 
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/login'>Login</Anchor> 
        </div>

        <div class="sm:hidden cursor-pointer">

        </div>
      </div>
      
      <div class="block sm:hidden bg-white border-t-2 py-2">
        <div class="flex flex-col">
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/'>Home</Anchor>
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/cities'>Cities</Anchor> 
        <Anchor className="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600" to='/login'>Login</Anchor> 
          <div class="flex justify-between items-center border-t-2 pt-2">
          </div>
        </div>
      </div>
    </div>
  </div>


</>




    
   
  )
}
