import { Box, Center, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useCarousel } from "../hooks/useCarousel";
import { primaryColor, tertiaryColor } from "../colorConstants.json";
import {
  DotButton,
  NextButton,
  PrevButton,
} from "./EmblaCarouselArrowsDotsButtons";

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
  autoplay
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
  } = useCarousel(options, autoplay);

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
        ref={emblaRef}
      >
        <Flex
          // className="embla__container"
          h="full"
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
        color={btnColor}
      />
      <NextButton
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        right={btnSeparation}
        color={btnColor}
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
                background:
                  index === selectedIndex ? primaryColor : tertiaryColor,
              }}
              _hover={{
                _after: {
                  transform: index !== selectedIndex && "translateY(-5px)",
                },
              }}
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
  autoplay: PropTypes.bool,
};
