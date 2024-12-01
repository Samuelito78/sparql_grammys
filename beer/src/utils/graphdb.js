// src/utils/graphdb.js
const GRAPHDB_URL = "http://localhost:7200/repositories/grammys-sparql";

export async function executeSparqlQuery(query) {
  const headers = {
    "Content-Type": "application/sparql-query",
    Accept: "application/sparql-results+json",
  };

  const response = await fetch(GRAPHDB_URL, {
    method: "POST",
    headers,
    body: query,
  });

  if (!response.ok) {
    throw new Error(`GraphDB request failed: ${response.statusText}`);
  }

  return response.json();
}
