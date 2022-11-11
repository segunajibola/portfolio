import shegzy from "../assets/logo.png";
import testimonials from "../data/testimonials";
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
      className="w-full text-gray-300 overflow-hidden bg-[#0a192f] dark:bg-gray-100 dark:text-gray-800"
    >
      <div className="flex flex-col justify-center items-center w-full h-full pt-20">
        <div className="max-w-[1000px] w-full">
          <div className="absolute pb-8 pl-4">
            <p className="text-[4.5rem] sm:text-[7rem] md:text-8xl font-bold inline tracking-tighter opacity-10 border-b-4 border-yellow-600">
              Testimonials
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols sm:grid-cols-1 gap-8 px-4">
          <div className="mt-16 md:mt-20 md:ml-10 text-2xl font-bold md:text-left">
            <p>What others are saying.</p>
          </div>
          <div className="md:ml-[20rem]">
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
              className="w-[24.5rem] sm:w-[30rem] m-auto md:w-[38rem]"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide className="md:mt-1 p-2">
                  <figure className="bg-gray-700 dark:bg-gray-300 grid rounded-xl p-3 shadow-lg shadow-gray-700">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src={shegzy}
                      alt=""
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
    </div>
  );
};

export default Testimonials;
