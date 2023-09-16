import React from 'react'

const Navigation = () => {
  return (
    <div>
        <div className='flex justify-center my-5 font-sans-serif sm:h-20 md:h-auto'>
            <ul className='bg-zinc-300 sm:bg-inherit sm:block md:bg-zinc-300 md:flex w-1/4 h-14 flex justify-center py-5 rounded-full '>
                <li className='px-3 h-8 bg-zinc-300 rounded-full hover:bg-white sm:m-1 md:m-auto'><a href="#">Home</a></li>
                <li className='px-3 h-8 bg-zinc-300 rounded-full hover:bg-white sm:m-1 md:m-auto'><a href="#">Profile</a></li>
                <li className='px-3 h-8 bg-zinc-300 rounded-full hover:bg-white sm:m-1 md:m-auto'><a href="#">Contact</a></li>
            </ul>
        </div>
           
    </div>
  )
}

export default Navigation