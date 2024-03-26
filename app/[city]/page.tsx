import Header from "@/components/Header";
import { data } from "@/data/data.js";
import { Key } from "react";

export default async function City({ params }: any) {
  const city = params.city.toUpperCase();
  const cityUpper = city?.replace(/-/g, " ").toUpperCase();

  const contentCity = data.filter(
    (obj: { [x: string]: any }) =>
      obj["city"].toString().toLowerCase() == cityUpper.toString().toLowerCase()
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal">
      <Header city={params.city} />

      <div className="container px-60">
        <h2>{cityUpper}</h2>

        {contentCity[0]["content"]?.map(
          (cont: string, index: Key | null | undefined) => {
            return <p key={index}>{cont}</p>;
          }
        )}

        <p>{contentCity[0].continent}</p>
      </div>
    </main>
  );
}
