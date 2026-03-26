import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  index: number;
}

export function BlogCard({
  image,
  title,
  excerpt,
  author,
  date,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        {/* Read More Button */}
        <button className="flex items-center gap-2 text-pink-500 font-medium group-hover:gap-4 transition-all duration-300">
          <span>Leer más</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.article>
  );
}
