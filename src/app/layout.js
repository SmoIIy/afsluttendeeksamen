import "src/styles/globals.css";
import { Inter, Syne } from "next/font/google";

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

export const metadata = {
	description: "The React Framework for the Web",
	title: "Velkommen til DJ Per",
};

export default async function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable} ${syne.variable}`}>
			<body className="bg-dark-400">{children}</body>
		</html>
	);
}
