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
import { useEffect, useState } from "react";
import FaqSection from "@/components/FaqSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoading, setIsLoading } = useLoading();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // Adjust timeout as needed
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    console.log("selectedLanguage", selectedLanguage);

    if (!selectedLanguage) {
      setShowModal(true);
    }

    return () => clearTimeout(timeout);
  }, []);

  console.log("showModal", showModal);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* {showModal && <LanguageModal onClose={handleCloseModal} />} */}
        <FloatingNav />
        <Hero />
        <Grid />
        <Clients />
        <Experience />
        <Approach />
        <FaqSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}

const LanguageModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  const handleLanguageSelect = async (locale: string) => {
    localStorage.setItem("selectedLanguage", locale);
    await router.push(`/${locale}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-2xl transform transition-transform scale-105 w-96">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          Select Your Language
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => handleLanguageSelect("en")}
            className="w-full py-3 text-white font-medium rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect("id")}
            className="w-full py-3 text-white font-medium rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Indonesia
          </button>
        </div>
      </div>
    </div>
  );
};
