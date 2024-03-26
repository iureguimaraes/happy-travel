"use client";
import { promises as fs } from "fs";
import { useEffect, useState } from "react";
import Card from "../Card";

interface dataType {
  city: String;
  content: String[];
}

export default function Grid({ citiesData }: any) {
  const [data, setData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setData(citiesData);
  }, []);

  async function getData() {
    const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
    setData(JSON.parse(file));
  }

  return (
    <>
      <div className="flex w-96 rounded bg-white">
        <input
          type="text"
          placeholder="Search by continent or city"
          // className="mb-2 px-2 py-2 border-rounded"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
        />
        <button className="m-2 rounded bg-cyan-500 px-4 py-2 text-white">
          Search
        </button>
      </div>

      <div className="flex items-center justify-center container mx-auto mt-6">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 pb-8 md:pb-20">
          {data
            .filter((item) => {
              return searchQuery.toLowerCase() === ""
                ? item
                : item.continent
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    item.city.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .map(({ city, content }: dataType) => {
              return <Card key={city} city={city} content={content} />;
            })}
        </div>
      </div>
    </>
  );
}
