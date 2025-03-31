import { useState } from "react"
import { MusicCarousel } from "@/components/MusicCarousel"
import { cn } from "@/lib/utils"
import { repertoire, genres } from "@/data/data"



export function RepertoireSection() {
  const [activeGenre, setActiveGenre] = useState("salsa")

  return (
    <section className="w-full py-20 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.2),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
          Nuestro Repertorio
        </h2>

        {/* Navegación de géneros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setActiveGenre(genre.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium",
                activeGenre === genre.id
                  ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-zinc-900/50 text-gray-400 hover:text-white hover:bg-zinc-800/50",
              )}
            >
              {genre.name}
            </button>
          ))}
        </div>

        {/* Carrusel de canciones */}
        <div className="relative">
          {/* Efecto de resplandor en los bordes */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Carrusel */}
          <MusicCarousel songs={repertoire[activeGenre as keyof typeof repertoire]} className="px-10" />
        </div>

        {/* Texto descriptivo */}
        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          Nuestro extenso repertorio abarca los mejores clásicos y éxitos contemporáneos de la música latina. Adaptamos
          nuestras interpretaciones al estilo y ambiente de su evento.
        </p>
      </div>
    </section>
  )
}


