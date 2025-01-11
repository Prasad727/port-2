import {useState} from 'react'
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai"; //Ant Design Icons

const Navbar = () => {
      const [nav, setNav]= useState(false);
      const handleNav = () => {
        setNav(!nav);
      };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full font-bold text-3xl text-blue-300 '>TECH.CO</h1>
      <ul className='flex cursor-pointer'>
        <li className='p-4 hover:text-green-300'>

        </li>
        <li className='p-4 hover:text-green-300'>EDUCATION</li>
        <li className='p-4 hover:text-green-300'>CONTACT</li>
        <li className='p-4 hover:text-green-300'>CODE</li>
      </ul>
      
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-black ease-in-out': 'fixed left-{}-100%'}>
      <h1 className='w-full font-bold text-3xl text-blue-300 m-4'>TECH.CO</h1>
        <ul className='p-4 uppercase '>
        <li className='p-4 hover:text-green-300 border-b border-gray-600'>ABOUT</li>
        <li className='p-4 hover:text-green-300 border-b border-gray-600'>EDUCATION</li>
        <li className='p-4 hover:text-green-300 border-b border-gray-600'>CONTACT</li>
        <li className='p-4 hover:text-green-300 border-b border-gray-600'>CODE</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar


