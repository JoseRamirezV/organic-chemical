import { Box, VStack, HStack, Text, Icon, Link } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaLinkedin } from 'react-icons/fa';
// import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai';
import companyLinks from '../mocks/companyLinks.json';
import {primaryFontColor, secondaryFontColor} from '../styles/colorConstants.json';

export function Footer() {

  const links = {
    "Facebook": FaFacebookSquare,
    "Instagram": FaInstagramSquare,
    "WhatsApp": FaWhatsappSquare,
    "LinkedIn": FaLinkedin,
  }

  const sections = ['Inicio', 'Productos', 'Nosotros']

  return (
    <Box as="footer" boxSize="100%">
      <VStack gap={5} py={5} color={primaryFontColor}>
        <HStack align={'center'}>
          {companyLinks.map((link, i) => (
            <Link key={i} href={link.link} boxSize={'2.2rem'}>
              <Icon as={links[link.social]} boxSize={'full'}/>
            </Link>
          ))}
        </HStack>
        <HStack gap={10} >
            {sections.map((section, i) => (
              <Text fontSize={'xl'} as={'a'} href={`#${section}`} key={i}>{section}</Text>
            ))}
        </HStack>
        <Text color={secondaryFontColor} textAlign={'center'}>Copyright © 2024 All rights reserved by Chemical Group</Text>
      </VStack>
    </Box>
  );
}
