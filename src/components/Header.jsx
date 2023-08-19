import React from 'react'
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
        <a href="#" class="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 ">Home</a>
        <a href="" class="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Cities</a>
        <a href="#" class="ml-4 text-gray-800 text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Login</a>
        </div>

        <div class="sm:hidden cursor-pointer">

        </div>
      </div>
      
      <div class="block sm:hidden bg-white border-t-2 py-2">
        <div class="flex flex-col">
        <a href="#" class="text-gray-800 text-sm font-semibold border px-2 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600 ">Home</a>
          <a href="#" class="text-gray-800 text-sm font-semibold border px-2 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Cities</a>
          <a href="#" class="text-gray-800 text-base font-semibold border px-2 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Login</a>
          <div class="flex justify-between items-center border-t-2 pt-2">
          </div>
        </div>
      </div>
    </div>
  </div>


</>




    
   
  )
}
