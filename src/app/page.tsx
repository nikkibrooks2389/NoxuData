"use client";

import React from "react";

import UserInfo from "./components/AccountListPage/UserInfo";
import AccountsSection from "./components/AccountListPage/AccountsSection";
import HelpBar from "./components/AccountListPage/HelpBar";

export default function Page() {
  return (
    <main className="min-h-screen min-w-screen">
      <UserInfo />
      <AccountsSection accounts={accountsData} />
      <HelpBar />
    </main>
  );
}

const accountsData = [
  {
    id: 1,
    name: "Abbott - Pacocha",
    industry: "IT",
    city: "Columbus",
    state: "CO",
    segment: "Enterprise",
    ownerID: 7,
  },
  {
    id: 2,
    name: "Klein - Weimann",
    industry: "Finance",
    city: "Boston",
    state: "MA",
    segment: "Commercial",
    ownerID: 4,
  },
  {
    id: 3,
    name: "Greenholt - Cremin",
    industry: "Marketing",
    city: "Austin",
    state: "TX",
    segment: "Small Business",
    ownerID: 3,
  },
  {
    id: 4,
    name: "Kerluke Group",
    industry: "Construction",
    city: "Phoenix",
    state: "AZ",
    segment: "Enterprise",
    ownerID: 5,
  },
  {
    id: 5,
    name: "Runolfsson - Hane",
    industry: "Healthcare",
    city: "Dallas",
    state: "TX",
    segment: "Government",
    ownerID: 6,
  },
];
