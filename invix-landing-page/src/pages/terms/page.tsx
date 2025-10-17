import type React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./sections/privacypolicy";
import TermsConditions from "./sections/termsconditions";

const TermsPage: React.FC = () => {
	const [activePage, setActivePage] = useState<"terms" | "privacy">("privacy");
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.includes("privacy")) {
			setActivePage("privacy");
		} else {
			setActivePage("terms");
		}
	}, [location.pathname]);

	const handleNavigate = (page: "terms" | "privacy") => {
		setActivePage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
			<div className="w-full flex justify-center py-8">
				<div className="inline-flex rounded-lg shadow-sm border border-gray-200 bg-white p-1">
					<button
						type="button"
						onClick={() => handleNavigate("terms")}
						className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
							activePage === "terms"
								? "text-white"
								: "text-gray-600 hover:bg-gray-50"
						}`}
						style={
							activePage === "terms"
								? { backgroundColor: "#4351BC" }
								: undefined
						}
					>
						Terms and Conditions
					</button>
					<button
						type="button"
						onClick={() => handleNavigate("privacy")}
						className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
							activePage === "privacy"
								? "text-white"
								: "text-gray-600 hover:bg-gray-50"
						}`}
						style={
							activePage === "privacy"
								? { backgroundColor: "#4351BC" }
								: undefined
						}
					>
						Privacy Policy
					</button>
				</div>
			</div>

			<div>
				{activePage === "privacy" ? <PrivacyPolicy /> : <TermsConditions />}
			</div>
		</div>
	);
};

export default TermsPage;
