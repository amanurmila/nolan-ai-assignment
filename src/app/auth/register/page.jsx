// components/Register.tsx
// ==========================
"use client";
import dynamic from "next/dynamic";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";
import registerLottieData from "../../../../public/registerLottie.json";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-base-100">
      <div className="w-full max-w-6xl bg-base-100 rounded-2xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Register
          </h2>
          <RegisterForm />
          <div className="divider">or</div>
          <SocialLogin />
          <div className="text-center">
            <h2>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-red-400 font-bold">
                Login
              </Link>
            </h2>
          </div>
        </div>
        <div className="order-1 md:order-2 hidden md:block">
          <Lottie
            animationData={registerLottieData}
            loop
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
