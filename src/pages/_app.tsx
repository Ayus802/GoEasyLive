import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Route } from "react-router-dom"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Hero />
    </>
  );
}
