const About = () => {
  return (
    <div id='about' className='w-full h-auto pt-40 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='absolute -mt-16 pb-8 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-900'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>A little bit about me.</p>
          </div>
          <div>
            <p>I love building cool software that improves
            the lives & business of others.</p>
            
            <p className='mt-3'>I create responsive websites from scratch for creatives ranging from portfolio websites to functional websites for small businesses so that they can focus on what makes them money.</p>
            
            <p className='mt-3'>I'm intrested in design, writing, teaching, tech, and how small technical things works.</p>

            <p className='mt-3'>In my free time, I read about football, tech news and latest gadgets.</p>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;