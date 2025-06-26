import React from "react";
import CRUD from "../molecules/CRUD";
import cardSatu from "../../assets/image/card01.jpg";
import avaSatu from "../../assets/image/ava01.png";
import cardDua from "../../assets/image/card02.jpg";
import avaDua from "../../assets/image/ava02.png";
import cardTiga from "../../assets/image/card03.jpg";
import avaTiga from "../../assets/image/ava03.png";
import cardEmpat from "../../assets/image/card04.jpg";
import avaEmpat from "../../assets/image/ava04.png";
import cardLima from "../../assets/image/card05.jpg";
import avaLima from "../../assets/image/ava05.png";
import cardEnam from "../../assets/image/card06.jpg";
import avaEnam from "../../assets/image/ava06.png";
import cardTujuh from "../../assets/image/card07.jpg";
import avaTujuh from "../../assets/image/ava07.png";
import cardDelapan from "../../assets/image/card08.jpg";
import avaDelapan from "../../assets/image/ava08.png";
import cardSembilan from "../../assets/image/card09.jpg";

export default function Collection() {
  return (
    <>
      <CRUD />
      <section class="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <header class="mb-6">
          <h2 class="text-3xl font-bold poppins-semibold">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p class="text-gray-500 mt-2 dm-sans-fonts3">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </header>

        <nav
          class="flex space-x-6 border-b border-gray-50 mb-8"
          aria-label="sec nav"
        >
          <button class="pb-2 border-b-2 border-red-500 text-red-500 font-semibold dm-sans-fonts3">
            Semua Kelas
          </button>
          <button class="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Pemasaran
          </button>
          <button class="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Desain
          </button>
          <button class="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Pengembangan Diri
          </button>
          <button class="pb-2 text-gray-500 hover:text-black transition dm-sans-fonts3">
            Bisnis
          </button>
        </nav>

        <div class="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardSatu}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaSatu}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardDua}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaDua}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardTiga}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaTiga}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardEmpat}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaEmpat}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardLima}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaLima}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardEnam}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaEnam}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardTujuh}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaTujuh}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardDelapan}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaDelapan}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img
              src={cardSembilan}
              alt="Big 4 Auditor Financial Analyst"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2 poppins-semibold">
                Big 4 Auditor Financial Analyst
              </h3>
              <p class="text-gray-500 text-sm mb-4 dm-sans-fonts3">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan...
              </p>
              <div class="flex items-center mb-4">
                <img
                  src={avaTiga}
                  alt="Jenna Ortega"
                  class="w-8 h-8 rounded-lg mr-3"
                />
                <div class="text-sm">
                  <p class="font-medium dm-sans-fonts3">Jenna Ortega</p>
                  <p class="text-gray-400 dm-sans-fonts">
                    Senior Accountant di <b>Gojek</b>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-yellow-400 text-sm">
                  ★★★★☆
                  <span class="ml-2 text-gray-500 dm-sans-fonts3 text-xs">
                    {" "}
                    <span class="underline">(3.5 86</span>)
                  </span>
                </div>
                <p class="text-green-500 text-xl font-bold poppins-semibold">
                  Rp 300K
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
