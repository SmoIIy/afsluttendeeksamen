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
	description:
		"Jeg er DJ Per, og jeg brænder for at skabe øjeblikke, hvor dansegulvet er fyldt, og stemningen er helt i top. Med en kærlighed til musik og erfaring fra mange forskellige events sørger jeg for, at musikken altid passer perfekt til festen og giver dig og dine gæster en oplevelse, I sent vil glemme.",
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
