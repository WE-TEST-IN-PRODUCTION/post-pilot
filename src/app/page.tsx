import * as React from "react";
import DashboardPage from "./ui/DashboardPage";
import HeroPage from "./ui/HeroPage";
import { UserInfoResponse } from "./api/types/auth.type";

export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user", {
    cache: "no-store",
  });

  const data: UserInfoResponse = await res.json();

  if (res.status === 200) {
    return <DashboardPage name={data.name} picture={data.picture}/>;
  }

  return <HeroPage />;
}
