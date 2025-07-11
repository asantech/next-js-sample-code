interface SlideContentProps {
  title: string
  description: string
  imageUrl: string
  link?: string
}

export default function SlideContent({
  title,
  description,
  imageUrl,
  link,
}: SlideContentProps) {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-lg opacity-90">{description}</p>
          {link && (
            <a
              href={link}
              className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
