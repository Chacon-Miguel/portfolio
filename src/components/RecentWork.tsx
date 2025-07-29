import { motion } from "framer-motion";
import ViewAllHeader from "@/components/ViewAllHeader";
import work from "@/data/work";
import WorkItem from "@/components/WorkItem";
// import styled from "@emotion/styled";

export default function RecentWork() {
	return (
		<div>
			<ViewAllHeader
				title="Work Experience"
				pageUrl="/work"
				itemCount={work.length}
			/>
			<div className="grid gap-4">
				{work.slice(0, 3).map((job, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						<WorkItem {...job} />
					</motion.div>
				))}
			</div>
		</div>
	);
}
