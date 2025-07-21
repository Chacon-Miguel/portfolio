import ViewAllHeader from "@/components/ViewAllHeader";
import { motion } from "framer-motion";
import blog from "@/data/blog";
import BlogPost from "@/components/BlogPost";


export default function RecentBlogPosts() {
    const getTimeSafe = (dateStr: string | undefined) => {
        const date = new Date(dateStr ?? '');
        return isNaN(date.getTime()) ? 0 : date.getTime();
    };

    return (
        <div>
            <ViewAllHeader title="Recent Blog Posts" pageUrl="/blog" itemCount={blog.length} />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {blog
                    .slice()
                    .sort((a, b) => getTimeSafe(b.date) - getTimeSafe(a.date))
                    .slice(0, 3)
                    .map((post) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <BlogPost {...post} />
                        </motion.div>
                    ))}
            </div>
        </div>
    )

}