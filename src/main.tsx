import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import {
  DirectionProvider,
  MantineProvider,
  createTheme,
  rem,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  headings: {
    fontWeight: "400",
    fontFamily: "Roboto",
    sizes: {
      h1: {
        fontWeight: "100",
        fontSize: rem(36),
        lineHeight: "1.4",
      },
      h2: { fontSize: rem(30), lineHeight: "1.5" },
      h6: { fontWeight: "900" },
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
      <MantineProvider theme={theme}>
        <NavigationProgress />
        <Notifications />
        <App />
      </MantineProvider>
    </DirectionProvider>
  </React.StrictMode>,
);
