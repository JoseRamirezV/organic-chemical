import { Button, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Header({ blur }) {
  return (
    <Center
      as="header"
      w={"100vw"}
      position={"fixed"}
      left={'0px'}
      transition={'backdrop-filter 0.5s ease'}
      backdropFilter={blur && "blur(10px)"}
    >
      <Flex w={"85vw"} p={3} alignItems={"center"}>
        <Image
          boxSize="4rem"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Spacer />
        <Button>Algo</Button>
      </Flex>
    </Center>
  );
}

Header.propTypes = {
  blur: PropTypes.bool,
};
