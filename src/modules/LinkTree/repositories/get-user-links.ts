import axios from "axios";

export const getUserLinks = async (
  username: string
): Promise<LinksResponse> => {
  const { data } = await axios.get(`http://localhost:8080/${username}/links`);
  return data;
};
