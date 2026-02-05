const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:8000/graphql";

export async function graphqlFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const params = new URLSearchParams({ query });
  if (variables) {
    params.set("variables", JSON.stringify(variables));
  }

  const response = await fetch(`${endpoint}?${params.toString()}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "force-cache",
    next: { tags: ["content"], revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? "GraphQL error");
  }

  return json.data as T;
}
