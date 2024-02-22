import { Text, Button, Group, Container } from "@mantine/core";
import classes from "./HeroTitle.module.css";
import { IconHeartHandshake } from "@tabler/icons-react";
function HomePage() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={"xs"} className={classes.inner}>
          <h2 className={classes.title}>
            این بازی بر اساس چهار عنصر طبیعت است :
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
          </h2>

          <Text ta="justify" className={classes.description} color="dimmed">
            جهان در آستانه نابودی قرار گرفته؛ تعادل عناصر به هم ریخته و شما،
            قهرمانان نجات دهنده‌ی دنیا هستید، رازهای عناصر را کشف کنید، درختان
            جدید پرورش دهید و سرسبزی و تعادل را به جهان برگردانید.
          </Text>
          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              راهنما
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={<IconHeartHandshake size={20} />}
            >
              بازی
            </Button>
          </Group>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
