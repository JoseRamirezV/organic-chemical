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

export default function Hero({ lan }) {
  return (
    <EmblaCarousel options={{ loop: true }} btnSeparation="0.5rem" dotsOptions={{positionFromTop: "94%"}} autoplay>
      {slides[lan].map((slide) => (
        <Box
          key={slide.id}
          bgImage={slide.imgUrl}
          bgSize={"cover"}
          minH={{ md: "auto",lg: "100vh" , "3xl": "auto" }}
          flex={"0 0 100%"}
        >
          <Flex
            h={"100%"}
            justifyContent={"center"}
            bg={"#ffffff5c"}
            backdropFilter={"blur(10px)"}
          >
            <Flex
              direction={{ base: "column-reverse", xl: "row" }}
              justify={{
                base: "center",
                xl: "space-around",
                '2xl': "space-between",
              }}
              gap={{xl: "0", "2xl": "4rem", "3xl": "8rem" }}
              align={"center"}
              py={{ base: "4rem", xl: "0", "3xl": "10rem" }}
              pt={{ base: "22%",md: "12%" , lg: "10%", xl: 0 }}
              maxW={{ base: "100%", md: "90%" ,lg: "67.5rem", "2xl": "75%" }}
            >
              <Stack
                justify={"center"}
                textAlign={{ base: "center", lg: "start" }}
                align={{ base: "center", lg: "start" }}
                justifyContent={"start"}
                flexGrow={1}
                gap={{ base: 4, md: 10 }}
                p={"1.5rem"}
                w={{ base: "100%", md: "60%" }}
                color={"white"}
              >
                <Heading
                  as="h2"
                  fontWeight={"semibold"}
                  size={{ base: "lg", sm: "xl", md: "2xl" }}
                >
                  {slide.title}
                </Heading>
                <Text fontSize={{md: "lg", lg: "base", '2xl': "xl"}}>{slide.description}</Text>
                <LinkButton
                  link={slide.link}
                  borderColor="white"
                  color="white"
                  _hover={{ color: primaryColor, bg: "white" }}
                />
              </Stack>
              <AspectRatio width={{ base: "15rem", md: "25rem" }} ratio={1}>
                <Image
                  src={slide.imgUrl}
                  objectFit={"cover"}
                  rounded={"full"}
                ></Image>
              </AspectRatio>
            </Flex>
          </Flex>
        </Box>
      ))}
    </EmblaCarousel>
  );
}

Hero.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
};
