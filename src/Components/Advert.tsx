import React from 'react'

export const Advert = () => {
  return (
    <div className='advert-container bg-inherit w-full font-serif'>
        <div className='advert-wrapper justify-center text-center'>
            <h1 className='w-full font-bold text-5xl sm:text-2xl md:text-5xl tracking-normal leading-normal my-12 sm:mb-2 md:my-auto'>A brand and product <br/> designer working with <br/> clients globally</h1>
            
            <div className='w-full flex justify-center'>
            <ul className='bg-inherit w-1/3 h-14 flex justify-center py-5 rounded-full sm:block md:flex '>
                <li className='px-7 m-auto sm:m-1 md:m-auto h-5 text-xs bg-zinc-300 rounded-full active:bg-white hover:bg-white'><a href="#">Enterprise</a></li>
                <li className='px-7 m-auto sm:m-1 md:m-auto h-5 text-xs bg-zinc-300 rounded-full hover:bg-white'><a href="#">Branding</a></li>
                <li className='px-7 m-auto sm:m-1 md:m-auto h-5 text-xs bg-zinc-300 rounded-full hover:bg-white'><a href="#">Product</a></li>
                <li className='px-7 m-auto sm:m-1 md:m-auto h-5 text-xs bg-zinc-300 rounded-full hover:bg-white'><a href="#">Design Systems</a></li>
            </ul>
            </div>
            

        </div>
    </div>
  )
}
