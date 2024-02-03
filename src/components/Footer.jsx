import { Box, VStack, HStack, Text, Icon, Link } from "@chakra-ui/react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai';
import companyLinks from '../mocks/companyLinks.json';

export function Footer() {

  const links = {
    "Facebook": AiOutlineFacebook,
    "Instagram": AiOutlineInstagram,
    "WhatsApp": AiOutlineWhatsApp,
    "LinkedIn": AiOutlineLinkedin,
  }

  const sections = ['Inicio', 'Productos', 'Nosotros']

  return (
    <Box as="footer" boxSize="100%">
      <VStack gap={5} py={5} color={'gray.700'}>
        <HStack align={'center'}>
          {companyLinks.map((link, i) => (
            <Link key={i} href={link.link} boxSize={'2rem'}>
              <Icon as={links[link.social]} boxSize={'full'}/>
            </Link>
          ))}
        </HStack>
        <HStack gap={10} >
            {sections.map((section, i) => (
              <Text fontSize={'xl'} as={'a'} href={`#${section}`} key={i}>{section}</Text>
            ))}
        </HStack>
        <Text color={'gray.500'} textAlign={'center'}>Copyright © 2024 All rights reserved by Chemical Group</Text>
      </VStack>
    </Box>
  );
}
