import React from 'react';

const contests = [
  {
    date: "3/30/2025",
    time: "5:30 PM - 8:30 PM",
    platform: "AtCoder",
    title: "AtCoder Grand Contest 071",
    calendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=AtCoder%20Grand%20Contest%20071&dates=20250330T173000000+053/20250330T203000000+053&details=%5BAtCoder%5D%3A%20AtCoder%20Grand%20Contest%20071&sf=true&output=xml&location=https://atcoder.jp/contests/agc071",
    contestLink: "https://atcoder.jp/contests/agc071",
  },
  {
    date: "3/16/2025",
    time: "7:00 PM - 8:30 PM",
    platform: "GeeksForGeeks",
    title: "GfG Weekly - 197 [Rated Contest]",
    calendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=GfG%20Weekly%20-%20197%20%5BRated%20Contest%5D&dates=20250316T190000000+053/20250316T203000000+053&details=%5BGeeksForGeeks%5D%3A%20GfG%20Weekly%20-%20197%20%5BRated%20Contest%5D&sf=true&output=xml&location=https://practice.geeksforgeeks.org/contest/gfg-weekly-197-rated-contest",
    contestLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-197-rated-contest",
  },
  // Add more contests here...
];

const ContestCard = ({ contest }) => (
  <div className="flex flex-col flex-1 min-w-[300px] w-full lg:max-w-[400px] gap-2 p-4 bg-white dark:bg-darkBox-900 dark:border-darkBorder-800 border border-gray-300 round-border">
    <div className="flex items-center">
      <div className="inline-block w-3 h-3 ml-2 mr-1 rounded-full bg-codolioBase"></div>
      <div className="inline-flex items-center ml-2 text-sm text-gray-500 dark:text-darkText-400">
        <span className="mr-2">{contest.date}</span>
        <div className="flex gap-1">
          <span>{contest.time.split(' - ')[0]}</span>
          <span>-</span>
          <span>{contest.time.split(' - ')[1]}</span>
        </div>
      </div>
    </div>
    <div title={contest.title} className="flex items-center text-gray-500 cursor-pointer dark:text-darkText-400">
      <div className="flex items-center justify-center w-8">
        <img
          alt={contest.platform.toLowerCase()}
          loading="lazy"
          width="24"
          height="24"
          decoding="async"
          className="w-auto h-4 min-w-4 max-w-6 mix-blend-darken dark:mix-blend-normal"
          src={`/icons/${contest.platform.toLowerCase()}_light.png`}
          style={{ color: 'transparent' }}
        />
      </div>
      <h3 className="w-full overflow-hidden whitespace-nowrap text-sm font-[450]">{contest.title}</h3>
    </div>
    <div className="flex items-center justify-between text-btnBlue dark:text-blue-400">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="ml-1 text-gray-400 dark:text-darkText"
        >
          <path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm32,96H136v24a8,8,0,0,1-16,0V112H96a8,8,0,0,1,0-16h24V72a8,8,0,0,1,16,0V96h24a8,8,0,0,1,0,16Z"></path>
        </svg>
        <a className="text-xs underline" href={contest.calendarLink} target="_blank" rel="noopener noreferrer">
          Add to Calendar
        </a>
      </div>
      <a href={contest.contestLink} target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-btnBlue"
        >
          <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
        </svg>
      </a>
    </div>
  </div>
);

const UpcomingContests = () => (
  <div className="overflow-hidden no-scrollbar round-border z-0 md:w-[300px] lg:w-[370px]">
    <div className="mb-2">
      <h2 className="text-2xl leading-9 font-[500] text-gray-600 dark:text-[#F0F0F0]">Upcoming Contests</h2>
      <p className="text-sm leading-6 text-gray-600 dark:text-darkText-400">Don't miss scheduled events</p>
      <hr className="my-2 border dark:border-darkBorder-800" />
    </div>
    <div className="flex md:h-[696px] flex-col gap-2 overflow-y-auto">
      {contests.map((contest, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-zinc-400 dark:text-darkText-500 text-xs font-[450]">{contest.date}</h3>
          </div>
          <ContestCard contest={contest} />
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingContests;