import React from "react";

const CodingPortfolio = () => {
  return (
    <section className="mt-10 mb-10 flex flex-col items-center justify-center w-full px-6 md:px-12 lg:px-20 gap-10">
      
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Your <span className="text-blue-500">All-in-One</span> Coding Portfolio
        </h3>
        <a 
          href="/profile/YoZzXkbH" 
          className="mt-4 inline-block text-lg font-semibold text-blue-600 hover:underline"
        >
          Try Profile Tracker →
        </a>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <FeatureCard 
          title="See cumulative questions solved"
          image="https://codolio.com/_next/image?url=%2Flanding%2Ftotal_questions_light.png&w=256&q=75"
        />
        <FeatureCard title="Track your streak, across multiple platforms">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ImageWrapper 
              src="https://codolio.com/_next/image?url=%2Flanding%2Ftotal_active_days_light.png&w=256&q=75" 
              alt="feature1" 
            />
            <ImageWrapper 
              src="https://codolio.com/landing/heatmap_light.png" 
              alt="heatmap" 
            />
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Identify your strengths and areas of improvement"
          image="https://codolio.com/_next/image?url=%2Flanding%2Ftopic_analysis_light.png&w=640&q=75"
        />
        <FeatureCard 
          title="Get classification of Problems solved"
          image="https://codolio.com/landing/problems_solved_light.png"
        />

        <FeatureCard title="Monitor your ratings in contests over time">
          <div className="grid grid-cols-1 gap-6">
            <ImageWrapper 
              src="https://codolio.com/landing/contest_description_light.png" 
              alt="feature1" 
            />
            <ImageWrapper 
              src="https://codolio.com/landing/contest_graph_light.png" 
              alt="Contest Graph" 
            />
          </div>
        </FeatureCard>

        <FeatureCard title="Showcase your Achievements">
          <div className="grid grid-cols-1 gap-6">
            <ImageWrapper 
              src="https://codolio.com/_next/image?url=%2Flanding%2Fbadges_light.png&w=640&q=75" 
              alt="feature1" 
            />
            <ImageWrapper 
              src="https://codolio.com/_next/image?url=%2Flanding%2Fcontest_ratings_light.png&w=640&q=75" 
              alt="feature1" 
            />
          </div>
        </FeatureCard>
      </div>
      
    </section>
  );
};

const FeatureCard = ({ title, image, children }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-transform transform hover:scale-105">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
      {image && <ImageWrapper src={image} alt={title} />}
      {children}
    </div>
  );
};

const ImageWrapper = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <img 
        src={src} 
        alt={alt} 
        className="w-full max-w-[300px] h-auto object-cover border rounded-lg shadow-md dark:border-gray-800"
      />
    </div>
  );
};

export default CodingPortfolio;
