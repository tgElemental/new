import { Text, Button, Group, Container } from '@mantine/core';
import classes from './HeroTitle.module.css';
import {
  IconBrandAppleArcade,
  IconHeartHandshake,
  IconInfoOctagonFilled,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <>
      <div className={classes.wrapper}>
        <Container size={'xs'} className={classes.inner}>
          <h2 className={classes.title}>
            این بازی بر اساس چهار عنصر طبیعت است :
            <br />
            <Text
              ta="center"
              component="span"
              variant="gradient"
              gradient={{ to: '#0e87cc', from: '#c3b091' }}
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
          <Group className={classes.controls} grow gap={'xs'}>
            <Link to={'/invite'}>
              <Button
                size="md"
                className={classes.control}
                variant="gradient"
                gradient={{ from: 'orange', to: 'black' }}
                leftSection={<IconHeartHandshake size={20} />}
              >
                دعوت
              </Button>
            </Link>

            <Link to={'/help'}>
              <Button
                size="md"
                className={classes.control}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                leftSection={<IconInfoOctagonFilled size={20} />}
              >
                راهنما
              </Button>
            </Link>

            <Link to={'/game'}>
              <Button
                size="md"
                variant="default"
                className={classes.control}
                leftSection={<IconBrandAppleArcade size={20} />}
              >
                بازی
              </Button>
            </Link>
          </Group>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
