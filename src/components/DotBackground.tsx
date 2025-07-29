import { useSettings } from "@/context/SettingsContext";
import styled from "@emotion/styled";

// const Background = styled.div`
const Background = styled.div`
	position: fixed;
	inset: 0;
	z-index: -10;
	background-size: 30px 30px;
	background-image: ${({ darkMode }: { darkMode: boolean }) =>
		darkMode
			? `radial-gradient(circle, #3f3f46 1px, transparent 1px)`
			: `radial-gradient(circle, rgb(209, 213, 219) 1px, rgba(0, 0, 0, 0) 1px`};

	mask-image: radial-gradient(
		50% 50%,
		rgb(0, 0, 0) 60%,
		rgba(0, 0, 0, 0) 100%
	);
`;

export default function DotBackground() {
	const { darkMode } = useSettings();
	return <Background darkMode={darkMode} />;
}
