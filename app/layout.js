import { Inter } from "next/font/google";
import "./globals.css";
import Button from "./components/Button";
import Image from "next/image";

import clothStand from "/public/assets/images/cloth-stand (1) (1).jpg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - E-commerce-fashion-web",
  description: "E-commerce-fashion-web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.class}>
        <nav className="h-[10vh] flex items-center justify-between px-[5%] bg-Primary">
          <h1 className="text-xl font-medium">
            <Link href="/">Logo</Link>
          </h1>

          <ul className="hidden md:flex md:gap-10 lg:gap-20 text-white">
            <li>Collection</li>
            <li>
              <a href="/product-details.html">Shop</a>
            </li>
            <li>New Arrival</li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>

          <div className="hidden md:flex gap-4 text-white items-center">
            <p>Login</p>
            <Button variante="secondary">Get Started</Button>
          </div>

          <div className="md:hidden">
            <i className="text-lg text-white ri-menu-3-line nav-icon"></i>
          </div>
        </nav>

        <main classNameName="bg-bg">
          {children}

          <div className="px-[5%]">
            <div class="subscribe place-items-center mt-20">
              <Image
                class="h-[400px] md:h-auto object-cover rounded-lg"
                src={clothStand}
                alt="cloth stand"
                placeholder="blur"
              />
              <div class="p-6 bg-white w-[80%] md:w-[450px] rounded-lg space-y-2 md:space-y-6">
                <h2 class="text-xl md:text-3xl text-dark font-medium">
                  Sign up to grt a discount
                </h2>
                <p class="text-sm w-[80%]">
                  We strivr to make fashion acceable to everyone no matter your
                  budget. We are dedicated to curating a wide range of
                  high-quality
                </p>
                <div class="flex flex-col md:flex-row gap-4 md:gap-6">
                  <input
                    class="bg-lightPink p-2 md:p-0 pl-4 md:pl-4 rounded-full w-full md:w-[50%]"
                    type="text"
                    placeholder="Enter your mail"
                  />
                  <button class="bg-Secondary py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div class="space-y-4 md:space-y-0 md:grid gap-6 md:grid-cols-12 mt-20 mb-10 w-full">
              <div class="bg-lightGreen p-8 rounded-lg md:col-span-5 lg:col-span-3">
                <h3 class="text-2xl">Pages</h3>
                <ul class="space-y-2 mt-4">
                  <li class="text-lg text-dark">New Arrival</li>
                  <li class="text-lg text-dark">SHop</li>
                  <li class="text-lg text-dark">Seervices</li>
                  <li class="text-lg text-dark">Collection</li>
                  <li class="text-lg text-dark">About us</li>
                  <li class="text-lg text-dark">Contact us</li>
                </ul>
              </div>
              <div class="bg-lightPurple rounded-lg md:col-span-7 lg:col-span-5 p-8 p-auto text-center space-y-4">
                <h2>logo</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda eos dolor corrupti velit culpa laboriosam,
                  distinctio, exercitationem explicabo iusto suscipit, tenetur
                  recusandae placeat voluptate consectetur.
                </p>

                <div class="pt-4">
                  <p>ADDRESS: 6688 Princes Road, London</p>
                  <p>London BAS 23JK, UK</p>
                  <p>PHONE:(012) 900 546 789-98</p>
                </div>
              </div>
              <div class="w-full bg-Primary rounded-lg md:col-span-12 lg:col-span-4 text-center p-10 pl-4">
                <h2 class="text-2xl font-medium mb-8">Let s get social</h2>

                <div class="grid place-items-center space-y-2 -rotate-12 max-w-min m-auto">
                  <button class="bg-white py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
                    You tube
                  </button>
                  <div class="flex gap-4">
                    <button class="bg-lightGreen py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
                      Instagram
                    </button>
                    <button class="bg-lightPurple py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
                      Linkedin
                    </button>
                  </div>
                  <button class="bg-Secondary py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
                    Facebook
                  </button>
                  <button class="bg-[#FFE0D3] py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] justify-self-end">
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="p-4 bg-Primary">
          <p className="text-center text-white">
            @chic coutute All Right Recevers 2024.
          </p>
        </footer>
      </body>
    </html>
  );
}
