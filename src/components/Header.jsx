import { Button, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import { useScrollBackground } from '../hooks/useScrollBackground';

export function Header() {

  const {changeStyle} = useScrollBackground()
  
  return (
    <Center
      as="header"
      w={"100%"}
      h={"15%"}
      position={"fixed"}
      zIndex={1}
      transition={'background 0.8s ease'}
      background={changeStyle && "gray.50"}
      boxShadow={changeStyle && "#56d152 0px -2px 10px 0px;"}
    >
      <Flex w={"80vw"} h={'100%'} p={1} alignItems={"center"}>
        <Image
          h="90%"
          objectFit="cover"
          // bg={'#c2ddc0'}
          px={1}
          rounded={'lg'}
          src="images/Logo.png"
          alt="Chemical-logo"
        />
        <Spacer />
        <Button>Algo</Button>
      </Flex>
    </Center>
  );
}
