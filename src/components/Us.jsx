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
import {
  primaryColor,
  primaryFontColor,
  secondaryFontColor,
} from "../colorConstants.json";
import companyInfo from "../mocks/companyInfo.json";

export function Us({ lan, id }) {
  return (
    <Box
      as="section"
      id={id}
      height="auto"
      px={{ base: "5%", sm: "10%" }}
      py={"1rem"}
      bg={"gray.100"}
    >
      <Tabs
        size={"lg"}
        w={"100%"}
        minH={{ base: "100vh", sm: "80vh" }}
        py={"5vh"}
        variant="enclosed"
      >
        <TabList ms={{ base: 0, sm: 2 }} mb={{ base: 3, sm: 0 }}>
          <Flex wrap={"wrap"} gap={{ base: 1, sm: 0 }} align={"end"}>
            {companyInfo[lan].map(({ title }) => (
              <Tab
                key={title}
                h="3rem"
                w="auto"
                flexBasis={{ base: "8rem", sm: "0" }}
                flexGrow={1}
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
                  sm: {
                    h: "3.4rem",
                  },
                }}
                _hover={{
                  base: {
                    color: secondaryFontColor,
                    bg: "white",
                  },
                  sm: {
                    h: "3.4rem",
                  },
                }}
              >
                {title}
              </Tab>
            ))}
          </Flex>
        </TabList>
        <TabPanels
          border={"1px solid"}
          borderColor={"gray.300"}
          bg={"white"}
          rounded={"lg"}
          px={"5%"}
          py={{ base: "1rem", sm: "2rem" }}
        >
          {companyInfo[lan].map(({ title, description, img }) => (
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
                <Text>{description}</Text>
                <Box
                  flex={"1 0 40%"}
                  h={"100%"}
                  rounded={"lg"}
                  overflow={"clip"}
                  boxShadow={"base"}
                >
                  <Image boxSize={"100%"} src={img} objectFit={"cover"} />
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