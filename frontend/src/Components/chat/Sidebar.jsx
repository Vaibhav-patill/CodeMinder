import { motion } from "framer-motion";
import { FiHash } from "react-icons/fi";

const Sidebar = ({ setActiveGroup, activeGroup, onSelect }) => {
  const groups = [
    "Web Development", 
    "App Development", 
    "AR VR", 
    "React JS", 
    "MERN Stack", 
    "Block Chain",
    "AI ML Technology"
  ];

  const getGroupIcon = (group) => {
    switch(group) {
      case "Web Development": return "💻";
      case "App Development": return "📱";
      case "AR VR": return "👓";
      case "React JS": return "⚛";
      case "MERN Stack": return "🔗";
      case "Block Chain": return "⛓";
      case "AI ML Technology": return "🧠";
      default: return <FiHash className="h-4 w-4" />;
    }
  };

  return (
    <ul className="space-y-1">
      {groups.map((group) => (
        <motion.li
          key={group}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mb-1 rounded-lg transition-all duration-200 cursor-pointer ${activeGroup === group ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
          onClick={() => {
            setActiveGroup(group);
            onSelect && onSelect();
          }}
        >
          <div className="flex items-center gap-3 p-3">
            <span className="text-lg">{getGroupIcon(group)}</span>
            <span className="font-medium">{group}</span>
            {activeGroup === group && (
              <motion.div 
                layoutId="activeGroupIndicator"
                className="ml-auto w-2 h-2 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default Sidebar;
