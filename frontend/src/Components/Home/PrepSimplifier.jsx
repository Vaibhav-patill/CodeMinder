import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const PrepSimplifier = () => {
  const features = [
    {
      title: "My Workspace",
      description: "Tag & filter questions for easy organization",
      imgSrc: "https://codolio.com/_next/image?url=%2Flanding%2Fworkspace_light.png&w=256&q=75",
      imgWidth: 80,
      link: "/question-tracker/workspace",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Sheet Tracker",
      description: "Track all coding sheets in one place",
      imgSrc: "https://codolio.com/_next/image?url=%2Flanding%2Fsheet_tracker_light.png&w=96&q=75",
      imgWidth: 48,
      link: "/question-tracker/mySheets",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Enhanced Notes",
      description: "Add detailed notes to questions easily.",
      imgSrc: "https://codolio.com/_next/image?url=%2Flanding%2Fnotes_light.png&w=96&q=75",
      imgWidth: 48,
      link: "/question-tracker/notes",
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Simplify Your Prep
          </span>
        </h3>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Say goodbye to last-minute stress. Track all your questions and notes in one place for easy review and revision.
        </p>
        <Link 
          to="/question-tracker" 
          className="mt-6 inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
        >
          Try Question Tracker
          <motion.span 
            className="ml-2 inline-block group-hover:translate-x-2 transition-transform"
            initial={{ x: 0 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={featureVariants}
          >
            <Link to={feature.link}>
              <div className={`h-full bg-gradient-to-br ${feature.color} p-0.5 rounded-xl shadow-lg`}>
                <div className="h-full flex flex-col items-center bg-white dark:bg-gray-900 p-8 rounded-[11px] transition-all duration-300">
                  <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                    <img 
                      alt={feature.title}
                      loading="lazy"
                      width={feature.imgWidth}
                      decoding="async"
                      className="w-12 h-12 object-contain"
                      src={feature.imgSrc}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {feature.title}
                  </h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-center">
                    {feature.description}
                  </p>
                  <div className="mt-6 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                  <span className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrepSimplifier;