import {
  Divider,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import companyInfo from "../mocks/companyInfo.json";

export function Us() {
  return (
    <>
      <Tabs size={"lg"} w={"100%"} h={"80vh"} variant="enclosed">
        <TabList ms={{ base: 0, sm: 2 }} mb={{ base: 3, sm: 0 }}>
          <Flex wrap={'wrap'}>
            {companyInfo.map(({ title }) => (
              <Tab
                key={title}
                bg={"#56d152"}
                color={"white"}
                _selected={{
                  sm: {
                    h: "auto",
                    transform: "translateY(0)",
                  },
                  bg: "white",
                  color: "gray.700",
                }}
                border={"1px solid"}
                borderColor={"gray.300"}
                borderBottomColor={"white"}
                fontWeight={600}
                transform={"translateY(15%)"}
                h={{ base: "auto", sm: "90%" }}
                w={{ base: "auto", sm: "auto" }}
                flexBasis={{base: '8rem', sm: '0'}}
                flexGrow={1}
                roundedTop={"xl"}
                roundedBottom={{ base: "xl", sm: "none" }}
              >
                {title}
              </Tab>
            ))}
          </Flex>
        </TabList>
        <TabPanels
          h={{ base: "70%", sm: "90%" }}
          border={"1px solid"}
          borderColor={"gray.300"}
          bg={"white"}
          rounded={"lg"}
          px={"3rem"}
          py={"2rem"}
        >
          {companyInfo.map(({ title, description, img }) => (
            <TabPanel key={title} h="100%">
              <Heading>{title}</Heading>
              <Divider my={5} />
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify={"space-between"}
              >
                <Text>{description}</Text>
                <Image
                  width={"20rem"}
                  aspectRatio={4 / 3}
                  src={img}
                  objectFit={"cover"}
                />
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}
