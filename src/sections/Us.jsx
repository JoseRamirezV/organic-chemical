import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import companyData from "@/mocks/companyData.json";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SlideFade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import useNearScreen from "../hooks/useNearScreen";

export default function Us({ lan }) {
  const { isOpen, onOpen } = useDisclosure();
  const { isNearScreen, fromRef } = useNearScreen();

  useEffect(() => {
    if (isNearScreen) onOpen();
  });

  return (
    <Box ref={fromRef} w={'100%'}>
      <SlideFade
        in={isOpen}
        offsetY={"50px"}
        transition={{ enter: { duration: 0.8 } }}
      >
        <Tabs size={"lg"} w={'100%'} variant="enclosed" isFitted isLazy>
          <TabList
            mb={{ base: 2, sm: 0 }}
            gap={{ base: 1, sm: 0 }}
            align={"end"}
            flexWrap={"wrap"}
          >
            {companyData[lan].map(({ title }) => (
              <Tab
                key={title}
                h="3rem"
                rounded={"xl"}
                roundedBottom={{ sm: "none" }}
                bg={primaryColor}
                color={"white"}
                border={"1px solid"}
                borderColor={"gray.300"}
                borderBottom={{sm: "0"}}
                fontWeight={600}
                fontSize={{ base: "md", sm: "lg" }}
                transition={"all 0.2s ease"}
                transform={"translateY(2px)"}
                _selected={{
                  color: primaryFontColor,
                  bg: "white",
                }}
                _hover={{
                  color: primaryFontColor,
                  bg: "white",
                }}
              >
                {title}
              </Tab>
            ))}
          </TabList>
          <TabPanels
            border={"1px solid"}
            borderColor={"gray.300"}
            bg={"white"}
            rounded={"xl"}
            roundedTop={{ sm: "none" }}
            px={"5%"}
            py={{ base: "1rem", sm: "2rem" }}
          >
            {companyData[lan].map(({ title, description, img }) => (
              <TabPanel
                display={"flex"}
                flexDirection={"column"}
                key={title}
                h={{ base: "auto", "2xl": "50vh" }}
                color={primaryFontColor}
              >
                <Heading size={{ base: "md", sm: "lg" }}>{title}</Heading>
                <Divider my={5} />
                <Flex
                  direction={{ base: "column-reverse", lg: "row" }}
                  justify={{ base: "center", lg: "space-between" }}
                  gap={"2rem"}
                  fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                >
                  <Text whiteSpace={"pre-wrap"} flex={"1 0 50%"}>
                    {description}
                  </Text>
                  <Box
                    flex={"1 1 auto"}
                    h={"300px"}
                    rounded={"lg"}
                    overflow={"clip"}
                    boxShadow={"base"}
                  >
                    <Image
                      boxSize={"100%"}
                      src={img}
                      objectFit={"cover"}
                      loading="lazy"
                    />
                  </Box>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </SlideFade>
    </Box>
  );
}

Us.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
};
