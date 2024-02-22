import {
  Text,
  Button,
  Paper,
  Title,
  useMantineTheme,
  Group,
  Container,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./HeroTitle.module.css";
import { IconHeartHandshake } from "@tabler/icons-react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best forests to visit in North America",
    category: "آب",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
    category: "باد",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "خاک",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
    category: "آتش",
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className="card"
      m={10}
      h={"300"}
    >
      <div>
        <Text className="category" size="xs">
          {category}
        </Text>
        <Title order={3} className="title">
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        ادامه
      </Button>
    </Paper>
  );
}
function HomePage() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={"xs"} className={classes.inner}>
          <h2 className={classes.title}>
            این بازی بر اساس چهار عنصر
            <br />
            <Text
              ta="center"
              component="span"
              variant="gradient"
              gradient={{ to: "#0e87cc", from: "#c3b091" }}
              inherit
            >
              آب، باد، آتش و خاک
            </Text>
            <br />
            انجام می‌شود.
          </h2>

          <Text className={classes.description} color="dimmed">
            آب
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={<IconHeartHandshake size={20} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: "xl", sm: 2 }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        dir="rtl"
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}

export default HomePage;
