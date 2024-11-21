import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  Textarea,
  VStack,
  FormControl,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { answerValidationSchema } from "../../validations/answerValidation";
import CustomButton from "../Button/CustomButton";

const AnswerForm = ({ onSubmit, isSubmitting }) => {
  return (
    <Formik
      initialValues={{ content: "" }}
      validationSchema={answerValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <VStack
            spacing={6}
            align="stretch"
            p={{ base: 4, sm: 6, md: 8 }}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            maxW="850px"
            mx="auto"
            mt={4}
            bg="white"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#2B6CB0"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Write your answer for the above question:
            </Text>

            <FormControl isInvalid={errors.content && touched.content}>
              <Field
                as={Textarea}
                name="content"
                placeholder="Write your answer here..."
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
                value={values.content}
                resize="vertical"
                minHeight="150px"
              />
              <FormErrorMessage>{errors.content}</FormErrorMessage>
            </FormControl>

            <CustomButton type="submit" isLoading={isSubmitting} mx="auto">
              Post Answer
            </CustomButton>

            <Text fontSize="sm" color="gray.500" textAlign="center">
              Ensure your answer is clear and concise. Include all relevant
              details to help others understand your response.
            </Text>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default AnswerForm;
