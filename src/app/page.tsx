"use client";

import { motion } from "framer-motion";
import IntroSection from "@/components/IntroSection";
import RecentWork from "@/components/RecentWork";
import RecentProjects from "@/components/RecentProjects";
import RecentBlogPosts from "@/components/RecentBlogPosts";

/**
 * Home component that serves as the main landing page for the portfolio.
 * This is accessed at the root URL ("/") of the application.
 */
export default function Home() {
	return (
		<section className="px-4 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="text-center mt-2"
			>
				<IntroSection />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="mt-16"
			>
				<RecentWork />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="mt-16"
			>
				<RecentProjects />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="mt-16 mb-12"
			>
				<RecentBlogPosts />
			</motion.div>
		</section>
	);
}
