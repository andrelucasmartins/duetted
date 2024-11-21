"use client";

import { RECIPES_CAROUSEL_DATA } from "@/data/recipes-carousel-data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
interface RecipeCarouselProps {}

export const RecipeCarousel = ({ ...props }: RecipeCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000 }));
  return (
    <div {...props} className="mx-6 md:mx-0">
      <Carousel
        className="w-full max-w-full"
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {RECIPES_CAROUSEL_DATA.map((recipe) => (
            <CarouselItem
              key={recipe.id}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <Link href={recipe.url} className="p-2">
                <Card className="w-full">
                  <CardContent className="flex aspect-square items-center justify-center  p-0 border-4 border-white rounded">
                    <Image
                      src={recipe.image}
                      alt="Depoimento"
                      width={300}
                      height={300}
                      className="object-cover h-full w-full"
                    />
                  </CardContent>
                </Card>
                <p className="uppercase">{recipe.title}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-white size-10 hidden md:flex" />
        <CarouselNext className="bg-primary text-white size-10 hidden md:flex" />
      </Carousel>
    </div>
  );
};
