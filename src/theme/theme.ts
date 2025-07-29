// src/theme/theme.ts
export const lightTheme = {
	colors: {
		primary: "#4f46e5",
		secondary: "#9333ea",
		accent: "#10b981",
		muted: "#e5e7eb",
		border: "#d1d5db",
		danger: "#ef4444",
		success: "#22c55e",
		warning: "#facc15",
		info: "#3b82f6",
	},
	background: {
		default: "#ffffff",
		surface: "#f9fafb",
		elevated: "#ffffff",
	},
	text: {
		primary: "#111827",
		secondary: "#4b5563",
		inverted: "#ffffff",
		muted: "#6b7280",
		default: "#111827",
		accent: "#111827",
	},
	spacing: {
		xs: "0.25rem",
		sm: "0.5rem",
		md: "1rem",
		lg: "2rem",
		xl: "4rem",
	},
	radii: {
		sm: "4px",
		md: "8px",
		lg: "16px",
	},
	shadows: {
		sm: "0 1px 2px rgba(0,0,0,0.05)",
		md: "0 4px 6px rgba(0,0,0,0.1)",
		lg: "0 10px 15px rgba(0,0,0,0.15)",
	},
};

export const darkTheme: typeof lightTheme = {
	colors: {
		primary: "#818cf8",
		secondary: "#c084fc",
		accent: "#34d399",
		muted: "#374151",
		border: "#4b5563",
		danger: "#f87171",
		success: "#4ade80",
		warning: "#fde047",
		info: "#60a5fa",
	},
	background: {
		default: "#111827",
		surface: "#1f2937",
		elevated: "#374151",
	},
	text: {
		primary: "#f9fafb",
		secondary: "#d1d5db",
		inverted: "#111827",
		muted: "#9ca3af",
		default: "#111827",
		accent: "#111827",
	},
	spacing: lightTheme.spacing,
	radii: lightTheme.radii,
	shadows: lightTheme.shadows,
};

export type Theme = typeof lightTheme;
