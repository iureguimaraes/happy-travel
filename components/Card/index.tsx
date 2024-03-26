import Image from "next/image";
import Link from "next/link";

export default function Card({ city, content }: any) {
  const cityLower = city?.replace(/\s+/g, "-").toLowerCase();
  const imgUrl = `https://source.unsplash.com/random/300x200/?${cityLower}`;

  return (
    <div className="rounded-lg shadow-lg bg-gray-100 text-slate-700 font-sans">
      <div className="p-5 md:flex-col">
        <div className="flex md:flex-col">
          <Link href={`/${cityLower}`} className="flex-1">
            <Image
              className="rounded-lg"
              src={imgUrl}
              width={400}
              height={200}
              alt={city}
            />
          </Link>

          <div className="flex-1 pl-3 md:pl-0">
            <h4 className="text-lg md:text-2xl font-medium mt-1 md:mt-3">
              {city}
            </h4>
            <p className="line-clamp-2 sm:line-clamp-5 md:line-clamp-3 lg:line-clamp-2 text-slate-500 text-sm md:text-md my-1 md:my-3">
              {content}
            </p>
          </div>
        </div>

        <Link
          className="rounded bg-cyan-400 flex px-8 py-2 text-white mt-2 justify-center hover:bg-cyan-700 transition duration-300"
          href={`/${cityLower}`}
        >
          Explore the city
        </Link>
      </div>
    </div>
  );
}
