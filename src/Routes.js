import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

export default () => (
  <Routes>
    <Route path="/profile/:userId" element={<Profile />} />
  </Routes>
);