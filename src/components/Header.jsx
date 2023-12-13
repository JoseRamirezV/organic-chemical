import { Button, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import { useScrollBackground } from '../hooks/useScrollBackground';

export function Header() {

  const {changeStyle} = useScrollBackground()
  
  return (
    <Center
      as="header"
      w={"100vw"}
      position={"fixed"}
      zIndex={2}
      left={'0px'}
      transition={'background 0.5s ease'}
      background={changeStyle && "blue"}
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
