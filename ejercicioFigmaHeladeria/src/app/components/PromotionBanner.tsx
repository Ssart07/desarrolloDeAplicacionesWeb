import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PromotionBannerProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
  onClick: () => void;
  index: number;
}

export function PromotionBanner({
  image,
  title,
  description,
  badge,
  onClick,
  index,
}: PromotionBannerProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300 text-left w-full"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video md:aspect-square">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {badge && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            {description}
          </p>
          <div className="flex items-center gap-2 text-pink-500 group-hover:gap-4 transition-all duration-300">
            <span className="font-semibold">Ver más</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
