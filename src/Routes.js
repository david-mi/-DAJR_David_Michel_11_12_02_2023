import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:userId" element={<Profile />} />
  </Routes>
);