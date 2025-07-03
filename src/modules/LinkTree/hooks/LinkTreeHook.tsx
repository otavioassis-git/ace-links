import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

type LinkTreeContextProps = {
  data?: LinksResponse;
  isLoading: boolean;
};

const LinkTreeContext = createContext<LinkTreeContextProps>(
  {} as LinkTreeContextProps
);

export const LinkTreeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading } = useQuery<LinksResponse>({
    queryKey: ["USER_LINKS_DATA"],
  });

  return (
    <LinkTreeContext.Provider value={{ data, isLoading }}>
      {children}
    </LinkTreeContext.Provider>
  );
};

export const useLinkTree = () => {
  const context = useContext(LinkTreeContext);
  if (context === undefined) {
    throw new Error("useLinkTree must be used within a LinkTreeProvider");
  }
  return context;
};
