"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function MainPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-[60vh] md:h-[75vh]">
              <Image
                src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13"
                alt="Coffee"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Brewed bold. Served fresh. Every time.
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[60vh] md:h-[75vh]">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="Coffee"
                fill
                priority
                className="object-cover"
              />
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Not just coffee. A moment made better.
            </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[60vh] md:h-[75vh]">
              <Image
                src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd"
                alt="Coffee"
                fill
                priority
                className="object-cover"
              />
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Your day starts here.
            </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
