import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  category: string;
  onClick: () => void;
  index: number;
}

export function CategoryCard({
  icon: Icon,
  title,
  onClick,
  index,
}: CategoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300 hover:-translate-y-2"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
      </div>
    </motion.button>
  );
}
