import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import {ImageType} from "@app/types/casts/cast";

type ImageCarouselProps = {
  images: ImageType[];
}

export const ImageCarousel = ({images}: ImageCarouselProps) => {

  return (
    <Carousel className="w-full ml-4 absolute bottom-0">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.file_path} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <img
                src={`https://image.tmdb.org/t/p/w342${image.file_path}`}
                alt={`image-${image?.file_path}`}
                className="rounded-xl mb-5 sm:mb-0"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}