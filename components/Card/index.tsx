import Image from "next/image";
import Link from "next/link";

export default function Card({ city, content }: any) {
  const cityLower = city?.replace(/\s+/g, "-").toLowerCase();
  const imgUrl = `https://source.unsplash.com/random/300x200/?${cityLower}`;

  return (
    <div className="rounded-xl shadow-lg bg-gray-100">
      <div className="p-5 flex flex-col items-center">
        <Image src={imgUrl} width={300} height={200} alt={city} />
        <h2>{city}</h2>
        <p className="line-clamp-2">{content}</p>
        <Link href={`/${cityLower}`}>Explore the city</Link>
      </div>
    </div>
  );
}
