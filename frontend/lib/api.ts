const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export async function getHealth() {
  const response = await fetch(`${API_URL}/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Backend is unavailable");
  }

  return response.json();
}
