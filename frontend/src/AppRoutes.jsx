import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import QuestionAndAnswerPage from "./pages/QuestionAndAnswerPage";
import AskPage from "./pages/AskQuestionPage";
import NotFoundPage from "./pages/NotFoundPage";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<LandingPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/questions" element={<QuestionsPage />} />
      <Route
        path="/questions/:questionId"
        element={<QuestionAndAnswerPage />}
      />
      <Route path="/ask" element={<AskPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
