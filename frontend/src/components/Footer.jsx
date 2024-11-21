import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} textAlign="center">
      <Text fontSize="sm">
        © {new Date().getFullYear()} QA Answer Platform. All rights reserved. |
        Developed by Biruk Abebe
      </Text>
    </Box>
  );
};

export default Footer;
