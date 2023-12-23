import { Button, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import { useScrollBackground } from '../hooks/useScrollBackground';

export function Header() {

  const {changeStyle} = useScrollBackground()
  
  return (
    <Center
      as="header"
      w={"100%"}
      h={"10%"}
      position={"fixed"}
      zIndex={1}
      transition={'background 0.8s ease'}
      background={changeStyle && "blue"}
    >
      <Flex w={"80vw"} h={'100%'} p={1} alignItems={"center"}>
        <Image
          h="100%"
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
