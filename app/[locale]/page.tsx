"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLoading } from "@/context/LoadingProvider";
import { useEffect } from "react";
import FAQComponent from "@/components/FaqComponent";

export default function Home() {
  const t = useTranslations("HomePage");
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <main className="flex bg-black-100 justify-center items-center h-screen">
        <div className="loading-spinner w-[150px] lg:w-[250px] text-white">
          {" "}
          <img src="/white-arsy.png" alt="arsy" />
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
        <Clients />
        <Experience />
        <Approach />
        <FAQComponent />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}
