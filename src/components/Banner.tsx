import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { banner1, banner2, banner3, banner4, banner5 } from "../assets/images"
import { Pagination, Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import type { Swiper as SwiperType } from "swiper";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function Banner() {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null)

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-4 rounded-2xl overflow-hidden relative h-150">
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay, Navigation, Thumbs]}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          thumbs={{ swiper: thumbs }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="
            h-full
          [&_.swiper-pagination-bullet]:bg-gray-400!
            [&_.swiper-pagination-bullet]:opacity-100!
            [&_.swiper-pagination-bullet]:w-10!
            [&_.swiper-pagination-bullet]:rounded!
            [&_.swiper-pagination-bullet]:h-1!
          [&_.swiper-pagination-bullet-active]:bg-white!"

        >
          <SwiperSlide>
            <img className="w-full h-full" src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner5} alt="" />
          </SwiperSlide>
        </Swiper>

        <button className="btn-next absolute top-0 left-0 h-full z-1 px-5 text-white group">
          <span className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
          <IoIosArrowBack size={50} className="relative z-1" />
        </button>
        <button className="btn-next absolute top-0 right-0 h-full z-1 px-5 text-white group">
          <span className="absolute inset-0 bg-linear-to-l from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
          <IoIosArrowForward size={50} className="relative z-1" />
        </button>
      </div>
      <div className="col-span-1 h-150">
        <Swiper
          onSwiper={setThumbs}
          modules={[Thumbs, FreeMode]}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={20}
          className="h-full"
          freeMode
        >
          <SwiperSlide className="rounded-xl overflow-hidden ">
            <img className="w-full h-full cursor-pointer" src={banner1} alt="" />
            <div className="h-full w-0 in-[.swiper-slide-thumb-active]:w-full in-[.swiper-slide-thumb-active]:duration-5000 ease-linear in-[.swiper-slide-thumb-active]:transition-all top-0 left-0 absolute border-b-6 border-custom-orange bg-custom-orange/40"></div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl overflow-hidden ">
            <img className="w-full h-full cursor-pointer" src={banner2} alt="" />
            <div className="h-full w-0 in-[.swiper-slide-thumb-active]:w-full in-[.swiper-slide-thumb-active]:duration-5000 ease-linear in-[.swiper-slide-thumb-active]:transition-all top-0 left-0 absolute border-b-6 border-custom-orange bg-custom-orange/40"></div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl overflow-hidden ">
            <img className="w-full h-full cursor-pointer" src={banner3} alt="" />
            <div className="h-full w-0 in-[.swiper-slide-thumb-active]:w-full in-[.swiper-slide-thumb-active]:duration-5000 ease-linear in-[.swiper-slide-thumb-active]:transition-all top-0 left-0 absolute border-b-6 border-custom-orange bg-custom-orange/40"></div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl overflow-hidden ">
            <img className="w-full h-full cursor-pointer" src={banner4} alt="" />
            <div className="h-full w-0 in-[.swiper-slide-thumb-active]:w-full in-[.swiper-slide-thumb-active]:duration-5000 ease-linear in-[.swiper-slide-thumb-active]:transition-all top-0 left-0 absolute border-b-6 border-custom-orange bg-custom-orange/40"></div>
          </SwiperSlide>
          <SwiperSlide className="rounded-xl overflow-hidden ">
            <img className="w-full h-full cursor-pointer" src={banner5} alt="" />
            <div className="h-full w-0 in-[.swiper-slide-thumb-active]:w-full in-[.swiper-slide-thumb-active]:duration-5000 ease-linear in-[.swiper-slide-thumb-active]:transition-all top-0 left-0 absolute border-b-6 border-custom-orange bg-custom-orange/40"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Banner