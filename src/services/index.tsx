import axios from "axios";

export const serverRequest = async (url: string, page: number) => {
  return await axios.get(url, {
    params: { page },
  });
};
