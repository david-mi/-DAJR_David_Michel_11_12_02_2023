import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:userId" element={<Profile />} />
    <Route path="*" element={<ErrorPage message="Page non trouvée !" />} />
  </Routes>
);