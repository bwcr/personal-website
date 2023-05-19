import { headers } from "./base.service";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getHomepage = async () => {
  try {
    const res = await fetch(`${API_URL}/homepage`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
