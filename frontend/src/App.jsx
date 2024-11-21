import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import QuestionAndAnswerPage from "./pages/QuestionAndAnswerPage";
import AskPage from "./pages/AskQuestionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TitleUpdater from "./components/TitleUpdater";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <TitleUpdater />
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
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
