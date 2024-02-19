import { primaryColor } from "@/colorConstants.json";
import slides from "@/mocks/heroSlides.json";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import EmblaCarousel from "@/components/EmblaCarousel";
import LinkButton from "@/components/LinkButton";

export default function Hero({ lan, id }) {

  return (
    <Flex
      as={"section"}
      id={id}
      overflowX={"hidden"}
    >
      <EmblaCarousel options={{ loop: true }} btnSeparation="0.5rem" autoplay>
        {slides[lan].map((slide) => (
          <Box
            key={slide.id}
            h={'100vh'}
            bgImage={slide.imgUrl}
            bgSize={"cover"}
            flex={"0 0 100%"}
          >
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              h={"100%"}
              px={{base: "5vw", sm: "10vw"}}
              justify={{ base: "center", md: "space-between" }}
              align={"center"}
              gap={{ md: "2rem" }}
              bg={"#ffffff5c"}
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
                  _hover={{ color: primaryColor, bg: "white" }}
                />
              </Stack>
              <AspectRatio
                width={{ base: "90%", md: "25rem" }}
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
