"use server";

import { HeroHighlightDemo } from "@/components/HighlightHero";

export default async function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <HeroHighlightDemo />
    </div>
  );
}
