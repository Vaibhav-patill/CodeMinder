import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SheetCard from "./SheetCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Explore = () => {
    const [search, setSearch] = useState("");
    const [sheets, setSheets] = useState([]);
    const fetchSheets = async () => {
        const response = await axios.get("http://localhost:4000/api/sheets")
        setSheets(response.data?.data)
    }
    useEffect(() => {
        fetchSheets()
    })

    return (
        <div className="flex flex-col m-4 w-full h-full gap-8 no-scrollbar relative">
            <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-darkText-300">
                    Track Coding Sheets in One Place
                </h3>
                <p className="text-sm text-gray-600 dark:text-darkText-400">
                    Choose from 30+ structured coding paths
                </p>
            </div>


            <div className="relative w-full max-w-[26rem]">
                <Search className="absolute w-5 h-5 text-gray-400 right-3 top-1/2 -translate-y-1/2" />
                <Input
                    type="text"
                    placeholder="Search any coding sheet"
                    className="w-full p-2 pr-10 text-gray-800 bg-white border shadow-sm dark:border-darkBorder-700 dark:bg-dark-900 dark:text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* All Sheets Section */}
            <div className="flex flex-col gap-2 ">
                <h2 className="text-lg font-medium text-gray-500 dark:text-darkText-400">
                    All Sheets
                </h2>
                <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {sheets?.map((sheet) => (
                        <Link to={`sheet/${sheet._id}`}>
                            <SheetCard key={sheet._id} title={sheet.title} description={sheet.description} questions={sheet.questions.length} />
                        </Link>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Explore;
