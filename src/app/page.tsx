import SwiperLayout from "./SwiperLayout"
import { getSlides } from "./lib/slides"

export default async function Home() {
  const slides = await getSlides()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SwiperLayout slides={slides} />
        </div>
      </div>
    </main>
  )
}
