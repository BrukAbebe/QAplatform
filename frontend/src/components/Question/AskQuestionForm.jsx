import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { questionValidationSchema } from "../../validations/questionValidation";
import CustomButton from "../Button/CustomButton";

const AskQuestionForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={questionValidationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        values,
      }) => (
        <Form>
          <VStack
            spacing={6}
            align="stretch"
            p={{ base: 4, sm: 6, md: 8 }}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            maxW="600px"
            mx="auto"
            mt={4}
            bg="white"
          >
            <FormControl isInvalid={errors.title && touched.title}>
              <Field
                as={Input}
                name="title"
                placeholder="Enter your question title"
                maxLength={200}
                mb={4}
                fontSize={{ base: "sm", md: "md" }}
                p={4}
                borderColor="gray.300"
                _hover={{ borderColor: "teal.500" }}
                _focus={{
                  borderColor: "teal.500",
                  boxShadow: "0 0 0 2px rgba(72, 187, 120, 0.6)",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description && touched.description}>
              <Field
                as={Textarea}
                name="description"
                placeholder="Describe your question in detail"
                maxLength={3000}
                mb={4}
                fontSize={{ base: "sm", md: "md" }}
                p={4}
                borderColor="gray.300"
                _hover={{ borderColor: "teal.500" }}
                _focus={{
                  borderColor: "teal.500",
                  boxShadow: "0 0 0 2px rgba(72, 187, 120, 0.6)",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>

            <CustomButton type="submit" isLoading={isSubmitting} mx="auto">
              Post Question
            </CustomButton>

            <Text fontSize="sm" color="gray.500" textAlign="center">
              Ensure your question is clear and concise. Include all relevant
              details to help others understand your issue.
            </Text>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default AskQuestionForm;
