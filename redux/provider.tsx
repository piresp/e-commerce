"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const clerkConfig = {
  frontendApi: "your-clerk-frontend-api", // Replace with your Clerk frontend API
  signInUrl: "/sign-in", // Replace with your sign-in URL
  signUpUrl: "/sign-up", // Replace with your sign-up URL
  // Add any other required properties here
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider {...clerkConfig}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ClerkProvider>
  );
};
