import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { menuTheme } from "./menu";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#CCC8AA",
      900: "#222222",
    },
  },
  font: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: "#222222",
      },
    }),
  },
  components: {
    Button,
    Menu: menuTheme,
  },
});
