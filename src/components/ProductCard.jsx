import { primaryColor, secondaryColor } from '@/colorConstants.json';
import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import LinkButton from './LinkButton';

export default function ProductCard({ product }) {
  return (
    <Card
      h={'inherit'}
      aspectRatio={'3/4'}
      transition={'all 0.2s ease'}
      borderRadius={'none'}
      boxShadow='lg'
      color={'white'}
      overflow={'clip'}
      flex={1}
      data-group
      _hover={{
        flex: 2,
      }}
    >
      <CardBody
        h={'inherit'}
        position={'relative'}
        overflow={'clip'}
        p={0}
        // borderRadius='3xl'
      >
        <Image
          src={product.imgUrl}
          alt={product.name}
          loading='lazy'
          w={'full'}
          h={'full'}
          objectFit={'cover'}
        />
        <Text
          fontSize={'xl'}
          fontWeight={'semibold'}
          pos={'absolute'}
          bottom={0}
          left={'100%'}
          p={'.4rem 1rem'}
          // w={'auto'}
          whiteSpace={'pre'}
          transform={'rotate(-90deg)'}
          transformOrigin={'bottom left'}
          bg={secondaryColor}
          color={'white'}
          _groupHover={{
            opacity: 0
          }}
        >
          {product.name}
        </Text>
        <Flex
          backdropFilter='blur(5px)'
          bg='rgba(0, 0, 0, 0.4)'
          h={'inherit'}
          w='100%'
          p={5}
          top={'0'}
          opacity={0}
          position={'absolute'}
          direction='column'
          gap={{ base: '1rem', sm: '3' }}
          textAlign={'center'}
          transition={'opacity .4s ease, blur .3s ease'}
          _groupHover={{
            opacity: 1,
          }}
        >
          <Heading size={'md'} fontWeight={'semibold'} textAlign={'start'}>
            {product.name}
          </Heading>
          <Text fontSize='sm' textAlign={'start'} flex={'20%'}>
            {product.description}
          </Text>
          <LinkButton
            link={product.link}
            color={'white'}
            _hover={{
              color: primaryColor,
              bg: 'white',
              borderColor: 'white'
            }}
          />
        </Flex>
      </CardBody>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    link: PropTypes.string,
  }),
  flex: PropTypes.string,
};
