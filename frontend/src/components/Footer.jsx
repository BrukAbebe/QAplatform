import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="white"
      py={{ base: 2, sm: 4 }}  
      textAlign="center"
    >
      <Text
        fontSize={{ base: "xs", sm: "sm", md: "md" }} 
      >
        © {new Date().getFullYear()} QA Answer Platform. All rights reserved. |
        Developed by Biruk Abebe
      </Text>
    </Box>
  );
};

export default Footer;
