import { Background } from "./_components/background";
import { ForWho } from "./_components/for-who";
import { Hero } from "./_components/hero";
import { WhatYouGet } from "./_components/what-you-get";

export default function HomePage() {
  return (
    <main>
      <Background />
      <Hero />
      <WhatYouGet />
      <ForWho />
    </main>
  );
}
