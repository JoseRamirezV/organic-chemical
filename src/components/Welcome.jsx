import { Button, GridItem, Heading, Grid, Stack, Text } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import EmblaCarousel from "./EmblaCarousel";
import { Container } from "@chakra-ui/react";

const slides = [
  {
    id: 1,
    title: "dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit quaerat a laudantium quia ut ipsa. Iure quos, quasi corrupti asperiores iusto dolorum omnis quae numquam mollitia totam, eveniet officiis.",
    link: "",
    imgUrl: "1",
  },
  {
    id: 2,
    title: "dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit quaerat a laudantium quia ut ipsa. Iure quos, quasi corrupti asperiores iusto dolorum omnis quae numquam mollitia totam, eveniet officiis.",
    link: "",
    imgUrl: "2",
  },
];

export function Welcome() {
  return (
    <EmblaCarousel options={{ loop: true, duration: 30 }} h={100} w={100}>
      {slides.map((slide) => (
        <Grid
          templateAreas={{
            base: `'img' 'info'`,
            lg: `'info img'`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "40% 60%",
          }}
          templateRows={{
            base: "1fr 1fr",
            lg: "1fr",
          }}
          key={slide.id}
          boxSize={"100%"}
          bg={"green"}
          placeItems="center"
        >
          <GridItem area="info" placeContent="center">
            <Stack
              boxSize={"70%"}
              gap={10}
              justify={"center"}
            >
              <Heading>{slide.title}</Heading>
              <Text>{slide.description}</Text>
              <Button
                as="a"
                w={"10rem"}
                rounded="full"
                href={slide.link}
                variant={"outline"}
                rightIcon={<BsArrowRightCircle />}
              >
                Saber mas
              </Button>
            </Stack>
          </GridItem>
          <GridItem area="img">
            <Container h="90%" border="1px solid blue">
              <Heading>IMG {slide.imgUrl}</Heading>
            </Container>
          </GridItem>
        </Grid>
      ))}
    </EmblaCarousel>
  );
}
