import { primaryColor, primaryFontColor } from '@/colorConstants.json';
import { Suspense, lazy, useEffect } from 'react';
import {
  Divider,
  Heading,
  Show,
  SlideFade,
  Spinner,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import productsData from '@/mocks/productsData.json';
import PropTypes from 'prop-types';
import useNearScreen from '@/hooks/useNearScreen';

// const EmblaCarousel = lazy(() => import('@/components/EmblaCarousel'));

const ProductsList = lazy(() => import('@/components/ProductsList'));

// const ProductCard = lazy(() => import('@/components/ProductCard'));

export default function Products({ lan, id }) {
  const { isNearScreen, fromRef } = useNearScreen();
  const { isOpen, onOpen } = useDisclosure();
  // const slidesToScroll = 3;
  
  useEffect(() => {
    if (isNearScreen) onOpen();
  });
  return (
    <SlideFade
      in={isOpen}
      offsetY='50px'
      transition={{ enter: { duration: 0.8 } }}
    >
      <VStack
        height='auto'
        id={id}
        px={{ base: '5%', sm: '5%', '2xl': '5%' }}
        py={{ base: '2rem', '2xl': '5%' }}
        align={'center'}
        justify={'center'}
        overflowX={'hidden'}
        ref={fromRef}
        userSelect={'none'}
      >
        <Heading
          as='h2'
          w='12rem'
          textAlign={'center'}
          mb={5}
          color={primaryFontColor}
        >
          {lan === 'es' ? 'Productos' : 'Products'}
          <Divider
            mt={2}
            borderBottom={'5px solid'}
            borderBottomColor={primaryColor}
            borderRadius={'full'}
          />
        </Heading>
        <Suspense fallback={<Spinner />}>
          <Show above='2xl'>
            <ProductsList lan={lan} products={productsData[lan]} />
          </Show>
          {/* Show on mobile and small screens */}
          <Show below='2xl'>
            <ProductsList lan={lan} products={productsData[lan]} />
            {/* {productsData[lan].length <= slidesToScroll + 1 ? (
              <ProductsList lan={lan} products={productsData[lan]} />
            ) : (
              // <EmblaCarousel
              //   options={{ slidesToScroll }}
              //   gap='2rem'
              //   p={{ px: { base: '.5rem', sm: '1rem' }, py: '1rem' }}
              //   arrowOptions={{
              //     color: primaryColor,
              //     separation: '-3rem',
              //   }}
              //   dotsOptions={{ color: primaryColor, positionFromTop: '100%' }}
              // >
              //   {productsData[lan].map((product, i) => (
              //     <ProductCard
              //       key={i}
              //       product={product}
              //       flex='0 0 fit-content'
              //     />
              //   ))}
              // </EmblaCarousel>
            )} */}
          </Show>
        </Suspense>
      </VStack>
    </SlideFade>
  );
}

Products.propTypes = {
  lan: PropTypes.oneOf(['es', 'en']),
  id: PropTypes.string.isRequired,
};
