"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ReactTyped from "react-typed";

import { Canvas } from "react-three-fiber";
import Stars from "../test/Stars";
import { Preload } from "@react-three/drei";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successfull", response.data);
      router.push("/profile");
    } catch (err: any) {
      console.log("Login Failed", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="absolute top-[13%] text-4xl w-full text-center">
        <ReactTyped strings={["Welcome to Portal!"]} typeSpeed={100} loop />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 absolute top-0 left-[50%] right-[50%]">
        <div className="flex flex-col items-center justify-center p-10 rounded backdrop-blur drop-shadow-xl bg-[#95adbe1c]">
          <h1 className="text-center text-white text-2xl">
            {loading ? "Processing..." : "Login"}
          </h1>
          <hr />

          <label htmlFor="email">Email</label>
          <input
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />

          <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outine-none focus:border-gray-600"
          >
            Login here
          </button>
          <Link href="/signup">Visit Signup Page</Link>
        </div>
      </div>
    </>
  );
}
