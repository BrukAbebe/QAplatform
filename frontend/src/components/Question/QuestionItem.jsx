import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  Avatar,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const QuestionItem = ({ question }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuestionClick = () => {
    navigate(`/questions/${question._id}`);
  };

  return (
    <Box
      borderBottom="1px solid"
      borderColor="orange.200"
      mb={{ base: 2, md: 4 }}
      boxShadow="xs"
      position="relative"
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      onClick={handleQuestionClick}
      maxW="100%"
      w="full"
      mx="auto"
      p={{ base: 4, md: 6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VStack align="start" spacing={4}>
        <Heading
          size={{ base: "sm", md: "md" }}
          color="gray.700"
          textAlign="left"
          isTruncated
        >
          {question.title}
        </Heading>

        <HStack spacing={4} flexWrap="wrap">
          <Avatar
            size="sm"
            name={question.user.username}
            icon={<FaUserAlt />}
          />
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Asked by: {question.user.username}
          </Text>
        </HStack>

        <Badge colorScheme="teal" fontSize={{ base: "0.6em", md: "0.7em" }}>
          {question.category}
        </Badge>

        {isHovered && (
          <Text
            color="teal.500"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            Click to See Answer
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default QuestionItem;
