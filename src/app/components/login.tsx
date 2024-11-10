// src/app/components/login.tsx

"use client"; // This marks the component as a Client Component

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import ConnectDropbox from "./connectdropbox";

function Login() {
  const { data: session } = useSession(); // Check session state

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {!session ? (
        // If no session, show the login button
        <>
          <div className="mb-10">
            <h1 className="text-2xl font-bold">
              Welcome! to your <b>Drop</b>box.
            </h1>
          </div>
          <div className="border-white border-2 rounded-md hover:border-green-400">
            <button
              onClick={() => signIn("google")}
              className="m-2 hover:text-lime-400 flex items-center space-x-2"
            >
              <span>Login with</span> <FaGoogle />
            </button>
          </div>
        </>
      ) : (
        // If session exists, show user information in header
        <>
          <header className="w-full flex items-center justify-between p-4 bg-black shadow-md">
            <h1 className="text-xl font-bold text-white-700">
              Welcome, {session.user.name}
            </h1>
            <div className="flex items-center space-x-4">
              <img
                src={session.user.image}
                alt="Profile picture"
                className="rounded-full w-10 h-10"
              />
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign out
              </button>
            </div>
          </header>
          <ConnectDropbox/>
        </>
      )}
    </div>
  );
}

export default Login;
