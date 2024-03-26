"use client";

import Image from "next/image";

export default function Header({ city }: any) {
  return (
    <>
      <header className="relative w-full min-h-96 md:h-3/6 flex md:block flex-col jutify-center items-end drop-shadow-xl">
        <Image
          priority
          fill
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYRGtBwAAzwCeSIUh1wAAAABJRU5ErkJggg=="
          src={
            city
              ? `https://source.unsplash.com/random/1200x400/?${city}`
              : "/assets/header-bg.jpg"
          }
          alt="Sardenha"
          quality={100}
          className="pointer-events-none select-none transition-all duration-300"
          style={{ objectFit: "cover", objectPosition: "75%" }}
        />
      </header>
    </>
  );
}
