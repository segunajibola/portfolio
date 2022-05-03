import shegzy from '../assets/logo.png';

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
            <p className='text-8xl font-bold inline tracking-tighter opacity-10 border-b-4 border-yellow-600'>
              Testimonials
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right mt-20 text-2xl font-bold'>
            <p>What others are saying.</p>
          </div>
          <div className="bg-gray-700 p-4 pb-4 mt-5">
            <figure className="bg-gray-800 grid rounded-xl p-4">
           <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
           <div className="pt-6 text-center space-y-3 text-gray-500">
               <blockquote>
                   <p className="text-lg font-semibold text-gray-700">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                   </p>
               </blockquote>
               <figcaption className="font-medium">
                   <div className="">
                       John Doe
                   </div>
                   <div className="">
                        Staff Engineer, ABL
                   </div>
               </figcaption>
               <div>Prev  !  Next</div>
           </div>
          </figure> 
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact