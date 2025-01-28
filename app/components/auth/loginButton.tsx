import { useUser } from '@clerk/nextjs';

import {SignInButton} from "@clerk/nextjs"


export default function SignInButtonComponent() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Wait until user data is loaded

  return (
    !isSignedIn && (
      <button className="flex items-center px-3 py-2 hover:bg-[#f0d786] text-black rounded hover:bg-lightyellow mx-2">
        <SignInButton>Sign In</SignInButton>
      </button>
    )
  );
}