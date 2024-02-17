import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import companyData from "@/mocks/companyData.json";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Us({ lan, id }) {
  return (
    <Box
      as="section"
      id={id}
      px={{ base: "5%", sm: "10%" }}
      py={"6vh"}
      bg={"gray.100"}
    >
      <Tabs size={"lg"} variant="enclosed" isFitted isLazy>
        <TabList
          mb={{ base: 3, sm: 0 }}
          gap={{ base: 1, sm: 0 }}
          align={"end"}
          flexWrap={"wrap"}
        >
          {companyData[lan].map(({ title }) => (
            <Tab
              key={title}
              h="3rem"
              // flexBasis={{ base: "8rem", sm: "0" }}
              roundedTop={"xl"}
              roundedBottom={{ base: "xl", sm: "none" }}
              bg={primaryColor}
              color={"white"}
              border={"1px solid"}
              borderColor={"gray.300"}
              borderBottom={"0"}
              fontWeight={600}
              transition={"all 0.2s ease"}
              transform={"translateY(1px)"}
              _selected={{
                base: {
                  color: primaryFontColor,
                  bg: "white",
                },
              }}
              _hover={{
                base: {
                  color: primaryFontColor,
                  bg: "white",
                },
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
          rounded={"lg"}
          roundedTop={{ sm: "none" }}
          px={"5%"}
          py={{ base: "1rem", sm: "2rem" }}
        >
          {companyData[lan].map(({ title, description, img }) => (
            <TabPanel
              display={"flex"}
              flexDirection={"column"}
              key={title}
              h={{ base: "auto", sm: "65vh", "2xl": "50vh" }}
              color={primaryFontColor}
            >
              <Heading>{title}</Heading>
              <Divider my={5} />
              <Flex
                direction={{ base: "column-reverse", lg: "row" }}
                justify={{ base: "center", lg: "space-between" }}
                gap={"4rem"}
                h={"100%"}
                fontSize={{ base: "md", sm: "lg", lg: "xl" }}
              >
                <Text whiteSpace={"pre-wrap"}>{description}</Text>
                <Box
                  flex={"1 0 40%"}
                  h={"100%"}
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
    </Box>
  );
}

Us.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  id: PropTypes.string.isRequired,
};
