import { useState } from "react"
import { MusicCarousel } from "@/components/MusicCarousel"
import { cn } from "@/lib/utils"

interface Genre {
  id: string
  name: string
}

interface Song {
  title: string
  artist: string
}

interface RepertoireCarousselProps {
  repertoire: Record<string, Song[]>
  genres: Genre[]
}

export function RepertoireCaroussel({ repertoire, genres }: RepertoireCarousselProps) {
  const [activeGenre, setActiveGenre] = useState("salsa")

  return <>
    {/* Navegación de géneros */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => setActiveGenre(genre.id)}
          className={cn(
            "relative px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border border-orange-500/10 cursor-pointer",
            activeGenre === genre.id
              ? "border-orange-500/50 -translate-y-3"
              : "text-white",
          )}
        >
          <span
            className={cn(
              "font-semibold transition-colors",
              activeGenre === genre.id
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:text-orange-400"
                : "text-gray-400 hover:text-white"
            )}
          >
            {genre.name}
          </span>
          <div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
          </div>
        </button>
      ))}
    </div>

    {/* Carrusel de canciones */}
    <div className="relative">
      {/* Efecto de resplandor en los bordes */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Carrusel */}
      <MusicCarousel songs={repertoire[activeGenre] || []} className="px-10" />
    </div>
  </>
}
