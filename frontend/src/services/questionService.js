import questionApi from "../api/questionApi";

export const fetchQuestions = async () => {
  try {
    const response = await questionApi.get("/questions");
    return response.data.questions;
  } catch (error) {
    throw new Error("Unable to fetch questions. Please try again later.");
  }
};

export const createQuestion = async (questionData) => {
  try {
    const response = await questionApi.post(
      "/questions/question",
      questionData
    );
    return response.data.question;
  } catch (error) {
    throw new Error(
      "Failed to create the question. Please ensure all fields are filled out correctly."
    );
  }
};

export const fetchQuestionDetails = async (questionId) => {
  try {
    const response = await questionApi.get(`/questions/${questionId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(
      "Could not fetch question details. Please check if the question exists and try again."
    );
  }
};

export const fetchAnswers = async (questionId) => {
  try {
    const response = await questionApi.get(`/answers/${questionId}/answers`);
    return response.data.data || [];
  } catch (error) {
    throw new Error(
      "Could not fetch answers. Please check if the question exists and try again."
    );
  }
};

export const submitAnswer = async (questionId, answerData) => {
  try {
    const response = await questionApi.post(
      `/answers/${questionId}/answers`,
      answerData
    );
    return response.data.data;
  } catch (error) {
    throw new Error(
      "Failed to submit your answer. Please ensure your answer is not empty and try again."
    );
  }
};
