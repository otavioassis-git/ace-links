import { Navigate, Route, Routes } from "react-router";
import { LinkTreeWrapper } from "../pages/LinkTree/LinkTreeWrapper";
import { EditableLinkTreeWrapper } from "../pages/EditableLinkTree/EditableLinkTreeWrapper";

// Main Route: /user

export const LinkTreeRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/" />} />
      <Route path="/:username" element={<LinkTreeWrapper />} />
      <Route path="/:username/edit" element={<EditableLinkTreeWrapper />} />
    </Routes>
  );
};
