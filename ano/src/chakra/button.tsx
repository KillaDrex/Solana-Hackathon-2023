import { defineStyleConfig } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    fontSize: "14",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "brand.100",
      _hover: {
        bg: "blue.400",
      },
      height: "49px",
      width: "135px",
    },
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
});
