"use client";

import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const blogs = [
  {
    title: "How AI is Changing Creative Writing",
    description:
      "Explore how artificial intelligence tools like NolanAI help writers brainstorm, edit, and publish with ease.",
    author: "Jane Doe",
    date: "Apr 5, 2025",
    image:
      "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg",
  },
  {
    title: "Top 5 AI Features You Should Try in 2025",
    description:
      "From real-time feedback to cloud scripting, discover the latest AI features taking content creation to the next level.",
    author: "John Smith",
    date: "Mar 27, 2025",
    image:
      "https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp",
  },
  {
    title: "Behind the Scenes: How NolanAI Thinks",
    description:
      "A peek into the technology stack and neural networks powering our intelligent writing assistant.",
    author: "Dr. Eliza Grant",
    date: "Mar 12, 2025",
    image:
      "https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#0c0c1c] to-[#040414] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Our AI Blog
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Stay updated with the latest insights, features, and updates from
            the world of AI and creative tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-base-200 rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCalendarAlt /> {blog.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
