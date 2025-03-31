import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface MusicCarouselProps {
  songs: {
    title: string
    artist: string
  }[]
  className?: string
}

export function MusicCarousel({ songs, className }: MusicCarouselProps) {
  return (
    <Carousel
      id="music-carousel"
      opts={{
        align: "start",
        loop: true,
      }}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {songs.map((song, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="bg-zinc-900/50 backdrop-blur-sm border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  {song.title}
                </div>
                <div className="text-sm text-gray-400 mt-2">{song.artist}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-zinc-900/50 border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300" />
      <CarouselNext className="bg-zinc-900/50 border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300" />
    </Carousel>
  )
}

