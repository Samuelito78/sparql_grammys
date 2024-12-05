// src/app/api/graphdb/route.js
import { executeSparqlQuery } from "@/utils/graphdb";

export async function POST(req) {
  try {
    const { query } = await req.json();

    if (!query) {
      return new Response(
        JSON.stringify({ message: "Query is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await executeSparqlQuery(query);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
