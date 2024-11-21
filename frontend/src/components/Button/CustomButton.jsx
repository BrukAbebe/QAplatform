import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <ChakraButton
      onClick={onClick}
      bg="#FE8402"
      color="white"
      size={{ base: "xs", md: "sm" }}
      padding={{ base: "0.25rem 0.5rem", md: "0.5rem 1rem" }}
      fontSize={{ base: "xs", md: "sm" }}
      _hover={{ bg: "orange.500" }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
