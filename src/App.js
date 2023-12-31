import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";
import "./App.css";

import Banner from "./components/navbar/Banner";
import { useTheme } from "./context/ThemeContext";

import HomePage from "./pages/homepage/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Alert from "./components/alert/Alert";
import Main from "./pages/courses/Main";
import VideoPage from "./pages/video/VideoPage";
import Course from "./pages/course/Course";
import Cart from "./pages/cart/Cart";

// import { ChakraProvider } from "@chakra-ui/react";

// import QuestionSolutionPage from "./components/Questions/QuestionSolutionPage";

function App() {
  const { theme } = useTheme();
  return (
    <div id={theme}>
      {/* <Banner /> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/quiz" element={<Introduce />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/quiz/:collection" element={<Quiz />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/courses" element={<Main />} />
          <Route exact path="/video/:id" element={<VideoPage />} />
          <Route exact path="/course/:id" element={<Course />} />
          <Route path="/cart/:id?" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          {/* <Route
            exact
            path="/question/:id"
            element={<QuestionSolutionPage />}
          /> */}
        </Routes>
      </Router>

      <Alert />
    </div>
  );
}

export default App;
