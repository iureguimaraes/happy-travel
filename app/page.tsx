import Grid from "@/components/Grid";
import Header from "@/components/Header";
import { data } from "@/data/data.js";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />

      <div className="flex flex-col items-center font-sans text-gray-800 tracking-tight mt-10 mb-6">
        <h2 className="text-5xl antialiased font-bold">Discover</h2>
        <h3 className="text-lg py-1">Get inspiration for your next trip</h3>
      </div>

      <Grid citiesData={data} />
    </main>
  );
}
