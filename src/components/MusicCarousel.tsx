import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface MusicCarouselProps {
  songs: { title: string; artist: string }[]
  className?: string
}

export function MusicCarousel({ songs, className }: MusicCarouselProps) {
  return (
    <Carousel
      id="music-carousel"
      opts={{ align: "start", loop: true }}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-4">
        {songs.map((song, index) => (
          <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
            <article
              className="flex flex-col justify-between h-full py-5 px-1"
              style={{ borderBottom: "1px solid oklch(0.22 0.016 50)" }}
            >
              <p
                className="font-serif leading-snug mb-2"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  color: "oklch(0.94 0.010 75)",
                }}
              >
                {song.title}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "0.78rem", color: "oklch(0.42 0.008 55)" }}
              >
                {song.artist}
              </p>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-3 mt-6">
        <CarouselPrevious
          className="static translate-y-0 h-8 w-8 rounded-sm"
          style={{
            background: "oklch(0.16 0.013 50)",
            border: "1px solid oklch(0.22 0.016 50)",
            color: "oklch(0.67 0.010 65)",
          }}
        />
        <CarouselNext
          className="static translate-y-0 h-8 w-8 rounded-sm"
          style={{
            background: "oklch(0.16 0.013 50)",
            border: "1px solid oklch(0.22 0.016 50)",
            color: "oklch(0.67 0.010 65)",
          }}
        />
      </div>
    </Carousel>
  )
}
