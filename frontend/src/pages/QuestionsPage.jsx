import React, { useEffect, useState } from "react";
import {
  VStack,
  Heading,
  Button,
  Box,
  Avatar,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import QuestionList from "../components/Question/QuestionList";
import { fetchQuestions } from "../services/questionService";
import CustomButton from "../components/Button/CustomButton";
import ScrollToTopButton from "../components/Button/ScrollToTopButton";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    navigate("/ask");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <VStack
      spacing={2}
      p={{ base: 4, md: 6, lg: 8 }}
      maxW={{ base: "95%", md: "80%", lg: "1200px" }}
      mx="auto"
      mt={{ base: "80px", md: "100px" }}
      w="full"
      minH="100vh"
    >
      {user && (
        <HStack spacing={4} flexWrap="wrap" justifyContent="center">
          <Avatar
            size={{ base: "sm", md: "md" }}
            name={user.firstName}
            icon={<FaUserAlt />}
          />
          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            color="gray.800"
            fontWeight="semibold"
          >
            Welcome,{" "}
            <Text
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
              as="span"
              color="teal.500"
            >
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase()}!
            </Text>
          </Heading>
        </HStack>
      )}

      <HStack
        spacing={{ base: 2, md: 4 }}
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Heading
          as="h3"
          size={{ base: "md", md: "md" }}
          color="gray.700"
          textAlign="left"
        >
          List of Questions
        </Heading>
        <CustomButton onClick={handleAskQuestionClick} ml={[2, 4]}>
          Ask a Question
        </CustomButton>
      </HStack>

      <Box width="100%">
        <QuestionList questions={questions} />
      </Box>

      <ScrollToTopButton onClick={scrollToTop} />
    </VStack>
  );
};

export default QuestionsPage;