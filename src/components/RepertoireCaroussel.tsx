import { useState } from "react"
import { MusicCarousel } from "@/components/MusicCarousel"

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
  const [activeGenre, setActiveGenre] = useState(genres[0]?.id ?? "salsa")

  return (
    <div>
      {/* Genre navigation */}
      <nav className="genre-nav" role="tablist" aria-label="Géneros musicales">
        {genres.map((genre) => (
          <button
            key={genre.id}
            role="tab"
            aria-selected={activeGenre === genre.id}
            className="genre-btn"
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </nav>

      {/* Song carousel with fade edges */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, oklch(0.11 0.010 50), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, oklch(0.11 0.010 50), transparent)" }}
        />
        <MusicCarousel songs={repertoire[activeGenre] || []} className="px-10" />
      </div>
    </div>
  )
}
