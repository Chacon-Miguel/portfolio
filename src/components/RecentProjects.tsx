import ViewAllHeader from "@/components/ViewAllHeader";
import projects from "@/data/projects";
import { motion } from "framer-motion";
import ProjectTile from "@/components/ProjectTile";


export default function RecentProjects() {
    return (
        <div>
            <ViewAllHeader title="Recent Projects" pageUrl="/projects" itemCount={projects.length} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.slice(0, 4).map((proj) => (
                    <motion.div
                        key={proj.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectTile key={proj.slug} {...proj} />
                    </motion.div>
                ))}
            </div>
        </div>
    )

}