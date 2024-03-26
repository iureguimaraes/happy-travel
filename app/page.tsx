import Grid from "@/components/Grid";
import Header from "@/components/Header";

import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal">
      <Header />

      <h2>Teste</h2>

      <Grid citiesData={data} />
    </main>
  );
}
