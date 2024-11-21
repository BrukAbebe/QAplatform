import React from "react";
import {
  VStack,
  Heading,
  Text,
  Box,
  List,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AskQuestionForm from "../components/Question/AskQuestionForm";
import { createQuestion } from "../services/questionService";

const AskQuestionPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await createQuestion(values);
      actions.setSubmitting(false);
      navigate("/questions");
    } catch (error) {
      console.error("Error posting question:", error);
      actions.setSubmitting(false);
    }
  };

  return (
    <Box
      maxW={{ base: "95%", md: "80%", lg: "1200px" }}
      mt={{ base: "80px", md: "100px" }}
      mx="auto"
      p={{ base: 4, md: 6 }}
    >
      <VStack spacing={6} align="stretch" width="100%">
        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          textAlign="center"
          mb={4}
        >
          Ask a Question
        </Heading>

        <VStack spacing={4} align="center" px={4}>
          <Text fontSize={{ base: "sm", md: "lg" }} textAlign="center">
            Follow these instructions to write a good question:
          </Text>
          <OrderedList
            spacing={2}
            fontSize={{ base: "sm", md: "md" }}
            textAlign="left"
            width="100%"
            maxW="600px"
          >
            <ListItem>Summarize your problem in a one-line title.</ListItem>
            <ListItem>Describe your problem in more detail.</ListItem>
            <ListItem>Describe what you tried and expected to happen.</ListItem>
            <ListItem>Review your question and post it to the site.</ListItem>
          </OrderedList>
        </VStack>

        <Box as="section" mt={6}>
          <AskQuestionForm onSubmit={handleSubmit} />
        </Box>
      </VStack>
    </Box>
  );
};

export default AskQuestionPage;
