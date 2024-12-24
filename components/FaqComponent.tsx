import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

// Define the type for the `selectedKeys` state
type SelectedKeys = Set<string>;

const FAQComponent: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<SelectedKeys>(
    new Set(["1"])
  );

  const itemClasses = {
    base: "py-0 w-full",
    title: "text-start text-xl md:text-2xl font-bold",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center justify-between",
    content: "text-small px-2",
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="relative z-50">
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as SelectedKeys)}
        itemClasses={itemClasses}
        showDivider={false}
        variant="shadow"
        selectionBehavior="replace"
        disableIndicatorAnimation={false}
        keepContentMounted
        selectionMode="single"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              overflowY: "unset",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              overflowY: "hidden",
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion 1"
          className="bg-gray-700 mb-2 rounded-lg"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion 2"
          className="bg-gray-700 mb-2 rounded-lg"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion 3"
          className="bg-gray-700 rounded-lg"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQComponent;
