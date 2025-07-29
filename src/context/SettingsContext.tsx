"use client"; // only if using Next.js App Router

import { createContext, useContext, useState, useMemo, ReactNode } from "react";

type Settings = {
	darkMode: boolean;
	toggleDark: () => void;
};

const SettingsContext = createContext<Settings | undefined>(undefined);

export function useSettings() {
	const context = useContext(SettingsContext);
	if (!context)
		throw new Error("useSettings must be used inside SettingsProvider");
	return context;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);
	const value = useMemo(
		() => ({
			darkMode,
			toggleDark: () => setDarkMode((d) => !d),
		}),
		[darkMode]
	);

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	);
}
