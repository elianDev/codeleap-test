import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="main" element={<MainPage />} />
    </Routes>
  );
};

export default Router;
