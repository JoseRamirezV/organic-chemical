import { Divider, Flex, Heading, Show, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import productsData from "../mocks/productsData.json";
import { EmblaCarousel } from "./EmblaCarousel";
import { ProductCard } from "./ProductCard";

export function ProductsList({ lan, id }) {
  return (
    <VStack
      height="auto"
      id={id}
      bg="gray.50"
      px={{ base: "5%", sm: "10%", "2xl": "5%" }}
      py={{ base: "2rem", "2xl": "5%" }}
      align={"center"}
      justify={"center"}
      overflowX={"hidden"}
    >
      <Heading
        as="h2"
        w="12rem"
        textAlign={"center"}
        mb={5}
        color={primaryFontColor}
      >
        {lan === "es" ? "Productos" : "Products"}
        <Divider
          mt={2}
          borderBottom={"5px solid"}
          borderBottomColor={primaryColor}
          borderRadius={"full"}
        />
      </Heading>
      <Show above="1600px">
        <Flex justifyContent={"space-around"} w="100%">
          {productsData[lan].map((product, i) => (
            <ProductCard
              key={i}
              product={product.name}
              description={product.description}
              link={product.link}
            ></ProductCard>
          ))}
        </Flex>
      </Show>

      {/* Show on mobile and small screens */}
      <Show breakpoint="(max-width: 1500px)">
        <EmblaCarousel
          options={{ slidesToScroll: "2" }}
          gap="2rem"
          p={{ px: { base: ".5rem", sm: "1rem" }, py: "1rem" }}
          arrowBtnOptions={{
            color: primaryColor,
            separation: "-3rem",
          }}
          dotsOptions={{ color: primaryColor, positionFromTop: "100%" }}
        >
          {productsData[lan].map((product, i) => (
            <ProductCard
              key={i}
              product={product.name}
              description={product.description}
              link={product.link}
              flex="0 0 fit-content"
            />
          ))}
        </EmblaCarousel>
      </Show>
    </VStack>
  );
}

ProductsList.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  id: PropTypes.string.isRequired,
};
