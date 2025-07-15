import { createContext, useContext, useEffect, useState } from "react";

type LoginContextProps = {
  user?: User;
  setUser: (value?: User) => void;
};

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUserState] = useState<User>();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUserState(JSON.parse(user));
    }
  }, []);

  const setUser = (value?: User) => {
    if (!value) sessionStorage.removeItem("user");
    else sessionStorage.setItem("user", JSON.stringify(value));
    setUserState(value);
  };

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
