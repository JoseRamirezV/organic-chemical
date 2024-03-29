import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";


export default function ProductsList({lan, products}) {
  return (
    <Flex justifyContent={"space-around"} w="100%">
      {products[lan].map((product, i) => (
        <ProductCard
          key={i}
          product={product.name}
          description={product.description}
          link={product.link}
          flex={'1 0 fit-content'}
        ></ProductCard>
      ))}
    </Flex>
  );
}

ProductsList.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  products: PropTypes.object
};
