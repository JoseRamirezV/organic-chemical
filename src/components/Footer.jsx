import { Box, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
// import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai';
import { primaryFontColor, secondaryFontColor } from "@/colorConstants.json";
import pageData from "@/mocks/pageData.json";
import PropTypes from "prop-types";

export default function Footer({ lan, id }) {
  const socialMediaLinks = {
    Facebook: "https://Facebook.com",
    Instagram: "https://Instagram.com",
    WhatsApp: "https://wa.me/573173777044",
    LinkedIn: "https://LinkedIn.com",
  };

  const linkIcons = {
    Facebook: FaFacebookSquare,
    Instagram: FaInstagramSquare,
    WhatsApp: FaWhatsappSquare,
    LinkedIn: FaLinkedin,
  };

  // const linkIcons = {
  //     Facebook: {
  //       icon: <FaFacebookSquare style={{height: '100%', width: '100%'}}/>,
  //       color: 'facebook'
  //     },
  //     Instagram: {
  //       icon: <FaInstagramSquare style={{height: '100%', width: '100%'}}/>,
  //       color: 'pink'
  //     },
  //     WhatsApp: {
  //       icon: <FaWhatsappSquare style={{height: '100%', width: '100%'}}/>,
  //       color: 'whatsapp'
  //     },
  //     LinkedIn: {
  //       icon: <FaLinkedin style={{height: '100%', width: '100%'}}/>,
  //       color: 'linkedin'
  //     },
  //   };

  return (
    <Box as="footer" id={id} boxSize="100%" bg={"gray.50"} py="2rem">
      <VStack gap={5} py={5} color={primaryFontColor}>
        <HStack align={"center"} gap={1}>
          {Object.keys(socialMediaLinks).map((link, i) => (
            <Link key={i} href={socialMediaLinks[link]} boxSize={"2rem"}>
              <Icon as={linkIcons[link]} boxSize={"full"} transition={'all .1s ease'} _hover={{transform: 'scale(1.3)'}}/>
              {/* <IconButton icon={linkIcons[link].icon} size={'sm'}/> */}
            </Link>
          ))}
        </HStack>
        <HStack gap={5}>
          {pageData[lan].sections.map((section, i) => {
            return (
              section !== pageData[lan].sections[3] && (
                <Text
                  as={"a"}
                  key={i}
                  fontSize={{ base: "md", md: "xl" }}
                  textAlign={"center"}
                  href={`#${section}`}
                >
                  {section}
                </Text>
              )
            );
          })}
        </HStack>
        <Text color={secondaryFontColor} textAlign={"center"} mx={2}>
          Copyright © 2024 All rights reserved by Chemical Group
        </Text>
      </VStack>
    </Box>
  );
}

Footer.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  id: PropTypes.string.isRequired,
};
