"use client";

import { useState } from "react";

export default function QueryGraphDB() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const executeQuery = async () => {
    try {
      const response = await fetch("/api/graphdb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error executing query:", error);
    }
  };

  return (
    <div>
      <textarea
        rows={5}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Le SQL ici mon salaud"
      />
      <button onClick={executeQuery}>Ca test en balle</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
