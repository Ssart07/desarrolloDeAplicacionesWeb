import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoryCard } from "./components/CategoryCard";
import { ProductCard } from "./components/ProductCard";
import { PromotionBanner } from "./components/PromotionBanner";
import { BlogCard } from "./components/BlogCard";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";
import {
  IceCream,
  Cookie,
  Sparkles,
  Heart,
  Coffee,
  Wine,
} from "lucide-react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    {
      icon: IceCream,
      title: "Helados Artesanales",
      category: "artesanales",
    },
    { icon: Cookie, title: "Sabores Clásicos", category: "clasicos" },
    { icon: Sparkles, title: "Sabores Premium", category: "premium" },
    { icon: Heart, title: "Sin Azúcar", category: "sin-azucar" },
    { icon: Coffee, title: "Postres Fríos", category: "postres" },
    { icon: Wine, title: "Bebidas Frías", category: "bebidas" },
  ];

  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1734747638453-dd5c0766add2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwaWNlJTIwY3JlYW0lMjBzY29vcCUyMHBpbmt8ZW58MXx8fHwxNzc0NDg5NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Fresa Silvestre",
      description: "Helado cremoso de fresas frescas con trozos naturales",
      price: 4.99,
      rating: 5,
      category: "clasicos",
    },
    {
      image:
        "https://images.unsplash.com/photo-1673551493011-2b5f771013d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzc0Mzg1MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Chocolate Belga",
      description: "Intenso chocolate importado, cremoso y delicioso",
      price: 5.49,
      rating: 5,
      category: "premium",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740594967618-23cd757b9291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwaWNlJTIwY3JlYW0lMjBlbGVnYW50fGVufDF8fHx8MTc3NDQ4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Vainilla Madagascar",
      description: "Vainilla auténtica con semillas reales de Madagascar",
      price: 4.49,
      rating: 5,
      category: "clasicos",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595948301200-ee47424be1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaWNlJTIwY3JlYW0lMjBncmVlbiUyMGZyZXNofGVufDF8fHx8MTc3NDQ4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Menta & Chips",
      description: "Refrescante menta con trozos de chocolate",
      price: 4.79,
      rating: 4,
      category: "artesanales",
    },
    {
      image:
        "https://images.unsplash.com/photo-1771127426573-c73cb821ef34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHNvcmJldCUyMHllbGxvdyUyMHRyb3BpY2FsfGVufDF8fHx8MTc3NDQ4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Mango Tropical",
      description: "Sorbete natural de mango sin azúcar añadida",
      price: 5.99,
      rating: 5,
      category: "sin-azucar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1741154854670-5ba2b8696b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHN1bmRhZSUyMHRvcHBpbmdzfGVufDF8fHx8MTc3NDQxODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Sundae Especial",
      description: "Copa de helado con toppings premium y salsa",
      price: 7.99,
      rating: 5,
      category: "postres",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const promotions = [
    {
      image:
        "https://images.unsplash.com/photo-1617010644337-b22e658053b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMGVhdGluZyUyMGljZSUyMGNyZWFtfGVufDF8fHx8MTc3NDQ4OTU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Combo Familiar",
      description:
        "4 litros de tus sabores favoritos con 20% de descuento. Perfecto para compartir momentos dulces en familia.",
      badge: "Ahorra 20%",
    },
    {
      image:
        "https://images.unsplash.com/photo-1687117792212-b218a3786b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrc2hha2UlMjBzbW9vdGhpZSUyMGRyaW5rfGVufDF8fHx8MTc3NDQ4OTU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nuevas Bebidas Frías",
      description:
        "Descubre nuestros milkshakes y smoothies con ingredientes naturales. Frescura y sabor en cada sorbo.",
      badge: "Nuevo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592766907999-d60db561bfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwaWNlJTIwY3JlYW0lMjBjb25lJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NDg5NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Edición Especial Primavera",
      description:
        "Sabores únicos de temporada: lavanda, rosa y pistacho. Disponibles por tiempo limitado.",
      badge: "Exclusivo",
    },
  ];

  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1673551493011-2b5f771013d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzc0Mzg1MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "El Arte de Hacer Helado Artesanal",
      excerpt:
        "Descubre el proceso tradicional detrás de cada deliciosa cucharada. Desde la selección de ingredientes hasta el punto perfecto de congelación.",
      author: "María Gómez",
      date: "15 Mar 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595948301200-ee47424be1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaWNlJTIwY3JlYW0lMjBncmVlbiUyMGZyZXNofGVufDF8fHx8MTc3NDQ4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "5 Combinaciones de Sabores Sorprendentes",
      excerpt:
        "Experimenta con estas mezclas únicas que elevarán tu experiencia heladera. ¿Te atreves a probar algo diferente?",
      author: "Carlos Ruiz",
      date: "10 Mar 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1741154854670-5ba2b8696b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHN1bmRhZSUyMHRvcHBpbmdzfGVufDF8fHx8MTc3NDQxODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Crea tu Propio Sundae Perfecto",
      excerpt:
        "Guía completa para construir el sundae de tus sueños. Aprende qué toppings combinan mejor con cada sabor de helado.",
      author: "Ana López",
      date: "5 Mar 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <Header onNavigate={scrollToSection} />

      <HeroSection onNavigate={scrollToSection} />

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Explora Nuestras Categorías
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra el helado perfecto para cada momento y ocasión
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.category}
                icon={category.icon}
                title={category.title}
                category={category.category}
                index={index}
                onClick={() => {
                  setSelectedCategory(
                    selectedCategory === category.category
                      ? null
                      : category.category
                  );
                  scrollToSection("products");
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {selectedCategory
                ? `Productos: ${
                    categories.find((c) => c.category === selectedCategory)
                      ?.title
                  }`
                : "Productos Destacados"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada sabor es una experiencia única, preparada con amor y los
              mejores ingredientes
            </p>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-pink-500 hover:text-purple-500 transition-colors font-medium"
              >
                Ver todos los productos
              </button>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Promociones Especiales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas exclusivas y descubre nuevos sabores
            </p>
          </motion.div>

          <div className="space-y-6">
            {promotions.map((promo, index) => (
              <PromotionBanner
                key={index}
                {...promo}
                index={index}
                onClick={() => scrollToSection("products")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Experiencias Dulces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Historias, recetas y consejos del mundo del helado artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
