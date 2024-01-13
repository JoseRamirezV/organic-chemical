import { Box } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import "../styles/carousel.css";
import {
  DotButton,
  NextButton,
  PrevButton,
} from "./EmblaCarouselArrowsDotsButtons";
// import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel({ children, options, h, w }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <Box className="embla" h={h ? `${h}%` : "auto"} w={w ? `${w}%` : "auto"}>
      <Box className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container">
          {children.map((child, i) => (
            <Box className="embla__slide" key={i}>
              {child}
            </Box>
          ))}
        </Box>
      </Box>

      <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />

      <Box className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex
                ? " embla__dot--selected"
                : " embla__dot--notSelected"
            )}
          />
        ))}
      </Box>
    </Box>
  );
}

EmblaCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    loop: PropTypes.bool,
    duration: PropTypes.number,
  }),
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
