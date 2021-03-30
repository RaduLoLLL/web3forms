import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className=" bg-gray-800 px-14 text-white py-4">
      <Head>
        <title>Web3Forms by Radu ©2021 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav className="flex justify-between items-center font-mono shadow-md py-2">
          <Image src="/logo.svg" width={256} height={47} />
          <div className="text-white lg:hidden cursor-pointer" onClick={toggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div className="lg:block hidden text-white">
            <Link href="/features">
              <a href="#" className="mx-5 hover:text-gray-300">
                Features
              </a>
            </Link>
            <Link href="/examples">
              <a href="#" className="mx-5 hover:text-gray-300">
                Examples
              </a>
            </Link>
            <Link href="/pricing">
              <a href="#" className="mx-5 hover:text-gray-300">
                Pricing
              </a>
            </Link>
            <Link href="/support">
              <a
                href="#"
                className="mx-5 bg-purple-800 px-3 py-2 hover:bg-purple-600"
              >
                Help and Support
              </a>
            </Link>
          </div>
        </nav>

        <div
          className={`flex flex-col text-center  `}
          style={{
            transition: "all 1s ease-out",
            opacity: isOpen ? "100%" : "0",
            height: isOpen ? "100%" : "0",
          }}
        >
          <Link href="/features">
            <a
              href="#"
              className="mx-5 bg-purple-800 px-3 py-2 hover:bg-purple-600"
            >
              Features
            </a>
          </Link>
          <Link href="/examples">
            <a
              href="#"
              className="mx-5 bg-purple-800 px-3 py-2 hover:bg-purple-600"
            >
              Examples
            </a>
          </Link>
          <Link href="/pricing">
            <a
              href="#"
              className="mx-5 bg-purple-800 px-3 py-2 hover:bg-purple-600"
            >
              Pricing
            </a>
          </Link>
          <Link href="/support">
            <a
              href="#"
              className="mx-5 bg-purple-800 px-3 py-2 hover:bg-purple-600"
            >
              Help and Support
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 lg:mt-40 text-center">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl ">
          Contact Forms for Static Websites
        </h1>
        <h2 className="mt-10 lg:text-xl md:text-lg">
          Receive form submissions directly in your email inbox without any
          server or back-end code. Its free!
        </h2>
        <button className="lg:text-xl md:text-lg px-3 py-2 mt-14 bg-gradient-to-r from-pink-500 to-yellow-500 animate-bounce">
          Create your Acces Key
        </button>
        <p className="text-xs mt-8 mb-10">No sign-up required</p>
        <div className={styles.codeImage}>
          <Image src="/code.svg" width={673} height={368} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 lg:mt-40 text-center">
        <p className="text-md mt-8 mb-10">Host Anywhere</p>

        <div className="flex justify-center items-center">
          <div className="px-1 md:px-5">
            <Image src="/vercel.svg" width={123} height={28} />
          </div>
          <div className="px-1 md:px-5">
            <Image src="/Netlify.svg" width={103} height={28} />
          </div>
          <div className="px-1 md:px-5">
            <Image src="/aws.svg" width={54} height={32} />
          </div>
          <div className="px-1 md:px-5">
            <Image src="/github.svg" width={31} height={31} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <div className="px-1 md:px-5">
            <Image src="/digitalOcean.svg" width={155} height={27} />
          </div>
          <div className="px-1 md:px-5">
            <Image src="/cloudflare.svg" width={86} height={28} />
          </div>
          <div className="px-1 md:px-5">
            <Image src="/goDaddy.svg" width={126} height={26} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-32">
          <Card
            cardIcon="codeIcon.svg"
            iconWidth={36}
            iconHeight={36}
            cardTitle="Host Anywhere"
            cardDescription="You already know! Setting up form is pain. Web3Forms works without any Server or backend code like PHP.
"
          />
          <Card
            cardIcon="dbIcon.svg"
            iconWidth={36}
            iconHeight={36}
            cardTitle="No Databases"
            cardDescription="All emails are sent directly to your email address. We never store your form submissions.

"
          />
          <Card
            cardIcon="personIcon.svg"
            iconWidth={36}
            iconHeight={36}
            cardTitle="No Login Needed"
            cardDescription="There is no login or dashboard for Web3Forms. We authenticate users based on the access key.

"
          />
        </div>
      </div>
    </div>
  );
}
