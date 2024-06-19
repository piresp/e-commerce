"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="flex w-full h-screen bg-slate-50 items-center justify-center">
      <SignIn  signUpForceRedirectUrl='/' />
    </div>
  );
}
