import * as React from "react";
import DashboardPage from "./ui/DashboardPage";
import HeroPage from "./ui/HeroPage";

export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user", {
    cache: "no-store",
  });

  if (res.status === 200) {
    return <DashboardPage />;
  }

  return <HeroPage />;
}
