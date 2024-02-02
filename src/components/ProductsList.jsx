import { Flex, VStack, Heading, Show, Divider, Hide } from "@chakra-ui/react";
import products from "../mocks/products.json";
import { ProductCard } from "./ProductCard";
import { EmblaCarousel } from "./EmblaCarousel";

export function ProductsList() {
  return (
    <VStack w="100%" pb={10}>
      <Show above="1600px">
        <Heading as="h2" w="12rem" textAlign={"center"} mt={10} mb={5} color={'gray.700'}>
          Productos
          <Divider
            mt={2}
            borderBottom={"5px solid #20a71b"}
            borderRadius={"full"}
          />
        </Heading>
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

      {/* Show on mobile */}
      <Hide above="1600px">
        <Heading as="h2" w="12rem" textAlign={"center"} mt={10} mb={5} color={'gray.700'}>
          Productos
          <Divider
            mt={2}
            borderBottom={"5px solid #20a71b"}
            borderRadius={"full"}
          />
        </Heading>
        <EmblaCarousel
          h={"auto"}
          w={'100%'}
          options={{slidesToScroll: '2'}}
          slidesContainerStyle={{gap: '1.5rem', py: '1rem'}}
          btnColor="#20a71b"
          btnSeparation="-3rem"
          enableDots = {false}
          px={'1rem'}
        >
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product.name}
              description={product.description}
              link={product.link}
              flex= '0 0 fit-content'
            />
          ))}
        </EmblaCarousel>
      </Hide>
    </VStack>
  );
}
