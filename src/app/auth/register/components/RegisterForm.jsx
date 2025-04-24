// ==========================
// components/RegisterForm.jsx
// ==========================
"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const result = await registerUser({ name, email, password });

    if (result.success) {
      form.reset();
      Swal.fire("Success", "Registered successfully!", "success");
      router.push("/auth/login");
    } else {
      Swal.fire(
        "Error",
        "Registration failed. User may already exist.",
        "error"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
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
          placeholder="Enter The Password"
          className="input input-bordered w-full"
          required
        />
      </div>
      <button type="submit" className="btn w-full bg-orange-600 text-white">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
