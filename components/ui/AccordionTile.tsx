import React, { useState, useRef } from "react";
import Image from "next/image";

interface Data {
  question: String;
  answer: String;
}

const AccordionTile: React.FC<Data> = (props) => {
  const [isShowed, setIsShowed] = useState(false);
  const [height, setHeight] = useState("0px");

  const divHeight = useRef<HTMLDivElement | null>(null);

  const showAccordion = () => {
    setIsShowed((prevIsShowed) => !prevIsShowed);

    if (divHeight.current) {
      setHeight(isShowed ? "0px" : `${divHeight.current.scrollHeight}px`);
    }
  };

  const { question, answer } = props;

  return (
    <>
      <div
        className="flex flex-row items-center justify-between w-full h-10 py-2 cursor-pointer light-red "
        onClick={() => showAccordion()}
      >
        <p
          className={
            "transition-all duration-100 ease-in mr-4 text-xs lg:text-[14px] " +
            (isShowed ? "font-bold dark-blue " : "font-medium")
          }
        >
          {question}
        </p>
        <div className={"relative w-3 h-2 mr-2"}>
          <Image
            src="/arrow-.svg"
            layout="fill"
            alt="arrow"
            className={
              "transition-transform duration-300 " + (isShowed ? "active" : "")
            }
          />
        </div>
      </div>
      <div
        ref={divHeight}
        style={{ maxHeight: `${height}` }}
        className={
          "border-bottom overflow-hidden transform transition-max-height duration-500 ease-in-out"
        }
      >
        <p className="mt-0 text-[13px] mr-6">{answer}</p>
      </div>
    </>
  );
};

export default AccordionTile;
