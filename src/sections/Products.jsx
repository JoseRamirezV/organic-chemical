import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import useNearScreen from "@/hooks/useNearScreen";
import productsData from "@/mocks/productsData.json";
import {
  Box,
  Divider,
  Heading,
  Show,
  SlideFade,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, lazy, useEffect } from "react";

const EmblaCarousel = lazy(() => import("@/components/EmblaCarousel"));

const ProductsList = lazy(() => import("@/components/ProductsList"));

const ProductCard = lazy(() => import("@/components/ProductCard"));

export default function Products({ lan }) {
  const { isNearScreen, fromRef } = useNearScreen();
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    if (isNearScreen) onOpen();
  });
  return (
    <Box ref={fromRef} w={"100%"}>
      <SlideFade
        in={isOpen}
        offsetY="50px"
        transition={{ enter: { duration: 0.8 } }}
      >
        <Heading
          as="h2"
          w="12rem"
          mb={5}
          color={primaryFontColor}
          textAlign={"center"}
          mx={"auto"}
        >
          {lan === "es" ? "Productos" : "Products"}
          <Divider
            mt={2}
            borderBottom={"5px solid"}
            borderBottomColor={primaryColor}
            borderRadius={"full"}
          />
        </Heading>
        <Suspense fallback={<Spinner />}>
          <Show above="2xl">
            <ProductsList lan={lan} products={productsData} />
          </Show>
          {/* Show on mobile and small screens */}
          <Show below="2xl">
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
        </Suspense>
      </SlideFade>
    </Box>
  );
}

Products.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
};
