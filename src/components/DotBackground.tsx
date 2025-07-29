import styled from "@emotion/styled";

const Background = styled.div`
	position: fixed;

	inset: 0px;

	z-index: -10;

	background-size: 30px 30px;
`;

/**
 * 
 *             fixed inset-0 -z-10
            bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)]
            dark:bg-[radial-gradient(circle,_#3f3f46_1px,_transparent_1px)]
            bg-[length:30px_30px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]

 */

export default function DotBackground() {
	return <Background />;
}
