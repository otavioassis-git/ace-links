import { createContext, useContext, useState } from "react";

type EditableLinkTreeContextProps = {
  data?: LinksResponse;
  setData: React.Dispatch<React.SetStateAction<LinksResponse | undefined>>;
  isError: boolean;
  setErrors: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditableLinkTreeContext = createContext<EditableLinkTreeContextProps>(
  {} as EditableLinkTreeContextProps
);

export const EditableLinkTreeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<LinksResponse>();
  const [isError, setErrors] = useState<boolean>(false);

  return (
    <EditableLinkTreeContext.Provider
      value={{ data, setData, isError, setErrors }}
    >
      {children}
    </EditableLinkTreeContext.Provider>
  );
};

export const useEditableLinkTree = () => {
  const context = useContext(EditableLinkTreeContext);
  if (context === undefined) {
    throw new Error(
      "useEditableLinkTree must be used within a LinkTreeProvider"
    );
  }
  return context;
};
