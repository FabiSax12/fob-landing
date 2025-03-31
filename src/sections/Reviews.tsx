import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { reviews } from "@/data/data"

export function ReviewsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.2),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="bg-zinc-900/50 backdrop-blur-sm border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500">
                  <CardContent className="flex flex-col items-center justify-between p-6 h-full">
                    <div className="mb-4 flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-center mb-4 italic">"{review.comment}"</p>
                    <div className="text-center">
                      <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-400">{review.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-zinc-900/50 border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300" />
          <CarouselNext className="bg-zinc-900/50 border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  )
}

