import React from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { signupSchema } from "../../validations/authValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/authService";

const SignupForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await signupUser(values);
      const { token, user } = response;

      login(token, user);
      navigate("/questions");
    } catch (error) {
      setErrors({ apiError: error.message });
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Box
            bg="white"
            p={8}
            borderRadius="md"
            shadow="lg"
            width="100%"
            maxWidth="500px"
            textAlign="center"
            mx="auto"
          >
            <HStack spacing={4} mb={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Field
                  as={Input}
                  name="firstName"
                  type="text"
                  id="firstName"
                  placeholder="first name"
                  variant="filled"
                  bg="gray.50"
                  _hover={{ bg: "gray.100" }}
                  _focus={{ bg: "white", borderColor: "blue.500" }}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={touched.lastName && errors.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Field
                  as={Input}
                  name="lastName"
                  type="text"
                  id="lastName"
                  placeholder="last name"
                  variant="filled"
                  bg="gray.50"
                  _hover={{ bg: "gray.100" }}
                  _focus={{ bg: "white", borderColor: "blue.500" }}
                />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
            </HStack>

            <FormControl isInvalid={touched.username && errors.username} mb={4}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Field
                as={Input}
                name="username"
                type="text"
                id="username"
                placeholder="username"
                variant="filled"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                _focus={{ bg: "white", borderColor: "blue.500" }}
              />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.email && errors.email} mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field
                as={Input}
                name="email"
                type="email"
                id="email"
                placeholder="email"
                variant="filled"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                _focus={{ bg: "white", borderColor: "blue.500" }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.password && errors.password} mb={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                name="password"
                type="password"
                id="password"
                placeholder="password"
                variant="filled"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                _focus={{ bg: "white", borderColor: "blue.500" }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            {errors.apiError && (
              <Text color="red.500" mb={4}>
                {errors.apiError}
              </Text>
            )}

            <Button
              type="submit"
              colorScheme="orange"
              width="full"
              isLoading={isSubmitting}
              loadingText="Signing Up"
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
