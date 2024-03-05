import App from './App.tsx';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import {
  AppShell,
  Container,
  DirectionProvider,
  Flex,
  Indicator,
  MantineProvider,
  UnstyledButton,
  createTheme,
  rem,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Nav from './components/Nav.tsx';
import { Link, MemoryRouter as Router } from 'react-router-dom';
import {
  IconBrandAppleArcade,
  IconChartBar,
  IconHome2,
  IconInfoOctagonFilled,
  IconPackage,
} from '@tabler/icons-react';
import useUser from './hooks/useUser.tsx';

const theme = createTheme({
  fontFamily: 'Vazirmatn UI FD',
  defaultGradient: { to: '#c3b091', from: '#0e87cc', deg: 45 },
  primaryColor: 'cyan',
});
export const Wrapper = () => {
  const user = useUser();
  const allelements =
    user.user.earth + user.user.fire + user.user.water + user.user.wind;
  return (
    <DirectionProvider initialDirection="rtl">
      <MantineProvider defaultColorScheme="light" theme={theme}>
        <Notifications />
        <Router>
          <Container size={'xs'} bg={'#c3b091'}>
            <AppShell
              header={{ height: 40 }}
              footer={{ height: 60 }}
              withBorder={false}
            >
              <AppShell.Header
                p="10"
                style={{
                  background: 'linear-gradient(180deg, #0e87cc  30%, #c3b091)',
                  color: 'white',
                  fontWeight: 100,
                }}
              >
                <Nav />
              </AppShell.Header>
              <AppShell.Main
                pt="40"
                pr={'xs'}
                pl={'xs'}
                pb="60"
                mb="60"
                bg={'#c3b091'}
              >
                <App />
              </AppShell.Main>
              <AppShell.Footer>
                <Flex
                  mih={60}
                  bg="#c3b091"
                  gap="xs"
                  justify="center"
                  align="center"
                  direction="row"
                  // wrap="wrap"
                >
                  <Link to={'/'}>
                    <UnstyledButton
                      mr={'xs'}
                      ml={'xs'}
                      style={{ textAlign: 'center', color: 'white' }}
                    >
                      <IconHome2 style={{ width: rem(24), height: rem(24) }} />
                      <br />
                      شروع
                    </UnstyledButton>
                  </Link>

                  <Link to={'/elements'}>
                    <Indicator
                      inline
                      color="red"
                      position="top-start"
                      size={20}
                      withBorder
                      label={allelements}
                    >
                      <UnstyledButton
                        mr={'xs'}
                        ml={'xs'}
                        style={{ textAlign: 'center', color: 'white' }}
                      >
                        <IconPackage
                          style={{ width: rem(24), height: rem(24) }}
                        />
                        <br />
                        عناصر
                      </UnstyledButton>
                    </Indicator>
                  </Link>

                  <Link to={'/game'}>
                    <Indicator label="آزمایشی" position="top-start" size={16}>
                      <UnstyledButton
                        mr={'xs'}
                        ml={'xs'}
                        style={{ textAlign: 'center', color: 'white' }}
                      >
                        <IconBrandAppleArcade
                          style={{ width: rem(24), height: rem(24) }}
                        />
                        <br />
                        بازی
                      </UnstyledButton>
                    </Indicator>
                  </Link>

                  <Link to={'/ranking'}>
                    <UnstyledButton
                      mr={'xs'}
                      ml={'xs'}
                      style={{ textAlign: 'center', color: 'white' }}
                    >
                      <IconChartBar
                        style={{ width: rem(24), height: rem(24) }}
                      />
                      <br />
                      رده بندی
                    </UnstyledButton>
                  </Link>

                  <Link to={'/help'}>
                    <UnstyledButton
                      mr={'xs'}
                      ml={'xs'}
                      style={{ textAlign: 'center', color: 'white' }}
                    >
                      <IconInfoOctagonFilled
                        style={{ width: rem(24), height: rem(24) }}
                      />
                      <br />
                      راهنما
                    </UnstyledButton>
                  </Link>
                </Flex>
              </AppShell.Footer>
            </AppShell>
          </Container>
        </Router>
      </MantineProvider>
    </DirectionProvider>
  );
};
