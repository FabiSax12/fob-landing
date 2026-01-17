import type { Event } from "@/types/envent";
import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props extends Pick<Event, "date" | "name" | "location" | "time" | "ticket" | "type"> { }

export const EventCard = ({ date, name, location, time, ticket, type }: Props) => {
  const [year, month, day] = date.split("-").map(Number);
  const eventDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  const hasEventPassed = currentDate > eventDate;
  const formattedDate = eventDate.toLocaleDateString("es-CR", {
    day: "numeric",
    month: "long",
  });

  return (
    <Card
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500 overflow-visible"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* Badge de tipo de evento (Público/Privado) */}
      {/* <span
        className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-semibold ${
          type === "Publico"
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
        }`}
      >
        {type}
      </span> */}
      <CardContent className="p-6 relative z-10">
        {/* <Icon className="w-6 h-6 text-orange-400 mb-4" name="lucide--calendar" /> */}
        <Calendar className="w-6 h-6 text-orange-400 mb-4" />
        <p
          className={`
            text-3xl font-serif mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500
            ${hasEventPassed ? "line-through" : null}
          `}
        >
          {formattedDate}
        </p>
        <h3
          className="text-2xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors"
        >
          {name}
        </h3>
        <div className="flex items-center text-gray-400 mb-2">
          {/* <Icon className="w-4 h-4 mr-2" name="lucide--map-pin" /> */}
          <MapPin className="w-4 h-4 mr-2" />
          <p className="text-lg">{location.name}</p>
        </div>
        {/* Hora de inicio */}
        {time?.start && (
          <div className="flex items-center text-gray-400 mb-4">
            <Clock className="w-4 h-4 mr-2" />
            <p className="text-sm">{time.start}</p>
          </div>
        )}
        {/* Precio/Tipo de entrada */}
        {ticket && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {ticket.presale && (
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm text-yellow-400 border border-yellow-500/30 font-semibold">
                ⚡ {ticket.presale.price}
              </div>
            )}
            <div
              className={cn(
                "inline-block px-3 py-1 rounded-full text-sm border font-medium",
                {
                  "bg-orange-500/20 text-orange-300 border-orange-500/30": !ticket.presale,
                  "bg-zinc-800/50 text-zinc-300 border-zinc-600/30": ticket.presale,
                }
              )}
            >
              {ticket.presale ? "💵 " : "🎫 "}{ticket.regular.price}
            </div>
          </div>
        )}
        {hasEventPassed && (
          <p className="text-sm text-red-500 font-medium absolute right-3 bottom-3">
            Evento finalizado
          </p>
        )}
        {
          hasEventPassed && (
            <span
              className="absolute -top-5 font-serif right-4 capitalize text-3xl font-bold animate-pulse duration-3000 text-gradient"
            >
              ¡GRACIAS!
            </span>
          )
        }
      </CardContent>
    </Card>
  );
};