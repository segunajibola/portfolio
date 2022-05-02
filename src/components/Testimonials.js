import React from 'react'
import shegzy from '../assets/shegzy.jpg';

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
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4 text-gray-500">
            <blockquote>
                <p className="text-lg font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea saepe quaerat quia est eius fugit.
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="">
                    Sarah Dayan
                </div>
                <div className="">
                    Staff Engineer, ABL
                </div>
            </figcaption>
        </div>
    </figure>
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4 text-gray-500">
            <blockquote>
                <p className="text-lg font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="">
                    Sarah Dayan
                </div>
                <div className="">
                    Staff Engineer, ABL
                </div>
            </figcaption>
        </div>
    </figure>
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4 text-gray-500">
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
        </div>
    </figure>
    </div>
</section>
  )
}

export default Testimonials