// src/app/components/SessionProviderWrapper.tsx

"use client"; // Mark this as a client component

import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
