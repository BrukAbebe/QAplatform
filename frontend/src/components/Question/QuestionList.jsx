import React from "react";
import { VStack } from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions }) => {
  return (
    <VStack spacing={6} align="stretch" w={"100%"} mt={6}>
      {questions.map((question) => (
        <QuestionItem key={question._id} question={question} />
      ))}
    </VStack>
  );
};

export default QuestionList;
