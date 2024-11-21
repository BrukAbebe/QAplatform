import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (true) {
      case location.pathname === "/":
        document.title = "Home - QA Platform";
        break;
      case location.pathname === "/signin":
        document.title = "Sign In - QA Platform";
        break;
      case location.pathname === "/questions":
        document.title = "Questions - QA Platform";
        break;
      case location.pathname.startsWith("/questions/"):
        document.title = "Question Details - QA Platform";
        break;
      case location.pathname === "/ask":
        document.title = "Ask a Question - QA Platform";
        break;
      default:
        document.title = "QA Platform";
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
