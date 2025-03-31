
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApartmentCarouselProps {
  images: string[];
  title: string;
}

const ApartmentCarousel = ({ images, title }: ApartmentCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full w-full">
      <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-lg">
        <div
          className="absolute left-0 top-0 h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute left-0 top-0 h-full w-full"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <img
                src={image}
                alt={`${title} - Photo ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <Button
          onClick={goToPrevious}
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-brand-gray-800"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Right Arrow */}
        <Button
          onClick={goToNext}
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-brand-gray-800"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots/Indicators */}
      <div className="mt-4 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-brand-blue" : "bg-brand-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ApartmentCarousel;
