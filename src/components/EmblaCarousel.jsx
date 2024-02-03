import { Box, Center, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useCarousel } from "../hooks/useCarousel";
import { primaryColor, tertiaryColor } from '../styles/colorConstants.json';
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
  ...extraStyles
}) {
  const {
    emblaRef,
    prevBtnDisabled,
    nextBtnDisabled,
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  } = useCarousel(options);

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
        boxSize="full"
        overflowX={"hidden"}
        {...extraStyles}
        ref={emblaRef}
      >
        <Flex
          // className="embla__container"
          h="full"
          w={"100%"}
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
        <Center
          gap={"0.75rem"}
          pos={"absolute"}
          top={dotsPositionTop}
          left={0}
          right={0}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              _after={{
                content: '""',
                width: "100%",
                height: "0.4rem",
                borderRadius: "0.2rem",
                transition: "all 0.2s ease",
                background: index === selectedIndex ? primaryColor : tertiaryColor,
              }}
              _hover={{ _after: { transform: index !== selectedIndex && "translateY(-5px)" } }}
            />
          ))}
        </Center>
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
  btnColor: PropTypes.string,
  btnSeparation: PropTypes.string,
  enableDots: PropTypes.bool,
  dotsPositionTop: PropTypes.string,
  slidesContainerStyle: PropTypes.object,
  extraStyles: PropTypes.string,
};
