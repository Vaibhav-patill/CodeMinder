import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatFeed from "./ChatFeed";
import MessageInput from "./MessageInput";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiMenu, FiMessageSquare, FiUsers, FiSettings } from "react-icons/fi";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function CommunityChat() {
  const [activeGroup, setActiveGroup] = useState("Web Development");
  const [messages, setMessages] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || {};
    setMessages(storedMessages);
  }, []);

  const addMessage = (newMessage) => {
    const updatedMessages = {
      ...messages,
      [activeGroup]: [
        ...(messages[activeGroup] || []),
        {
          ...newMessage,
          id: Date.now(),
          timestamp: new Date().toISOString(),
        },
      ],
    };
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  return (
    <div className="pt-20 px-2 sm:px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 min-h-screen">
      <Card className="h-[calc(100vh-6rem)] rounded-3xl shadow-xl border border-gray-200/80 flex overflow-hidden bg-white/95 backdrop-blur-sm">
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <div className="absolute top-4 left-4 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-full bg-white shadow-md border border-gray-200"
            >
              <FiMenu className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        )}

        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <motion.div
              initial={{ x: isMobile ? -300 : 0 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-64 bg-gradient-to-b from-indigo-600 to-blue-600 border-r border-blue-500/30 ${
                isMobile ? "fixed inset-y-0 left-0 z-10 shadow-2xl" : "flex"
              } flex-col`}
            >
              <div className="p-4 flex items-center justify-between border-b border-blue-500/30">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FiMessageSquare className="h-5 w-5" />
                  <span>Chat Groups</span>
                </h2>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/80 hover:text-white hover:bg-blue-700/50 rounded-full"
                    >
                      <FiSettings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
              </div>

              <ScrollArea className="flex-1 p-2 space-y-1">
                <Sidebar
                  setActiveGroup={setActiveGroup}
                  activeGroup={activeGroup}
                  onSelect={() => isMobile && setSidebarOpen(false)}
                />
              </ScrollArea>

              <div className="p-4 border-t border-blue-500/30">
                <div className="flex items-center justify-between text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <FiUsers className="h-4 w-4" />
                    <span>Online: 24</span>
                  </div>
                  <span className="bg-blue-500/30 px-2 py-1 rounded-full text-xs">Beta</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col relative bg-white/90">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 border-b border-blue-400/30 py-4 px-6 shadow-sm">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white/20 p-1.5 rounded-lg">
                  {activeGroup === "Web Development" && "💻"}
                  {activeGroup === "Design" && "🎨"}
                  {activeGroup === "Marketing" && "📈"}
                  {activeGroup === "General" && "💬"}
                </span>
                <motion.span
                  key={activeGroup}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeGroup}
                </motion.span>
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">42 members</span>
                <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full p-4">
              <ChatFeed chatHistory={messages[activeGroup] || []} activeGroup={activeGroup} />
            </ScrollArea>
          </CardContent>

          <Separator className="bg-gray-200/50" />

          <CardFooter className="p-4 bg-white/95 border-t border-gray-200/50">
            <motion.div
              className="w-full bg-white shadow-sm rounded-xl p-3 border border-gray-200/70 flex items-center"
              whileHover={{ boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <MessageInput addMessage={addMessage} />
            </motion.div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default CommunityChat;
