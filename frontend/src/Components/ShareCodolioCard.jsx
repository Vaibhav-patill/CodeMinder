import React from "react";

const ShareCodolioCard = () => {
  return (
    <section className="mt-4 mb-4 flex flex-col items-center justify-center w-full gap-8 md:mt-10">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-3xl font-semibold sm:text-5xl dark:text-white">
          Share your #Code<span className="text-orange-500">Minder</span>Card
        </h3>
        <span className="text-3xl font-semibold text-gray-500 dark:text-darkText-400 sm:text-5xl">
          Wherever you want
        </span>
      </div>
      <div className="relative z-0 mx-auto select-none w-fit">
        <img
          alt="landing"
          loading="lazy"
          width="228"
          height="0"
          className="z-[100] rotate-6 w-[70%] mx-auto sm:w-[18rem] rounded-2xl h-auto top-16 right-28"
          src="https://codolio.com/landing/codolio_card_light.png"
        />
        <img
          alt="emoji's"
          loading="lazy"
          width="150"
          height="100"
          className="absolute w-20 h-20 -right-1 sm:w-40 sm:h-auto bottom-24 sm:-right-32 rotate-6 sm:bottom-24"
          src="https://codolio.com/_next/image?url=%2Flanding%2Femoji.png&w=256&q=75"
        />
        <img
          alt="socials"
          loading="lazy"
          width="120"
          height="100"
          className="absolute w-28 h-28 sm:w-32 sm:h-auto -left-8 bottom-36 sm:-left-28 rotate-6 sm:bottom-24 -z-10"
          src="https://codolio.com/_next/image?url=%2Flanding%2Fsocials.PNG&w=128&q=75"
        />
        <div
          id="linkedin"
          className="absolute hidden gap-1 p-2 bg-white border dark:border-darkBorder-800 dark:bg-darkBox-900 lg:flex top-16 -right-72 -rotate-6 rounded-xl"
        >
          <div>
            <img
              width="40"
              height="40"
              loading="lazy"
              src="https://avatars.githubusercontent.com/u/98267696?v=4"
              alt="linkedin"
              className="mt-2 rounded-full"
            />
          </div>
          <div>
            <div className="w-full p-2 bg-gray-100 dark:bg-darkBox-800 round-border">
              <div className="flex items-center justify-between w-full">
                <div className="font-[550] flex gap-1 items-center">
                  <span>Anurag</span>
                  <span className="text-xs font-normal text-gray-400">3rd+</span>
                </div>
                <div>
                  <span className="text-xs font-normal text-gray-400">2d ...</span>
                </div>
              </div>
              <div className="text-xs dark:text-darkText-400">
                <p>
                  <span className="text-blue-600">@siddharth2104</span> Your stats in problem solving are
                </p>
                <p>incredibly impressive.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 mt-1 text-xs text-gray-500">
              <span>Like</span>
              <div className="flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-blue-500"
                >
                  <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></path>
                </svg>
                <span>1</span>
              </div>
              <span>Reply</span>
              <span>1 reply</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareCodolioCard;
