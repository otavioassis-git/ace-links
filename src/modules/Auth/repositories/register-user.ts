import axios from "axios";

export const registerUser = async (
  payload: RegisterRequest
): Promise<RegisterResponse> => {
  const { data } = await axios.post(
    `http://localhost:8080/auth/register`,
    payload
  );
  return data;
};
