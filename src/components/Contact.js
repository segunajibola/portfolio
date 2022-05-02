const Contact = () => {
  return (
    <div name='contact' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='flex flex-col justify-center items-center w-full h-full pt-20'>
        {/* <div className='relative pt-20 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600'>Contact</p>
        </div> */}
        <div className='max-w-[1000px] w-full'>
          <div className='absolute pb-8 pl-4'> 
          {/* absolute -mt-16 pb-8 pl-4 --- relative pt-20 pl-4*/}
            <p className='text-9xl font-bold inline opacity-10 border-b-4 border-yellow-600'>
              Contact
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right mt-20 text-2xl font-bold'>
            <p>Submit this form to send me an email.</p>
          </div>
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='relative flex flex-col max-w-[600px] w-full -mt-5 md:mt-16'>
              <input className='bg-[#ccd6f6] rounded-lg p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] rounded-lg p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send mail</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact