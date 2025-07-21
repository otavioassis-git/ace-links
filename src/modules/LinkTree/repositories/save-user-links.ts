import axios from "axios";

export const saveUserLinks = async (
  user: User,
  payload: UpdateUserLinksRequest
): Promise<any> => {
  const { data } = await axios.put(
    `http://localhost:8080/user/${user.id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  return data;
};
