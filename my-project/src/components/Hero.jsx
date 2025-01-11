import React from 'react';
import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div>
      <section className='h-[700px] '>
      <div className='text-white flex flex-col items-center justify-center h-auto max-w-full pt-[300px] font-bold'>
        <p className='p-2 text-green-300 font-mono tracking-widest text-2xl font-medium '>READY TO BEGIN.</p>
        <h1 className='text-4xl font-serif p-2'>Full-stack Web Developer</h1>
        <div className='text-2xl font-thin flex'> 
          <p className='text-2xl font-thin flex justify-center'>Enthusiastic. Excited to </p>
          <ReactTyped
            className='text-2xl pl-2 font-medium tracking-widest italic text-green-300'
            strings={['LEARN','BUILD','CREATE']}
            typeSpeed={130}
            backSpeed={150}
            loop
          />
        </div>
        <ReactTyped className='font-thin pt-3 text-center text-gray-400'
        strings={['The greatest adventure is what lies ahead. Each day brings new possibilities for exploration and discovery.']}
        typeSpeed={30}/>
      </div>
      </section>
      <section>
        
      </section>
    </div>
  )
}

