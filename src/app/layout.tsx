"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Gabarito } from "next/font/google";
import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { lightTheme, darkTheme } from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DotBackground from "@/components/DotBackground";
import { SettingsProvider } from "@/context/SettingsContext";

const gabarito = Gabarito({
	variable: "--font-gabarito",
	subsets: ["latin"],
});

// export const metadata: Metadata = {
// 	title: "Miguel Chacon",
// 	description: "Miguel Chacons portfolio website",
// 	icons: {
// 		icon: "/icons/favicon.ico",
// 		shortcut: "/icons/favicon.ico",
// 		apple: "/icons/favicon.ico",
// 	},
// 	metadataBase: new URL("https://miguelchacon.dev"),
// 	openGraph: {
// 		title: "Miguel Chacons portfolio website",
// 		description: "Miguel Chacon portfolio website",
// 		url: "https://nextjs-portofolio-website.vercel.app",
// 		siteName: "Miguel Chacon portfolio website",
// 		images: [
// 			{
// 				url: "/og-image.png",
// 				width: 1200,
// 				height: 630,
// 				alt: "Miguel Chacon",
// 			},
// 		],
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "Miguel Chacon",
// 		description: "",
// 		images: ["/og-image.png"],
// 	},
// };

// This script initializes the theme based on user preference or saved settings
// And is used to avoid FOUC (Flash of Unstyled Content) on the initial load
const themeInitScript = `
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<html
			lang="en"
			className={`${gabarito.className} ${gabarito.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<title>My Developer Portfolio</title>
			</head>
			<body
				className={`antialiased flex flex-col min-h-screen transition-colors ${gabarito.className} ${gabarito.variable}`}
			>
				<SettingsProvider>
					{/* Dot Background Layer */}
					<DotBackground />
					<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
						<Header />
						<main className="flex-grow container mx-auto px-4 py-6">
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				</SettingsProvider>
			</body>
		</html>
	);
}
