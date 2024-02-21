import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import {
  AppShell,
  DirectionProvider,
  Flex,
  MantineProvider,
  UnstyledButton,
  createTheme,
  rem,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { clarity } from "react-microsoft-clarity";
import Nav from "./components/Nav.tsx";
import { Link, MemoryRouter as Router } from "react-router-dom";
import {
  IconBrandAppleArcade,
  IconChartBar,
  IconHome2,
  IconInfoOctagonFilled,
  IconPackage,
} from "@tabler/icons-react";

clarity.init("kzhxxy2ip7");
clarity.consent();
clarity.setTag("miniapp", "new");
const theme = createTheme({
  fontFamily: "Vazirmatn UI FD",
  defaultGradient: { to: "#c3b091", from: "#0e87cc", deg: 45 },
  headings: {
    fontFamily: "Vazirmatn UI FD",
    sizes: {
      h1: { fontWeight: "900" },
      h2: { fontWeight: "800" },
      h3: { fontWeight: "700" },
      h4: { fontWeight: "600" },
      h5: { fontWeight: "500" },
      h6: { fontWeight: "400" },
    },
  },
  primaryColor: "cyan",
  colors: {
    "ocean-blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DirectionProvider initialDirection="rtl">
      <MantineProvider defaultColorScheme="light" theme={theme}>
        <NavigationProgress />
        <Notifications />
        <Router>
          <AppShell header={{ height: 80 }} footer={{ height: 60 }}>
            <AppShell.Header
              p="10"
              style={{
                background: "linear-gradient(180deg, #0e87cc  30%, #c3b091)",
                color: "white",
                fontWeight: 100,
              }}
            >
              <Nav />
            </AppShell.Header>
            <AppShell.Main pt="80" pr={"xs"} pl={"xs"} pb="80" mb="80">
              <App />
            </AppShell.Main>
            <AppShell.Footer>
              <Flex
                mih={60}
                bg="rgba(0, 0, 0, .3)"
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                // wrap="wrap"
              >
                <Link to={"/"}>
                  <UnstyledButton
                    mr={"md"}
                    ml={"md"}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <IconHome2 style={{ width: rem(24), height: rem(24) }} />
                    <br />
                    شروع
                  </UnstyledButton>
                </Link>

                <Link to={"/elements"}>
                  <UnstyledButton
                    mr={"md"}
                    ml={"md"}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <IconPackage style={{ width: rem(24), height: rem(24) }} />
                    <br />
                    عناصر
                  </UnstyledButton>
                </Link>

                <Link to={"/game"}>
                  <UnstyledButton
                    mr={"md"}
                    ml={"md"}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <IconBrandAppleArcade
                      style={{ width: rem(24), height: rem(24) }}
                    />
                    <br />
                    بازی
                  </UnstyledButton>
                </Link>

                <Link to={"/elements"}>
                  <UnstyledButton
                    mr={"md"}
                    ml={"md"}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <IconChartBar style={{ width: rem(24), height: rem(24) }} />
                    <br />
                    رده بندی
                  </UnstyledButton>
                </Link>

                <Link to={"/help"}>
                  <UnstyledButton
                    mr={"md"}
                    ml={"md"}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <IconInfoOctagonFilled
                      style={{ width: rem(24), height: rem(24) }}
                    />
                    <br />
                    راهنما
                  </UnstyledButton>
                </Link>
              </Flex>
              {/* <Center
                h="100%"
                style={{
                  background: "linear-gradient(180deg, #0e87cc  30%, #c3b091)",
                  color: "white",
                  fontWeight: 100,
                }}
              >
                بازی عناصر | ©️ 1402
              </Center> */}
            </AppShell.Footer>
          </AppShell>
        </Router>
      </MantineProvider>
    </DirectionProvider>
  </React.StrictMode>,
);
