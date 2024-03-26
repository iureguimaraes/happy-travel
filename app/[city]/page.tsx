import Header from "@/components/Header";
import { data } from "@/data/data.js";
import Link from "next/link";
import { Key } from "react";

export default async function City({ params }: any) {
  const city = params.city.toUpperCase();
  const cityUpper = city?.replace(/-/g, " ").toUpperCase();

  const contentCity = data.filter(
    (obj: { [x: string]: any }) =>
      obj["city"].toString().toLowerCase() == cityUpper.toString().toLowerCase()
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal mb-14">
      <Header city={params.city} />

      <div className="container px-8 md:px-40 transition duration-300">
        <h2 className="text-slate-800 font-sans text-bold text-4xl md:text-5xl antialiased font-bold mt-10 mb-7">
          {cityUpper}
        </h2>

        {contentCity[0]["content"]?.map(
          (cont: string, index: Key | null | undefined) => {
            return (
              <p
                key={index}
                className="font-serif text-slate-600 mb-5 text-md md:text-lg text-justify"
              >
                {cont}
              </p>
            );
          }
        )}

        <div className="flex justify-center mt-6">
          <Link
            className="rounded bg-cyan-500 px-8 py-2 text-white inline-block hover:bg-cyan-700 transition duration-300"
            href="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
