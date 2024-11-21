import React from "react";
import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Center height="100vh" flexDirection="column">
      <Box textAlign="center" p={6}>
        <Heading as="h1" size="2xl" mb={4}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" mb={6}>
          Sorry, the page you are looking for does not exist.
        </Text>
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Box>
    </Center>
  );
};

export default NotFoundPage;
