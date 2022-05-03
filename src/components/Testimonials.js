import data from "../data/testimonials.js";

const Testimonials = () => {
  return (
    <section name='testimonials' className="relative pt-16 pb-20 px-4 bg-[#0a192f] text-gray-300">
    <div className="max-w-8xl mx-auto">
        <div className="text-center">
            <h1 className="text-5xl font-bold">Testimonials</h1>
            <p className="pt-2 sp:text-xl md:text-2xl">What people are saying</p>
        </div>
    </div>
    <div className="md:grid grid-cols-3 gap-4">
        {data.map((testimonials) => (
        <figure className="bg-gray-100 grid rounded-xl mt-5 p-4  ">
           <img className="w-32 h-32 rounded-full mx-auto" src={testimonials.image} alt="" />
           <div className="pt-6 text-center space-y-3 text-gray-500">
               <blockquote>
                   <p className="text-lg font-semibold text-gray-700">
                       {testimonials.text}
                   </p>
               </blockquote>
               <figcaption className="font-medium">
                   <div className="">
                       {testimonials.name}
                   </div>
                   <div className="">
                       {testimonials.position}
                   </div>
               </figcaption>
           </div>
       </figure> 
        ))}    
    </div>
</section>
  )
}

export default Testimonials