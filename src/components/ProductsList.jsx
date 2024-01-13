import { Flex, Show } from "@chakra-ui/react";
import products from "../mocks/products.json";
import { ProductCard } from "./ProductCard";
import { EmblaCarousel } from "./EmblaCarousel";

export function ProductsList() {
  return (
    <>
      <Show above="lg">
        <Flex justifyContent={"space-around"} w="100%">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product.name}
              description={product.description}
              link={product.link}
            ></ProductCard>
          ))}
        </Flex>
      </Show>
      <Show below="md">
        <EmblaCarousel h={'auto'} w={100}>
        {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product.name}
              description={product.description}
              link={product.link}
            ></ProductCard>
          ))}
        </EmblaCarousel>
      </Show>
    </>
  );
}
