import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import LinkButton from "./LinkButton";

export default function ProductCard({ product, description, link, flex }) {
  return (
    <Card
      maxW={{ base: "25rem", sm: "20rem" }}
      transition={"all 0.2s ease"}
      borderRadius={"3xl"}
      boxShadow="lg"
      color={primaryFontColor}
      _hover={{ bg: primaryColor, color: "white" }}
      flex={flex}
      data-group
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={product}
          borderRadius="2xl"
          loading="lazy"
          w={"100%"}
        />
        <Flex
          direction="column"
          mt="6"
          gap={{ base: "1rem", sm: "3" }}
          w="100%"
          textAlign={"center"}
        >
          <Heading size={"md"} fontWeight={"semibold"}>
            {product}
          </Heading>
          <Text fontSize="sm">{description}</Text>
        </Flex>
      </CardBody>
      <CardFooter justify={"center"}>
        <LinkButton
          link={link}
          color={primaryColor}
          _groupHover={{
            color: "white",
            borderColor: "white",
            _hover: { bg: "white", color: primaryColor },
          }}
        />
      </CardFooter>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  flex: PropTypes.string,
};
