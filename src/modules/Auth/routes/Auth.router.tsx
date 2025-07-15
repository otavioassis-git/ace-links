import { Route } from "react-router";
import { Register } from "../pages/Register/Register";

export const AuthRouter = (
  <>
    <Route path="/register" element={<Register />} />
  </>
);
