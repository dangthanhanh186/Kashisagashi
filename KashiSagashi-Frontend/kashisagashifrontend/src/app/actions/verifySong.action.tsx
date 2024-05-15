"use server";

export default async function verifySongAction(Name: string, token: string) {
  const res = await fetch(`${process.env.BASE_URL}/song/verified`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      Name: Name,
    }),
  });
  return res.json();
}
