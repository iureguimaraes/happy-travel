"use client";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="relative w-full min-h-96 md:h-3/6 flex md:block flex-col jutify-center items-end">
        <Image
          priority
          fill
          src="/assets/header-bg.jpg"
          alt="Sardenha"
          quality={100}
          className="pointer-events-none select-none"
          style={{ objectFit: "cover", objectPosition: "75%" }}
        />
      </header>
    </>
  );
}