"use client";

import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import loginLottieData from "../../../../public/loginLottie.json";
import SocialLogin from "../register/components/SocialLogin";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Login = () => {
  const router = useRouter();
  const loginLottie = loginLottieData || null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response?.ok) {
        router.push("/");
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully!",
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Authentication Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to Login",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-10">
      <div className="w-full max-w-5xl bg-base-100 rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="hidden md:block">
          {loginLottie && (
            <Lottie
              animationData={loginLottie}
              loop={true}
              className="w-full h-auto"
            />
          )}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <button className="btn w-full bg-orange-600 text-white text-lg">
                Login
              </button>
            </div>
          </form>
          <div className="divider">or</div>
          <SocialLogin />
          <div className="text-center mt-4">
            <h2>
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-red-400 font-bold">
                Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
