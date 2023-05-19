export const headers = new Headers();

headers.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);
