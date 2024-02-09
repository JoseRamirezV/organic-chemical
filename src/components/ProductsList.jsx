import { Divider, Flex, Heading, Show, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  primaryColor,
  primaryFontColor,
  secondaryColor,
} from "../colorConstants.json";
import products from "../mocks/products.json";
import { EmblaCarousel } from "./EmblaCarousel";
import { ProductCard } from "./ProductCard";

export function ProductsList({ lan, id }) {
  return (
    <VStack
      height="auto"
      id={id}
      bg="gray.50"
      px={{ base: "10%", "2xl": "5%" }}
      py={{ base: "2rem", "2xl": "2rem" }}
      align={"center"}
      justify={"center"}
      overflowX={"hidden"}
    >
      <Heading
        as="h2"
        w="12rem"
        textAlign={"center"}
        mt={10}
        mb={5}
        color={primaryFontColor}
      >
        {lan === "es" ? "Productos" : "Products"}
        <Divider
          mt={2}
          borderBottom={"5px solid"}
          borderBottomColor={secondaryColor}
          borderRadius={"full"}
        />
      </Heading>
      <Show above="1600px">
        <Flex justifyContent={"space-around"} w="100%">
          {products[lan].map((product, i) => (
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
      <Show breakpoint="(max-width: 1600px)">
        <EmblaCarousel
          h={"auto"}
          w={"100%"}
          options={{ slidesToScroll: "2" }}
          slidesContainerStyle={{ gap: "1.5rem", py: "1rem" }}
          btnColor={primaryColor}
          btnSeparation="-2.5rem"
          enableDots={false}
        >
          {products[lan].map((product, i) => (
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
