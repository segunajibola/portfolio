import { testimonials } from "../data/";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative pt-24 w-full text-gray-300 overflow-hidden bg-[#0a192f] dark:bg-gray-100 dark:text-gray-800"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="absolute pb-8 pl-4">
            <p className="text-[5rem] md:text-8xl font-bold inline tracking-tighter opacity-10 border-b-4 border-yellow-600">
              Testimonials
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols sm:grid-cols-1 gap-8 px-4">
          <div className="mt-16 md:mt-20 md:ml-10 text-2xl md:text-left">
            <p>What others are saying.</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[95%] sm:w-[30rem] m-auto md:w-[38rem]"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className="md:mt-1 p-2" key={testimonial.id}>
                <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700">
                  <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={testimonial.image}
                    alt={`${testimonial.name} picture`}
                  />
                  <div className="pt-4 text-center space-y-3">
                    <blockquote className="mx-auto">
                      <p className="text-lg font-semibold text-gray-300 mx-4 dark:text-gray-900">
                        {testimonial.text}
                      </p>
                    </blockquote>
                    <figcaption className="font-medium text-gray-500 dark:text-gray-800">
                      <div className="">{testimonial.name}</div>
                      <div className="mb-2">{testimonial.position}</div>
                    </figcaption>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
