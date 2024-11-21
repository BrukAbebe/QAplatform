import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token } = useAuth();

  return (
    <Box
      height="100vh"
      bgImage="url('/assets/img/bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      color="whiteAlpha.900"
    >
      <Heading color="orange.600" as="h2" size="xl" mb={4}>
        Welcome to the Q&A Platform!
      </Heading>
      <Text fontWeight="bold" color={"white"} fontSize="lg" mb={6}>
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
          size="lg"
        >
          Get Started
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
