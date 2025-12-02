import { Route, Routes } from "react-router";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
