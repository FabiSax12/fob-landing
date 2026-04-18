import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Review {
  name: string;
  event: string;
  comment: string;
  rating: number;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-8">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
            <figure className="group flex flex-col h-full py-6">
              {/* Stars — small, not the star-grid-above-every-card cliché */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    style={{ fill: "oklch(0.83 0.155 72)" }}
                  >
                    <path d="M6 1l1.27 2.57 2.83.41-2.05 2 .48 2.83L6 7.35l-2.53 1.33.48-2.83-2.05-2 2.83-.41z" />
                  </svg>
                ))}
              </div>

              {/* Pull-quote: text is the hero */}
              <blockquote
                className="font-serif flex-1 leading-relaxed mb-6"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  color: "oklch(0.94 0.010 75)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;{review.comment}&rdquo;
              </blockquote>

              <figcaption>
                <p
                  className="font-sans font-medium"
                  style={{ fontSize: "0.9rem", color: "oklch(0.83 0.155 72)" }}
                >
                  {review.name}
                </p>
                <p
                  className="font-sans mt-0.5"
                  style={{ fontSize: "0.78rem", color: "oklch(0.42 0.008 55)" }}
                >
                  {review.event}
                </p>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-3 mt-8">
        <CarouselPrevious
          className="static translate-y-0 h-9 w-9 rounded-sm border font-sans text-fob-subtle hover:text-fob-text transition-colors"
          style={{
            background: "oklch(0.16 0.013 50)",
            borderColor: "oklch(0.22 0.016 50)",
          }}
        />
        <CarouselNext
          className="static translate-y-0 h-9 w-9 rounded-sm border font-sans text-fob-subtle hover:text-fob-text transition-colors"
          style={{
            background: "oklch(0.16 0.013 50)",
            borderColor: "oklch(0.22 0.016 50)",
          }}
        />
      </div>
    </Carousel>
  );
};
