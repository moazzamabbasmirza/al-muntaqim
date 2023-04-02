import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div class="py-8 px-8 pt-6 mx-auto w-full h-full text-center lg:py-16 bg-black">
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            This is the offical website of Al-Muntaqim International.
          </p>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We'll be right back soon
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            The website is under development.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <h4>
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://almuntaqim.com/" class="hover:underline">
                Al-Muntaqim International™
              </a>
              . All Rights Reserved.
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
