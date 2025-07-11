// Server-side function to fetch slide data
export async function getSlides() {
  // In a real app, this would fetch from a database or CMS
  // For now, we'll return static data
  const slides = [
    {
      id: "1",
      title: "Welcome to Our Platform",
      description:
        "Discover amazing features and capabilities that will transform your experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      link: "/features",
      type: "hero" as const,
    },
    {
      id: "2",
      title: "Innovative Solutions",
      description:
        "Cutting-edge technology designed to solve your most complex challenges.",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      link: "/solutions",
      type: "feature" as const,
      badge: "New",
    },
    {
      id: "3",
      title: "Premium Support Package",
      description:
        "Get expert help from our team of professionals. 24/7 support available.",
      imageUrl:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
      link: "/support",
      type: "product" as const,
      badge: "Popular",
      rating: 4.8,
      price: "$99/month",
    },
    {
      id: "4",
      title: "Join Our Community",
      description:
        "Connect with like-minded individuals and grow your network.",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      link: "/community",
      type: "feature" as const,
      rating: 4.9,
    },
    {
      id: "5",
      title: "Enterprise Solutions",
      description:
        "Scalable solutions for large organizations with advanced security features.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      link: "/enterprise",
      type: "product" as const,
      badge: "Enterprise",
      price: "$299/month",
    },
  ]

  // Simulate server-side processing time
  await new Promise((resolve) => setTimeout(resolve, 100))

  return slides
}

// Example of how to fetch from a real API or database
export async function getSlidesFromAPI() {
  try {
    // This would be your actual API call or database query
    // const response = await fetch('https://your-api.com/slides');
    // const slides = await response.json();

    // For demo purposes, returning the same static data
    return await getSlides()
  } catch (error) {
    console.error("Failed to fetch slides:", error)
    return []
  }
}
