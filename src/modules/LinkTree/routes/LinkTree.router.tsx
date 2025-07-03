import { Navigate, Route } from "react-router";
import { LinkTreeWrapper } from "../pages/LinkTreeWrapper";

export const LinkTreeRouter = (
  <>
    <Route path="/user" element={<Navigate to="/" />} />
    <Route path="/user/:username" element={<LinkTreeWrapper />} />
  </>
);
