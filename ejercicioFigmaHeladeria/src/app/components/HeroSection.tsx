import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/20 via-transparent to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight"
            >
              Disfruta el Sabor de la Felicidad
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Descubre nuestros helados artesanales, elaborados con ingredientes premium y sabores únicos. 
              Postres fríos que crean momentos dulces para toda la familia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => onNavigate("products")}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                Explorar Sabores
              </button>
              <button
                onClick={() => onNavigate("promotions")}
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-300 rounded-full hover:bg-purple-50 hover:scale-105 transition-all duration-300 font-medium"
              >
                Ver Promociones
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592766907999-d60db561bfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwaWNlJTIwY3JlYW0lMjBjb25lJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NDg5NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Delicious artisan ice cream"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
