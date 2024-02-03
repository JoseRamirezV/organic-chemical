import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { LinkButton } from "./LinkButton";
import { primaryColor, primaryFontColor } from "../styles/colorConstants.json";

export function ProductCard({ product, description, link, ...extraStyles }) {
  return (
    <Card
      maxW={{ sm: "40rem", md: "20rem" }}
      maxH={{ sm: "45rem", md: "32rem" }}
      transition={"all 0.2s ease"}
      borderRadius={"3xl"}
      boxShadow="lg"
      color={primaryFontColor}
      _hover={{ bg: primaryColor, color: "white" }}
      {...extraStyles}
      data-group
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="2xl"
          w={"100%"}
        />
        <Flex direction="column" mt="6" gap="3" w="100%" textAlign={"center"}>
          <Heading size="md" h={"3rem"} fontWeight={"semibold"}>
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
  extraStyles: PropTypes.object,
};
