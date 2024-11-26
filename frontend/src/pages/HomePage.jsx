import React from "react";
import { Box, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token } = useAuth();

  const bg = useBreakpointValue({
    base: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8))",
    sm: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8))",
    md: "url('/assets/img/bg.jpg')",
  });

  return (
    <Box
      height="100vh"
      bg={bg}
      bgSize="cover"
      bgPosition="center"
      bgAttachment={{ base: "scroll", md: "fixed" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      color="whiteAlpha.900"
      px={{ base: 4, sm: 6, md: 8 }}
    >
      <Heading
        color="orange.600"
        as="h2"
        size={{ base: "lg", sm: "xl", md: "2xl" }}
        mb={{ base: 3, sm: 4, md: 6 }}
      >
        Welcome to the Q&A Platform!
      </Heading>
      <Text
        fontWeight="bold"
        color={"white"}
        fontSize={{ base: "md", sm: "lg", md: "xl" }}
        mb={{ base: 4, sm: 6, md: 8 }}
        maxWidth="80%"
      >
        Our platform allows users to ask questions and get answers from the
        community. Sign in to ask your own questions, or browse existing
        questions to find answers.
      </Text>
      {!token && (
        <Button
          as={RouterLink}
          to="/signin"
          bg="#FE8402"
          _hover={{ bg: "#fd7300" }}
          color="white"
          size={{ base: "md", sm: "lg" }}
          px={{ base: 6, sm: 8 }}
        >
          Get Started
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
