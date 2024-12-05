import "src/styles/globals.css";
import { Inter, Syne, Lexend_Exa } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const syne = Syne({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-syne",
});
const lexend = Lexend_Exa({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});

export const metadata = {
	description: "The React Framework for the Web",
	title: "Velkommen til DJ Per",
	icons: {
		icon: "/Favicon.svg",
	},
};

export default async function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${syne.variable} ${lexend.variable}`}
		>
			<body className="bg-dark-400 min-h-screen">{children}</body>
		</html>
	);
}
