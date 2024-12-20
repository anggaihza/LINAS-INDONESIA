"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import {navItems} from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import {WhatsAppButton} from "@/components/ui/WhatsAppButton";
import {useTranslations} from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div>
          <h1>{t("title")}</h1>
          <Link href="/about">{t("about")}</Link>
        </div>
        <Grid />
        <Clients />
        <Experience />
        <Approach />

        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}