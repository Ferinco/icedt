import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const NextTestimony = () => {
    if (active != 2) {
      setActive(active + 1);
    }
  };
  const PrevTestimony = () => {
    if (active != 0) {
      setActive(active - 1);
    }
  };
  const Testimnonies = [
    {
      image: "/images/man.jpg",
      words:
        "From the moment I landed on the site to the time my order arrived, everything was seamless. I was really impressed with how intuitive and smooth the experience was.",
      name: "Mike Taylor",
      title: "Friendly Staff",
    },
    {
      image: "/images/woman.jpg",
      words:
        "Shopping here was a breeze. The categories were well organized, and I found exactly what I was looking for in seconds. Top-notch design and performance.",
      name: "Mike Tay",
      title: "Best User Experience",
    },
    {
     image: "/images/man.jpg",
      words:
        "I loved how engaging and interactive the site felt. Every element worked perfectly, and it felt like the site just understood what I needed. Amazing job!",
      name: "Mikel Taylor",
      title: "Best User Interactions",
    },
    {
     image: "/images/woman.jpg",
      words:
        "The functionality is spot-on. Checkout was easy, and I received my confirmation instantly. It’s clear that a lot of thought went into building this site.",
      name: "Mikel Taylor",
      title: "Best Functions",
    },
  ];

  return (
    <div className="bg-[#f8f8f8f8]">
      <div className="container mx-auto lg:grid grid-cols-12 gap-14 px-3 sm:px-0 lg:px-20 py-20 lg:py-32 items-center">
        <div className="flex flex-col w-3/4 sm:w-1/2 lg:w-full lg:col-span-4 gap-5 h-full">
          <p>TESTIMONIALS</p>
          <h2 className="text-[50px] font-bold text-balance leading-[50px]">
            What customers <span className="text-[#ff5200]">say about us.</span>
          </h2>
          <div className="hidden lg:flex items-center gap-5 mt-auto bg-white w-fit px-3 h-[60px]">
            <Icon
              icon="iconamoon:arrow-left-2-thin"
              width="30"
              height="30"
              color={active === 0 ? "#4a4a4a" : "#000"}
              onClick={() => PrevTestimony()}
              className="cursor-pointer"
            />
            <span className="w-[1px] h-10 rotate-[20deg] bg-[#4a4a4a]"></span>
            <Icon
              icon="iconamoon:arrow-right-2-thin"
              width="30"
              height="30"
              color={active === 5 ? "#4a4a4a" : "#000"}
              onClick={() => NextTestimony()}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-10 col-span-12 lg:col-span-8 items-end h-fit justify-center mt-16">
          <div className="grid sm:grid-cols-2 overflow-hidden gap-5 w-full items-center">
            {Testimnonies.map((test, index) => (
              <div
                className={`${
                  index === active || index === active + 1 ? "flex" : "hidden"
                } ${
                  index === active
                    ? "opacity-100 translate-x-0"
                    : "sm:translate-x-5"
                } transition-all duration-700 ease-in-out
           flex-col p-5 min-h-[230px] h-full bg-white gap-5 items-start justify-start text-start`}
                key={index}
              >
                <h4 className="text-base">{test.title}</h4>
                <p className="text-sm">{test.words}</p>
                <div className="flex gap-2 items-center mt-auto">
                  <div className="aspect-square h-10 rounded-full overflow-hidden">
                    <img
                      src={test.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-sm">{test.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden mt-10 items-center gap-5 lg:mt-auto bg-white w-fit px-3 h-[60px]">
            <Icon
              icon="iconamoon:arrow-left-2-thin"
              width="30"
              height="30"
              color={active === 0 ? "#4a4a4a" : "#000"}
              onClick={() => PrevTestimony()}
              className="cursor-pointer"
            />
            <span className="w-[1px] h-10 rotate-[20deg] bg-[#4a4a4a]"></span>
            <Icon
              icon="iconamoon:arrow-right-2-thin"
              width="30"
              height="30"
              color={active === 5 ? "#4a4a4a" : "#000"}
              onClick={() => NextTestimony()}
              className="cursor-pointer"
            />
          </div>
      </div>
    </div>
  );
};
