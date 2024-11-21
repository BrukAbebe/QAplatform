import React from "react";
import { Button } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = ({ onClick }) => {
  return (
    <Button
      position="fixed"
      bottom={{ base: "15px", md: "20px" }}
      right={{ base: "15px", md: "20px" }}
      colorScheme="teal"
      onClick={onClick}
      borderRadius="full"
      padding="1rem"
      boxShadow="md"
      _hover={{ backgroundColor: "teal.600", transform: "scale(1.05)" }}
      _active={{ backgroundColor: "teal.700", transform: "scale(1)" }}
    >
      <FaChevronUp />
    </Button>
  );
};

export default ScrollToTopButton;
