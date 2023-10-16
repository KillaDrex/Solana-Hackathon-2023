import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  button: {
    // this will style the MenuButton component

    color: "white",
  },
  list: {
    // this will style the MenuList component
    border: "none",
    bg: "#CCC8AA",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: "white",
    bg: "#CCC8AA",
    _hover: {
      bg: "#222222",
    },
    _focus: {
      bg: "#CCC8AA",
    },
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
