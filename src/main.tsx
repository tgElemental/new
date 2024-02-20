import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import {
  AppShell,
  Center,
  DirectionProvider,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { clarity } from "react-microsoft-clarity";
import Nav from "./components/Nav.tsx";
import { MemoryRouter as Router } from "react-router-dom";

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
          <AppShell header={{ height: 80 }} footer={{ height: 30 }}>
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
            <AppShell.Main pt="80" pr={"xs"} pl={"xs"} pb="0" bg={"#c3b091"}>
              <App />
            </AppShell.Main>
            <AppShell.Footer>
              <Center
                h="100%"
                style={{
                  background: "linear-gradient(180deg, #0e87cc  30%, #c3b091)",
                  color: "white",
                  fontWeight: 100,
                }}
              >
                بازی عناصر | ©️ 1402
              </Center>
            </AppShell.Footer>
          </AppShell>
        </Router>
      </MantineProvider>
    </DirectionProvider>
  </React.StrictMode>,
);
