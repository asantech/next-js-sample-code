"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import SlideContent from "./components/SlideContent"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SlideContent {
  id: string
  title: string
  description: string
  imageUrl: string
  link?: string
}

interface SwiperLayoutProps {
  slides: SlideContent[]
  slidesPerView?: number
  spaceBetween?: number
}

export default function SwiperLayout({
  slides,
  slidesPerView = 1,
  spaceBetween = 30,
}: SwiperLayoutProps) {
  if (!slides || slides.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            No Slides Available
          </h3>
          <p className="text-gray-500">No content to display at the moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContent
              title={slide.title}
              description={slide.description}
              imageUrl={slide.imageUrl}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
