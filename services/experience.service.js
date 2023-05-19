import { headers } from "./base.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getExperiences() {
  const sort = "sort=start_date:desc";
  try {
    const res = await fetch(`${API_URL}/experiences?${sort}`, {
      headers: headers,
    });
    const data = await res.json();
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
