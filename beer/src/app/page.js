// src/app/page.js
import QueryGraphDB from "./components/QueryGraphDB";

export default function Home() {
  return (
    <div>
        <main>
            <h1>Welcome to Next.js with GraphDB</h1>
            <QueryGraphDB />
        </main>
    </div>
  );
}
