import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex flex-col justify-center items-center p-4 text-gray-300'>
        <div className='relative pt-20 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600'>Contact</p>
        </div>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='relative flex flex-col max-w-[600px] w-full -mt-5'>
            <input className='bg-[#ccd6f6] rounded-lg p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] rounded-lg p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact