import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  VStack,
  Heading,
  Text,
  Box,
  Divider,
  Flex,
  Avatar,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import {
  fetchQuestionDetails,
  fetchAnswers,
  submitAnswer,
} from "../services/questionService";
import AnswerForm from "../components/Answer/AnswerForm";
import CustomButton from "../components/Button/CustomButton";
import ScrollToTopButton from "../components/Button/ScrollToTopButton";
import { FaUserAlt } from "react-icons/fa";

const QuestionAndAnswerPage = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const answerFormRef = useRef(null);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      try {
        const questionData = await fetchQuestionDetails(questionId);
        setQuestion(questionData);
      } catch (err) {
        setError(err.message);
      }
    };

    const loadAnswers = async () => {
      try {
        const answerData = await fetchAnswers(questionId);
        setAnswers(answerData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadQuestionDetails();
    loadAnswers();
  }, [questionId, answers]);

  const handleAnswerSubmit = async (answerData) => {
    if (answerData.content.trim()) {
      setIsSubmitting(true);
      setError(null);

      try {
        const newAnswer = await submitAnswer(questionId, {
          content: answerData.content,
        });

        if (newAnswer?.success) {
          setAnswers((prevAnswers) => [...prevAnswers, newAnswer.data]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const scrollToAnswerForm = () => {
    if (answerFormRef.current) {
      answerFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <VStack
      spacing={8}
      align="flex-start"
      justify="center"
      mt={{ base: "80px", md: "100px" }}
      maxW={{ base: "95%", md: "80%", lg: "1200px" }}
      mx="auto"
      p={{ base: 4, md: 6, lg: 8 }}
      w="full"
      minH="80vh"
    >
      {error && (
        <Alert status="error" variant="solid" borderRadius="md" mb={4}>
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setError(null)}
          />
        </Alert>
      )}

      {question && (
        <>
          <Flex direction="column" align="center" justify="center" width="100%">
            <Flex align="baseline" justify="center">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                Question:
              </Text>
              <Heading
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                color="#2B6CB0"
                ml={2}
              >
                {question.title}
              </Heading>
            </Flex>
          </Flex>

          <Box textAlign="center">
            <Text color="#4A5568" fontWeight="bold">
              {question.description}
            </Text>
          </Box>

          <Divider />

          <Box width="100%" p={4}>
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" mb={4}>
                Answers
              </Text>
              <CustomButton onClick={scrollToAnswerForm}>
                Add Answer
              </CustomButton>
            </Flex>

            <Flex direction="column" gap={6} width="100%">
              {answers.length > 0 ? (
                answers.map((ans) => (
                  <Box
                    key={ans._id}
                    p={4}
                    borderBottomWidth="1px"
                    borderColor="orange.200"
                  >
                    <Flex align="center" mb={3}>
                      <Avatar
                        size="sm"
                        name={ans.user.username}
                        icon={<FaUserAlt />}
                      />
                      <Text fontWeight="bold" ml={3}>
                        {ans.user.username}
                      </Text>
                    </Flex>
                    <Text>{ans.content}</Text>
                  </Box>
                ))
              ) : (
                <Text color="gray.600">
                  No answers yet. Be the first to answer!
                </Text>
              )}
            </Flex>
          </Box>

          <Divider my={6} />

          <Box width="100%" mb="30px" ref={answerFormRef}>
            <AnswerForm
              onSubmit={handleAnswerSubmit}
              isSubmitting={isSubmitting}
            />
          </Box>
        </>
      )}

      <ScrollToTopButton onClick={scrollToTop} />
    </VStack>
  );
};

export default QuestionAndAnswerPage;
