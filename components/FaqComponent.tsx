import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

// Define the type for the `selectedKeys` state
type SelectedKeys = Set<string>;

const FaqComponent: React.FC = () => {
  const t = useTranslations("FAQ");
  const [selectedKeys, setSelectedKeys] = React.useState<SelectedKeys>(
    new Set(["1"])
  );

  const ArrowIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <motion.svg
      initial={false}
      animate={{ rotate: isOpen ? 90 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      viewBox="0 0 24 24"
      width="24"
      className="text-current"
    >
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );

  const itemClasses = {
    base: "py-4 w-full",
    title: "text-start text-xl md:text-2xl font-semibold ",
    trigger:
      " py-5 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center justify-between",
    content: "text-small text-white-100 mt-3",
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="relative z-50" id="faq">
      <h1 className="heading">
        {t("HeadingStart")}{" "}
        <span className="text-purple">{t("HeadingEnd")}</span>{" "}
      </h1>
      <div className="my-20">
        <Accordion
          itemClasses={itemClasses}
          disableIndicatorAnimation={false}
          keepContentMounted
          selectionMode="single"
          isCompact
          defaultExpandedKeys={["1"]}
        >
          <AccordionItem
            key="1"
            aria-label={t("Item1.ariaLabel")}
            title={t("Item1.title")}
            className="mb-2 rounded-lg"
            indicator={({ isOpen = false }) => <ArrowIcon isOpen={!!isOpen} />}
            style={{
              outline: "none",
              transition: "outline-offset 0.2s, outline 0.2s",
              zIndex: "10",
            }}
          >
            {t("Item1.content")}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label={t("Item2.ariaLabel")}
            title={t("Item2.title")}
            className="mb-2 rounded-lg"
            indicator={({ isOpen = false }) => <ArrowIcon isOpen={!!isOpen} />}
          >
            {t("Item2.content")}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label={t("Item3.ariaLabel")}
            title={t("Item3.title")}
            className="rounded-lg"
            indicator={({ isOpen = false }) => <ArrowIcon isOpen={!!isOpen} />}
          >
            {t("Item3.content")}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label={t("Item4.ariaLabel")}
            title={t("Item4.title")}
            className="rounded-lg"
            indicator={({ isOpen = false }) => <ArrowIcon isOpen={!!isOpen} />}
          >
            {t("Item4.content")}
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label={t("Item5.ariaLabel")}
            title={t("Item5.title")}
            className="rounded-lg"
            indicator={({ isOpen = false }) => <ArrowIcon isOpen={!!isOpen} />}
          >
            <p>{t("Item5.content.part1")}</p>
            <p>{t("Item5.content.part2")}</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqComponent;
