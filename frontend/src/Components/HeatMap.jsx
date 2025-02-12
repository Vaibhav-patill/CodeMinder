import React from 'react';

const Heatmap = ({ data }) => {
  return (
    <div className="px-4 pt-4 relative bg-white border round-border shadow-sm dark:bg-darkBox-900 dark:border-darkBorder-800 lg:col-span-3 md:px-4">
      <div className="absolute right-[2px] top-[3px]">
        <div className="relative text-gray-600 cursor-pointer dark:text-darkText-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full gap-4 overflow-hidden md:items-start sm:flex-row">
        <div className="flex flex-col items-center flex-1 w-full h-ful">
          <div className="flex flex-col items-center justify-between w-full gap-1 sm:flex-row sm:gap-6">
            <div>
              <span className="text-xs font-[550] text-black dark:text-darkText-300">120 <span className="text-gray-500 dark:text-darkText-400">submissions in past 6 months</span></span>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-xs font-semibold text-gray-500 dark:text-darkText-400">Max.Streak</span>
              <span className="text-xs font-extrabold dark:text-darkText-300">37</span>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-xs font-semibold text-gray-500 dark:text-darkText-400">Current.Streak</span>
              <span className="text-xs font-extrabold dark:text-darkText-300">37</span>
            </div>
          </div>
          <div className="flex max-w-[80vw] justify-center md:max-w-[480px] lg:max-w-[600px] items-center w-full gap-2 overflow-x-scroll no-scrollbar mb-4">
            {data.map((month, index) => (
              <div key={index} className="h-[120px]">
                <div className="h-[100px] false no-scrollbar px-[0.5px]" style={{ width: `${month.days.length * 12}px` }}>
                  <svg className="react-calendar-heatmap" viewBox={`0 0 ${month.days.length * 12} 90`}>
                    <g transform="translate(0, 14)" className="react-calendar-heatmap-all-weeks">
                      {month.days.map((day, dayIndex) => (
                        <rect
                          key={dayIndex}
                          width="10"
                          height="10"
                          x={dayIndex * 11}
                          y={day.dayOfWeek * 11}
                          className={`color-scale-${day.submissions}`}
                          data-tooltip-id="tooltip"
                          data-tooltip-content={`${day.submissions} submissions on ${day.date}`}
                          style={{ rx: 2, ry: 2 }}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mt-1 text-xs text-center text-gray-500">{month.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full gap-2 p-4 bg-white border round-border shadow-sm dark:bg-darkBox-900 dark:border-darkBorder-800">
      <div className="absolute text-gray-600 cursor-pointer dark:text-darkText-500 top-2 right-2">
        {icon}
      </div>
      <div className="font-semibold whitespace-nowrap text-center text-gray-500 dark:text-darkText-400">{title}</div>
      <span className="text-5xl font-sans dark:text-darkText-300 font-extrabold">{value}</span>
    </div>
  );
};

const App = () => {
  const heatmapData = [
    {
      name: 'Aug',
      days: [
        { date: '12/08/2024', submissions: 0, dayOfWeek: 1 },
        { date: '13/08/2024', submissions: 0, dayOfWeek: 2 },
        { date: '14/08/2024', submissions: 0, dayOfWeek: 3 },
        { date: '15/08/2024', submissions: 0, dayOfWeek: 4 },
        { date: '16/08/2024', submissions: 2, dayOfWeek: 5 },
        { date: '17/08/2024', submissions: 1, dayOfWeek: 6 },
      ],
    },
    // Add more months here...
  ];

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
    </svg>
  );

  return (
    <div className="grid w-full gap-4 lg:grid-cols-5">
      <StatsCard title="Total Questions" value="108" icon={icon} />
      <StatsCard title="Total Active Days" value="69" icon={icon} />
      <Heatmap data={heatmapData} />
    </div>
  );
};

export default App;