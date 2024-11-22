import React, { useState } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      minHeight="100vh"
      bg="gray.50"
      p={4}
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        shadow="lg"
        width="100%"
        maxWidth="500px"
        textAlign="center"
      >
        <Heading as="h1" size="lg" mb={6}>
          {isSignUp ? "Sign Up" : "Login"}
        </Heading>

        {isSignUp ? (
          <SignupForm setIsSignUp={setIsSignUp} />
        ) : (
          <LoginForm />
        )}

        <Text mt={4} color="gray.500">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <Button
                variant="link"
                colorScheme="orange"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                Login
              </Button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Button
                variant="link"
                colorScheme="orange"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                Sign Up
              </Button>
            </>
          )}
        </Text>
      </Box>
    </Flex>
  );
};

export default LandingPage;
