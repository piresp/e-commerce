"use client";

import { useClerk } from "@clerk/nextjs";

export default function SignInPage() {
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <div className="flex w-full h-screen bg-slate-50 items-center justify-center">
      <button className='btn btn-error' onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
