import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm({ name, email, password }) {
  return (
    <>
      <form class="space-y-3" action="#" method="POST">
        <div>
          <label
            for="nama"
            class="dm-sans-fonts block text-sm/6 font-light text-gray-400"
          >
            {name}
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <input
              type="nama"
              name="nama"
              id="nama"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="dm-sans-fonts block text-sm/6 font-light text-gray-400"
          >
            {email}
            <span class="text-red-600">*</span>
          </label>
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
            />
          </div>
        </div>
        <div class="mb-4">
          <label
            for="phone"
            class="dm-sans-fonts block text-sm/6 font-light text-gray-400"
          >
            No. Hp <span class="text-red-500">*</span>
          </label>
          <div class="flex gap-x-8">
            <div class="flex items-center w-1/3 border border-gray-300 rounded-md bg-gray-50 px-2 py-2">
              <img
                src="https://flagcdn.com/w40/id.png"
                alt="ID Flag"
                class="h-4 w-6 rounded-sm mr-2"
              />
              <select class="bg-gray-50 text-sm text-gray-700 focus:outline-none">
                <option value="+62" selected>
                  +62
                </option>
                <option value="+1">+1</option>
                <option value="+64">+64</option>
              </select>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="81234567890"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="mt-4">
            <label
              for="password"
              class="dm-sans-fonts block text-sm/6 font-light text-gray-400"
            >
              {password} <span class="text-red-600">*</span>
            </label>
          </div>
          <div class="mt-2 flex justify-end items-center relative">
            <div class="absolute mr-0 w-10 text-gray-400">
              <i class="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div class="mt-4">
            <label
              for="password"
              class="dm-sans-fonts block text-sm/6 font-light text-gray-400"
            >
              Konfirmasi Password
              <span class="text-red-600">*</span>
            </label>
          </div>
          <div class="mt-2 flex justify-end items-center relative">
            <div class="absolute mr-0 w-10 text-gray-400">
              <i class="fa fa-eye-slash" aria-hidden="true"></i>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div class="flex justify-end mt-4 mb-6">
            <a class="text-sm/6 font-light dm-sans-fonts text-gray-500" href="">
              Lupa Password?
            </a>
          </div>
        </div>
        <div class="space-y-3">
          <a Link to="/register">
            <button
              type="submit"
              id="register"
              class="flex w-full justify-center rounded-lg bg-green-500 px-3 mt-3 mb-2 py-1.5 text-sm/6 font-semibold dm-sans-fonts2 text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 cursor-pointer"
            >
              Daftar
            </button>
          </a>

          <a Link to="/login">
            <button
              type="submit"
              class="flex w-full justify-center rounded-lg bg-green-100 px-3 mt-3 mb-2 py-1.5 text-sm/6 font-semibold dm-sans-fonts2 text-green-500 shadow-xs hover:bg-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100 cursor-pointer"
            >
              Masuk
            </button>
          </a>
        </div>
      </form>
    </>
  );
}
