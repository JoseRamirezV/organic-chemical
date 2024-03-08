import { Box, Center, Flex, Show } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useCarousel from "@/hooks/useCarousel";
import {
  DotButton,
  NextButton,
  PrevButton,
} from "./EmblaCarouselArrowsDotsButtons";

export default function EmblaCarousel({
  children,
  options,
  arrowBtnOptions,
  dotsOptions,
  gap,
  p,
  autoplay,
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
      w={"100%"}
      direction={"column"}
      pos={"relative"}
    >
      <Box
        // className="embla__viewport"
        overflowX={"hidden"}
        px={p?.px}
        py={p?.py}
        ref={emblaRef}
      >
        <Flex
          // className="embla__container"
          style={{ touchAction: "pan-y", backfaceVisibility: "hidden" }}
          gap={gap}
          cursor={"grab"}
          _active={{ cursor: "grabbing" }}
        >
          {children}
        </Flex>
      </Box>

      <Show above="lg">
        <PrevButton
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          left={arrowBtnOptions?.separation ?? "1rem"}
          color={arrowBtnOptions?.color ?? "white"}
        />
        <NextButton
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          right={arrowBtnOptions?.separation ?? "1rem"}
          color={arrowBtnOptions?.color ?? "white"}
        />
      </Show>

      <Center
        gap={"0.75rem"}
        pos={"absolute"}
        top={dotsOptions.positionFromTop ?? "95%"}
        left={0}
        right={0}
      >
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            _after={{
              content: '""',
              boxSize: "100%",
              rounded: "full",
              transition: "all 0.2s ease",
              outline: `2px solid`,
              outlineColor: dotsOptions.color ?? "white",
              background:
                index === selectedIndex && (dotsOptions.color ?? "white"),
            }}
          />
        ))}
      </Center>
    </Flex>
  );
}

EmblaCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.shape({
    loop: PropTypes.bool,
    duration: PropTypes.number,
  }),
  arrowBtnOptions: PropTypes.shape({
    color: PropTypes.string,
    separation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  dotsOptions: PropTypes.shape({
    color: PropTypes.string,
    positionFromTop: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  p: PropTypes.shape({
    px: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    py: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  autoplay: PropTypes.bool,
};
