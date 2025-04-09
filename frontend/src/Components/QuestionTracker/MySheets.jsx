import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SheetCard from "./SheetCard";
import axios from "axios";
import { FilePlus } from "lucide-react";

const MySheets = () => {
  const user = useSelector((state) => state.auth.user);
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?._id) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/sheets/followed/list`)
      .then(({ data }) => setSheets(data?.data || []))
      .catch(() => setSheets([]))
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-center text-gray-700">
          Please log in to view your sheets.
        </h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500 text-sm animate-pulse">Loading sheets...</p>
      </div>
    );
  }

  if (sheets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-r from-white to-gray-50 p-8 rounded-lg border shadow-inner">
        <FilePlus className="w-14 h-14 text-indigo-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">No Sheets Found</h2>
        <p className="text-sm text-gray-600 mt-2">
          You haven’t followed any sheets yet. Discover and follow to get started!
        </p>
        <Button
          className="mt-6 px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200"
          onClick={() => (window.location.href = "/question-tracker/explore")}
        >
          Add Sheets
        </Button>
      </div>
    );
  }

  return (
    <section className="w-full md:mb-10 md:p-4">
      <div className="mb-6 text-center md:text-left">
        <h3 className="text-3xl font-bold text-gray-800 mb-1">My Sheets</h3>
        <p className="text-sm text-gray-600">View and access all your followed practice sheets</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {sheets.map((sheet) => (
          <Link key={sheet._id} to={`/question-tracker/explore/sheet/${sheet.id}`}>
            <div className="transform hover:-translate-y-1 hover:shadow-lg transition duration-200">
              <SheetCard
                title={sheet.title}
                description={sheet.description}
                questions={sheet.totalQuestions}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MySheets;
