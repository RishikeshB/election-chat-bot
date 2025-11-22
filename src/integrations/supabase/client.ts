// Replaces: supabase client auto-generated file
// You now call your server directly via HTTP instead of supabase-js.

const BASE_URL = "https://84c1rl6p-8000.inc1.devtunnels.ms";

// Generic JSON helper
async function http<T>(
  path: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: unknown
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

// ---- Example API wrappers ----

// Send profile + question (your example payload)
export function askLLM(payload: {
  profile: any;
  question: string;
}) {
  return http("/ask", "POST", payload);
}

// GET something
export function getSomething(id: string) {
  return http(`/item/${id}`, "GET");
}

// POST something generic
export function createSomething(data: any) {
  return http(`/item`, "POST", data);
}

export const api = {
  askLLM,
  getSomething,
  createSomething
};
