import type { Event } from "@/types/envent";
import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

interface Props extends Pick<Event, "date" | "name" | "location"> { }

export const EventCard = ({ date, name, location }: Props) => {
  const eventDate = new Date(date);
  const currentDate = new Date();
  const hasEventPassed = currentDate > eventDate;
  const formattedDate = eventDate.toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });

  return (
    <Card
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500 overflow-visible"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
      <CardContent className="p-6 relative z-10">
        {/* <Icon className="w-6 h-6 text-orange-400 mb-4" name="lucide--calendar" /> */}
        <Calendar className="w-6 h-6 text-orange-400 mb-4" />
        <p
          className={`
            text-3xl font-serif mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500
            ${hasEventPassed ? "line-through" : "line-through"}
          `}
        >
          {formattedDate}
        </p>
        <h3
          className="text-2xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors"
        >
          {name}
        </h3>
        <div className="flex items-center text-gray-400 mb-4">
          {/* <Icon className="w-4 h-4 mr-2" name="lucide--map-pin" /> */}
          <MapPin className="w-4 h-4 mr-2" />
          <p className="text-lg">{location.name}</p>
        </div>
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