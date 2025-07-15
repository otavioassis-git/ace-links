import { Route } from "react-router";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";

export const AuthRouter = (
  <>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </>
);
