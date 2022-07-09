import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupConfirmationPage from "./Pages/SignupConfirmationPage";
import CreatePassword from "./Pages/CreatePasswordPage";

import HomePage from "./Pages/HomePage";
import SignupPage1 from "./Pages/sign-up-page/SignupPage1";
import SignupPage2 from "./Pages/sign-up-page/SignupPage2";
import SigninPage from "./Pages/SigninPage";
import ResetPage from "./Pages/reset-page/ResetPage";
import ResetPage2 from "./Pages/reset-page/ResetPage2";
import SigninConfirmationPage from "./Pages/SigninConfirmationPage";
import SigninCreatePassword from "./Pages/reset-page/SigninCreatePasswordPage";
import StudentDashboardPage from "./Pages/StudentDashboardPage";
import CourseRegistrationPage from "./Pages/CourseRegistrationPage";
import CoursePage from "./Pages/CoursePage";
import TimeTablePage from "./Pages/TimeTablePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage1 />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup2" element={<SignupPage2 />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/signin-createPassword" element={<SigninCreatePassword />} />
        <Route path="/Signup-confirmation" element={<SignupConfirmationPage />} />
        <Route path="/Signin-confirmation" element={<SigninConfirmationPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/reset2" element={<ResetPage2 />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/courseReg" element={<CourseRegistrationPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/time-table" element={<TimeTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
