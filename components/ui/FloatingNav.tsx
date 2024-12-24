"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingProvider";
import { useTranslations, useLocale } from "next-intl";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const currentLocale = useLocale();
  const [localeSwitcherVisible, setLocaleSwitcherVisible] = useState(false);
  const { isLoading, setIsLoading } = useLoading();
  const [visible, setVisible] = useState(true);
  const localeSwitcherRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("NavItem");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleLocaleChange = async (locale: string) => {
    setIsLoading(true); // Start loading
    try {
      await router.push(`/${locale}`); // Navigate to the new locale
      // Wait for locale propagation (optional, if needed to sync translations)
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      // console.error("Error changing locale:", error);
    } finally {
      // window.location.reload();
      setIsLoading(false); // End loading when done
    }
    setLocaleSwitcherVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        localeSwitcherRef.current &&
        !localeSwitcherRef.current.contains(event.target as Node)
      ) {
        setLocaleSwitcherVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: t("About"), link: "#about" },
    { name: t("Services"), link: "#services" },
    { name: t("Testimonials"), link: "#testimonials" },
    { name: t("FAQ"), link: "#contact" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-7 py-5 lg:px-10 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>

              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
          <div
            className="flex items-center justify-center relative"
            onClick={() => setLocaleSwitcherVisible(!localeSwitcherVisible)}
          >
            <img src="/globe.svg" alt="Globe" className="w-4 h-4" />
            <span
              className="absolute text-[7px] dark:text-neutral-50 text-neutral-600"
              style={{ top: "-0.5rem", right: "-0.6rem" }}
            >
              {currentLocale.toUpperCase()}
            </span>
            {localeSwitcherVisible && (
              <div
                className="absolute top-8 right-0 bg-white shadow-lg rounded-lg p-2"
                style={{
                  backdropFilter: "blur(16px) saturate(180%)",
                  backgroundColor: "rgba(17, 25, 40, 0.75)",
                  borderRadius: "12px",
                }}
                ref={localeSwitcherRef}
              >
                <button
                  onClick={() => handleLocaleChange("en")}
                  className="block px-4 py-2 text-sm text-left w-full hover:bg-neutral-100 dark:hover:bg-neutral-400 rounded-sm "
                >
                  English
                </button>
                <button
                  onClick={() => handleLocaleChange("id")}
                  className="block px-4 py-2 text-sm text-left w-full hover:bg-neutral-100 dark:hover:bg-neutral-400 rounded-sm"
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
