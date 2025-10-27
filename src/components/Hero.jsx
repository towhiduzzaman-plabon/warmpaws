import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
//sdfhsdbfhsdbfhdsfhsjbhbhbhbhbhbh
const slides = [
  { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200', caption: 'Cozy coats for chilly walks' },
  { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200', caption: 'Paw protection & grooming' },
  { url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200', caption: 'Warmth, safety, and love' },
]

const Hero = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={s.url} alt="" className="w-full h-[380px] object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <h2 className="text-white text-2xl md:text-4xl font-semibold p-6">{s.caption}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
