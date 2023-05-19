import { headers } from "./base.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getSkills = async () => {
  try {
    const res = await fetch(`${API_URL}/skills`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
