import React from 'react'
import Logo from '../Assetz/asset 12.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-contents flex w-full bg-inherit align-center justify-between">
            <div className="log-side flex w-1/3 justify-start align-center m-10">
                <img src={Logo} alt="Logo"  className='w-8 h-8 hover:bg-slate-200 pe-3'/>
                <p>&copy; KutubuCoder 2023</p>
            </div>
            <div className="social-side flex justify-end w-1/3 m-10">
                <ul className='flex w-1/2 justify-end align-center'>
                    <a href="#" className='ms-3 hover:bg-slate-200'>Twitter</a>
                    <a href="#" className='ms-3 hover:bg-slate-200'>LinkedIn</a>
                    <a href="#" className='ms-3 hover:bg-slate-200'>Mail</a>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
