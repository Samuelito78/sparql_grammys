// src/utils/graphdb.js
const GRAPHDB_URL = "http://Bonnet-de-bain.local:7200/repositories/TP1";

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
