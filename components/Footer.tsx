"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("FooterSection");

  return (
    <footer className="w-full overflow-clip pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute overflow-clip left-0 bottom-[0px] ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-75 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("HeadingStart")}{" "}
          <span className="text-purple">{t("HeadingHighlight")}</span>{" "}
          {t("HeadingEnd")}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("Description")}
        </p>
        {/* <a href="mailto:contact@jsmastery.pro"> */}
        <a href="mailto:angga.asep98gmail.com">
          <MagicButton
            title={t("ButtonText")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row gap-2 md:gap-0 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {/* Copyright © 2024 Adrian Hajdin */}
          Arsy Creative Studio
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
