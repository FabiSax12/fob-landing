import type { Event } from "@/types/envent";
import { cn } from "@/lib/utils";

interface Props extends Pick<Event, "date" | "name" | "location" | "time" | "ticket" | "type"> {}

export const EventCard = ({ date, name, location, time, ticket, type }: Props) => {
  const [year, month, day] = date.split("-").map(Number);
  const eventDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  const hasEventPassed = currentDate > eventDate;

  const dayNum = eventDate.toLocaleDateString("es-CR", { day: "numeric" });
  const monthStr = eventDate.toLocaleDateString("es-CR", { month: "long" });
  const yearStr = eventDate.toLocaleDateString("es-CR", { year: "numeric" });

  return (
    <article
      className={cn(
        "group relative py-8 transition-all duration-300",
        "border-b border-fob-border last:border-b-0",
        hasEventPassed && "opacity-50"
      )}
      style={{ borderColor: "oklch(0.22 0.016 50)" }}
    >
      <div className="flex items-start gap-6">
        {/* Editorial date block */}
        <div className="flex-shrink-0 text-center min-w-[4rem]">
          <span
            className={cn("font-serif block leading-none", hasEventPassed && "line-through")}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "oklch(0.83 0.155 72)",
              lineHeight: 1,
            }}
          >
            {dayNum}
          </span>
          <span
            className="font-sans uppercase block mt-1"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "oklch(0.67 0.010 65)",
            }}
          >
            {monthStr.slice(0, 3)}
          </span>
          <span
            className="font-sans block"
            style={{
              fontSize: "0.65rem",
              color: "oklch(0.42 0.008 55)",
            }}
          >
            {yearStr}
          </span>
        </div>

        {/* Event info */}
        <div className="flex-1 min-w-0 pt-1">
          <h3
            className="font-serif leading-snug mb-1 transition-colors duration-300 group-hover:text-fob-gold"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
              color: "oklch(0.94 0.010 75)",
            }}
          >
            {name}
          </h3>

          <p
            className="font-sans mb-2"
            style={{
              fontSize: "0.875rem",
              color: "oklch(0.67 0.010 65)",
            }}
          >
            {location.name}
          </p>

          {time?.start && (
            <p
              className="font-sans"
              style={{
                fontSize: "0.8rem",
                color: "oklch(0.42 0.008 55)",
              }}
            >
              {time.start}
            </p>
          )}

          {ticket && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {ticket.presale && (
                <span
                  className="inline-block px-2.5 py-0.5 font-sans text-xs font-medium"
                  style={{
                    background: "oklch(0.72 0.170 50 / 0.12)",
                    color: "oklch(0.83 0.155 72)",
                    border: "1px solid oklch(0.72 0.170 50 / 0.3)",
                    borderRadius: "2px",
                  }}
                >
                  Preventa · {ticket.presale.price}
                </span>
              )}
              <span
                className="inline-block px-2.5 py-0.5 font-sans text-xs"
                style={{
                  background: "oklch(0.16 0.013 50)",
                  color: "oklch(0.67 0.010 65)",
                  border: "1px solid oklch(0.22 0.016 50)",
                  borderRadius: "2px",
                }}
              >
                {ticket.regular.price}
              </span>
            </div>
          )}
        </div>

        {/* Passed indicator */}
        {hasEventPassed && (
          <div
            className="flex-shrink-0 self-center font-serif italic"
            style={{ fontSize: "0.85rem", color: "oklch(0.67 0.010 65)" }}
          >
            Gracias
          </div>
        )}
      </div>
    </article>
  );
};
