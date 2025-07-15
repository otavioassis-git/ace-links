import axios from "axios";

export const loginUser = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await axios.post(
    `http://localhost:8080/auth/login`,
    payload
  );
  return data;
};
