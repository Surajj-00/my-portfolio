'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Techstack from "@/components/Techstack";


export default function Home({ }) {


  return (
    <main className="container mx-auto px-6">
      <Header />
      <Hero />
      <About />
      <Techstack />
      <Footer />
    </main>
  );
}
