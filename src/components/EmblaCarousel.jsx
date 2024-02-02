import { Box, Flex } from "@chakra-ui/react";
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

export function EmblaCarousel({
  children,
  options,
  h = "auto",
  w = "auto",
  btnColor = "white",
  btnSeparation = "1rem",
  enableDots = true,
  dotsPositionTop = "90%",
  slidesContainerStyle,
  ...extraStyles}) {
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

  const nextPrevBtnCommonStyles = {
    position: "absolute",
    w: "3rem",
    h: "100%",
    justify: "center",
    align: "center",
    style: { touchAction: "manipulation" },
    cursor: "pointer",
    color: btnColor,
    _disabled: { opacity: 0.3 },
  };

  return (
    <Flex
      // className="embla"
      h={h}
      w={w}
      direction={"column"}
      justify={"center"}
      pos={"relative"}
    >
      <Box
        // className="embla__viewport"
        boxSize='full'
        overflowX={"hidden"}
        {...extraStyles}
        ref={emblaRef}
      >
        <Flex
          // className="embla__container"
          h="full"
          w={'100%'}
          style={{ touchAction: "pan-y" }}
          {...slidesContainerStyle}
        >
          {children}
        </Flex>
      </Box>

      <PrevButton
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        left={btnSeparation}
        {...nextPrevBtnCommonStyles}
      />
      <NextButton
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        right={btnSeparation}
        {...nextPrevBtnCommonStyles}
      />

      {enableDots && (
        <Box className="embla__dots" top={dotsPositionTop}>
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
      )}
    </Flex>
  );
}

EmblaCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    loop: PropTypes.bool,
    duration: PropTypes.number,
  }),
  h: PropTypes.string,
  w: PropTypes.string,
  extraStyles: PropTypes.string,
  slidesContainerStyle: PropTypes.object,
  btnColor: PropTypes.string,
  btnSeparation: PropTypes.string,
  dotsPositionTop: PropTypes.string,
  enableDots: PropTypes.bool,
};
