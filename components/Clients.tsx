"use client";

import React from "react";

import {companies} from "@/data";
import {InfiniteMovingCards} from "./ui/InfiniteCards";
import {useTranslations} from "next-intl";

const Clients = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      quote:
        "Working with Arsy Creative Studio was a fantastic experience. Their professionalism, creativity, and ability to bring our vision to life were unparalleled. They went above and beyond to ensure every detail was perfect. If you're looking for a team that truly elevates your brand, look no further.",
      name: "Adrian Smith",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Working with Arsy Creative Studio was an exceptional experience. Their professionalism, prompt communication, and dedication to delivering outstanding results shone through every step of the project. The team's passion for creativity and innovation truly sets them apart. If you're looking to transform your brand and digital presence, Arsy Creative Studio is the perfect partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t("title1")}
        <span className="text-purple"> {t("title2")}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
