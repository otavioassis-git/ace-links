import { Navigate, Route } from "react-router";
import { LinkTreeWrapper } from "../pages/LinkTree/LinkTreeWrapper";
import { EditableLinkTreeWrapper } from "../pages/EditableLinkTree/EditableLinkTreeWrapper";

export const LinkTreeRouter = (
  <>
    <Route path="/user" element={<Navigate to="/" />} />
    <Route path="/user/:username" element={<LinkTreeWrapper />} />
    <Route path="/user/:username/edit" element={<EditableLinkTreeWrapper />} />
  </>
);
