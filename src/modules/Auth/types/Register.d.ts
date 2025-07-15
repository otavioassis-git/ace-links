type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  role: "USER";
};

type RegisterResponse = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  token: string;
};
