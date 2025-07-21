import { createContext, useContext, useEffect, useState } from "react";

type EditableLinkTreeContextProps = {
  data?: LinksResponse;
  setData: React.Dispatch<React.SetStateAction<LinksResponse | undefined>>;
};

const EditableLinkTreeContext = createContext<EditableLinkTreeContextProps>(
  {} as EditableLinkTreeContextProps
);

export const EditableLinkTreeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<LinksResponse>();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <EditableLinkTreeContext.Provider value={{ data, setData }}>
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
