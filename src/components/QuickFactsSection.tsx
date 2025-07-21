import { FaBook, FaBuilding, FaGamepad, FaLanguage, FaMapMarkerAlt, FaSkiing, FaTools, FaUniversity } from "react-icons/fa";

export default function QuickFactsSection() {
    return (
        <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Quick & Fun Facts</h2>

            <div className="flex flex-wrap justify-center gap-3 px-4 max-w-4xl mx-auto">
                {[
                    { icon: FaBuilding, label: "Hypernova Labs" },
                    { icon: FaUniversity, label: "Computer Science Grad @ VuA" },
                    { icon: FaMapMarkerAlt, label: "Lille, France" },
                    { icon: FaBook, label: "Book Reviewer" },
                    { icon: FaLanguage, label: "EN / ES / DE" },
                    { icon: FaTools, label: "Full-Stack Dev" },
                    { icon: FaGamepad, label: "Sci-fi Fan" },
                    { icon: FaSkiing, label: "Skiing Enthusiast" },
                ].map((fact, i) => {
                    const Icon = fact.icon;
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800
                                    text-sm text-gray-700 dark:text-gray-300 rounded-full shadow-md transition"
                        >
                            <Icon className="text-blue-500 dark:text-blue-400 text-base" />
                            <span>{fact.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
