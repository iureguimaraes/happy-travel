import Header from "@/components/Header";
import { data } from "@/data/data.js";
import Link from "next/link";
import { Key } from "react";

export default async function City({ params }: any) {
  const city = params.city.toUpperCase();
  const cityUpper = city?.replace(/-/g, " ").toUpperCase();

  const cityData = data.filter(
    (obj: { [x: string]: any }) =>
      obj["city"].toString().toLowerCase() == cityUpper.toString().toLowerCase()
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal mb-14">
      <Header city={params.city} />

      <div className="container px-8 md:px-40 transition duration-300">
        <Link href="/" className="flex w-32">
          <div className="flex py-6 text-sm text-slate-900 hover:text-slate-500 hover:text-ellipsis transition-colors duration-300 border rounded-lg gap-x-2 sm:w-auto">
            <svg
              className="w-5 h-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>Back to home</span>
          </div>
        </Link>

        <h2 className="text-slate-800 font-sans text-bold text-4xl md:text-5xl antialiased font-bold mb-3">
          {cityUpper}
        </h2>

        <div className="flex lg:items-center mb-6 md:mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#777"
            className="w-6 h-6 md:w-5 md:h-5 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
              clip-rule="evenodd"
            />
          </svg>

          <p className="text-gray-500 italic font-mono tracking-tight text-sm md:text-base">
            {cityData[0]["tags"]}
          </p>
        </div>

        {cityData[0]["content"]?.map(
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
