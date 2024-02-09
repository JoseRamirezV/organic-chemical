import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EmblaCarousel } from "./EmblaCarousel";
import { LinkButton } from "./LinkButton";
import slides from "../mocks/heroSlides.json";
import { primaryColor } from "../colorConstants.json";
import PropTypes from "prop-types";

export function Hero({ lan, id }) {
  return (
    <Flex
      as={"section"}
      id={id}
      minH="100vh"
      align={"center"}
      justify={"center"}
      overflowX={"hidden"}
    >
      <EmblaCarousel h={"100vh"} w={"100%"} options={{ loop: true }} autoplay>
        {slides[lan].map((slide) => (
          <Box
            key={slide.id}
            bgImage={slide.imgUrl}
            bgSize={"cover"}
            flex={"0 0 100%"}
          >
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              h={"100%"}
              px={"10vw"}
              justify={{ base: "center", md: "space-between" }}
              align={"center"}
              gap={{ md: "2rem" }}
              bg={"#ffffff32"}
              backdropFilter={"blur(10px)"}
            >
              <Stack
                justify={"center"}
                textAlign={{ base: "center", sm: "start" }}
                align={{ base: "center", sm: "start" }}
                gap={{ base: 5, md: 10 }}
                p={"1.5rem"}
                w={{ base: "100%", md: "60%" }}
                color={"white"}
              >
                <Heading
                  as="h2"
                  fontWeight={"semibold"}
                  size={{ base: "xl", md: "2xl" }}
                >
                  {slide.title}
                </Heading>
                <Text>{slide.description}</Text>
                <LinkButton
                  link={slide.link}
                  borderColor="white"
                  color="white"
                  gb="red"
                  _hover={{ color: primaryColor, bg: "white" }}
                />
              </Stack>
              <AspectRatio
                width={{ base: "100%", md: "25rem" }}
                ratio={{ base: 6 / 4, md: 1 }}
                flexGrow={{ md: 1 }}
              >
                <Image
                  src={slide.imgUrl}
                  objectFit={"cover"}
                  rounded={"full"}
                ></Image>
              </AspectRatio>
            </Flex>
          </Box>
        ))}
      </EmblaCarousel>
    </Flex>
  );
}

Hero.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  id: PropTypes.string.isRequired,
};
