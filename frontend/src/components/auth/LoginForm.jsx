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
} from "@chakra-ui/react";
import { loginSchema } from "../../validations/authValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const { email, password } = values;
      const response = await loginUser(email, password);
      const { token, user } = response;

      login(token, user);
      navigate("/questions");
    } catch (error) {
      setErrors({ apiError: error.message });
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
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
              loadingText="Logging In"
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
