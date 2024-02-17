import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import productsData from "@/mocks/productsData.json";
import { Divider, Heading, Show, Spinner, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useNearScreen } from "../hooks/useNearScreen";

const EmblaCarousel = lazy(() =>
  import("@/components/EmblaCarousel").then((module) => ({
    default: module.EmblaCarousel,
  }))
);

const ProductsList = lazy(() =>
  import("@/components/ProductsList").then((module) => ({
    default: module.ProductsList,
  }))
);

const ProductCard = lazy(() =>
  import("@/components/ProductCard").then((module) => ({
    default: module.ProductCard,
  }))
);

export function Products({ lan, id }) {
  const { isNearScreen, fromRef } = useNearScreen();
  
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
      ref={fromRef}
    >
      {isNearScreen && (
        <>
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
          <Suspense fallback={<Spinner />}>
            <Show above="1600px">
              <ProductsList lan={lan} products={productsData} />
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
          </Suspense>
        </>
      )}
    </VStack>
  );
}

Products.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  id: PropTypes.string.isRequired,
};
