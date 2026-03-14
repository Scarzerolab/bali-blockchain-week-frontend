"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";


const speakersData = Array.from({ length: 8 }, (_, i) => ({
    name: `Speaker ${i + 1}`,
    role: "Co-Founder & CEO",
    image: '/cz.webp'
}));

export default function SpeakerSlider() {
  return (
    <section className="bg-black relative z-10 overflow-hidden md:hidden">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, 
        }}
        speed={800}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full py-10"
      >
        {speakersData.map((item, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[320px] w-full bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <div className="aspect-3/4 relative flex flex-col items-center justify-end p-6 text-center">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

              <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="text-orange-600 tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
}
