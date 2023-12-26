import {
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import products from "../mocks/products.json";
import { LinkButton } from "./LinkButton";

export function Products() {
  return (
    <Flex gap={5}>
      {products.map((product, i) => (
        <Card size="md" borderRadius={'3xl'} key={i}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w={'15rem'}
            />
            <Stack mt="6" spacing="3" maxW='200px'>
              <Heading size="md">Living room Sofa</Heading>
              <Text fontSize='sm'>
                {product.description}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <LinkButton link={product.link} inverted/>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}
