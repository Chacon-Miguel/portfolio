"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import styled from "@emotion/styled";

interface WorkItemProps {
	slug: string;
	company: string;
	title: string;
	start: string;
	end: string;
	description: string;
	locations?: string[];
}

const MotionDiv = styled(motion.div)(({ theme }) => ({
	borderWidth: "1px",
	borderColor: theme.text.default,
	borderRadius: "12px",
	padding: "16px",
	boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	color: theme.text.default,
	backgroundColor: theme.background.surface,
	cursor: "pointer",
	transitionProperty:
		"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	":hover": {
		borderColor: theme.text.accent,
		backgroundColor: theme.background.elevated,
		color: theme.text.accent,
	},
}));

const StyledLink = styled(Link)`
	display: block;
`;

/**
 * A functional component that renders a work item with a link, title, company, start and end dates, description, and locations.
 */
export default function WorkItem({
	slug,
	company,
	title,
	start,
	end,
	description,
	locations,
}: WorkItemProps) {
	return (
		<StyledLink href={`/work/${slug}`}>
			<MotionDiv
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ opacity: { duration: 0.8 } }}
				whileHover={{
					scale: 1.05,
					transition: {
						type: "spring",
						stiffness: 200,
						damping: 30,
						duration: 0.4,
					},
				}}
			>
				<h3 className="text-xl font-semibold group-hover:text-blue-500 transition">
					{title} @ {company}
				</h3>

				{/* Duration and Locations */}
				<div className="mt-2 text-gray-500 flex flex-col sm:flex-row sm:items-center">
					<div className="flex items-center">
						<FaCalendarAlt className="w-4 h-4 mr-1" />
						<span>
							{start} – {end}
						</span>
					</div>
					{locations && locations.length > 0 && (
						<div className="flex items-center mt-1 sm:mt-0 sm:ml-2">
							<span className="hidden sm:inline mx-2">|</span>
							<FaMapMarkerAlt className="w-4 h-4 mr-1" />
							<span>{locations.join(", ")}</span>
						</div>
					)}
				</div>

				<p className="mt-2 text-gray-700">{description}</p>
			</MotionDiv>
		</StyledLink>
	);
}
