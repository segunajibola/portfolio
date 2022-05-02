import React from 'react'
import shegzy from '../assets/shegzy.jpg';

const Testimonials = () => {
  return (
    <section className="relative pt-16 pb-20 px-4 bg-yellow-600" id="testimonials">
    <div className="max-w-8xl mx-auto">
        <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Testimonials</h1>
            <p className="pt-2 sp:text-xl md:text-2xl">What people are saying</p>
        </div>
    </div>
    <div className="md:grid grid-cols-3 gap-4">
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4">
            <blockquote>
                <p className="text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea saepe quaerat quia est eius fugit.
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-cyan-600">
                    Sarah Dayan
                </div>
                <div className="text-gray-500">
                    Staff Engineer, ABL
                </div>
            </figcaption>
        </div>
    </figure>
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4">
            <blockquote>
                <p className="text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-cyan-600">
                    Sarah Dayan
                </div>
                <div className="text-gray-500">
                    Staff Engineer, ABL
                </div>
            </figcaption>
        </div>
    </figure>
    <figure className="bg-gray-100 grid rounded-xl mt-5 p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src={shegzy} alt="" />
        <div className="pt-6 text-center space-y-4">
            <blockquote>
                <p className="text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci maxime eligendi tempora tempore, consequuntur nihil, libero tenetur sed nesciunt, unde accusantium! Ea sint saepe quaerat quia est eius fugit.
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-cyan-600">
                    John Doe
                </div>
                <div className="text-gray-500">
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