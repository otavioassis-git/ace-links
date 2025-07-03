import { LinkTreeProvider } from "../hooks/LinkTreeHook";
import { LinkTree } from "./LinkTree/LinkTree";

export const LinkTreeWrapper: React.FC = () => {
  return (
    <LinkTreeProvider>
      <LinkTree />
    </LinkTreeProvider>
  );
};
