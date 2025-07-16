import { EditableLinkTreeProvider } from "../../hooks/EditableLinkTreeHook";
import { EditableLinkTree } from "./EditableLinkTree";

export const EditableLinkTreeWrapper: React.FC = () => {
  return (
    <EditableLinkTreeProvider>
      <EditableLinkTree />
    </EditableLinkTreeProvider>
  );
};
