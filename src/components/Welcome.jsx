import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EmblaCarousel } from "./EmblaCarousel";
import { LinkButton } from "./LinkButton";

const slides = [
  {
    id: 1,
    title: "dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit quaerat a laudantium quia ut ipsa. Iure quos, quasi corrupti asperiores iusto dolorum omnis quae numquam mollitia totam, eveniet officiis.",
    link: "",
    imgUrl: "slide1.jpg",
  },
  {
    id: 2,
    title: "dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit quaerat a laudantium quia ut ipsa. Iure quos, quasi corrupti asperiores iusto dolorum omnis quae numquam mollitia totam, eveniet officiis.",
    link: "",
    imgUrl: "slide2.jpg",
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
            lg: "45% 55%",
          }}
          templateRows={{
            base: "1fr 1fr",
            lg: "1fr",
          }}
          key={slide.id}
          px={10}
          placeItems={"center"}
        >
          <GridItem area="info" align="center" ml={"15%"}>
            <Stack
              justify={"center"}
              textAlign={"start"}
              gap={10}
              p={"1.5rem"}
              bg={"#56d152"}
              borderRadius={"10px"}
              color={"white"}
            >
              <Heading as="h2" fontWeight={"semibold"} size="2xl">
                {slide.title}
              </Heading>
              <Text>{slide.description}</Text>
              <LinkButton link={slide.link} />
            </Stack>
          </GridItem>
          <GridItem area="img" w="70%">
            <AspectRatio width={"100%"} ratio={1 / 1}>
              <Image
                src={`images/${slide.imgUrl}`}
                objectFit={"cover"}
                style={{ borderRadius: "100%" }}
              ></Image>
            </AspectRatio>
          </GridItem>
        </Grid>
      ))}
    </EmblaCarousel>
  );
}
