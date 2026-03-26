import { IceCreamCone, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const categories = [
    { label: "Helados Artesanales", section: "products" },
    { label: "Sabores Clásicos", section: "products" },
    { label: "Sabores Premium", section: "products" },
    { label: "Sin Azúcar", section: "products" },
    { label: "Postres Fríos", section: "products" },
    { label: "Bebidas", section: "products" },
  ];

  const support = [
    { label: "Preguntas Frecuentes", section: "newsletter" },
    { label: "Envíos", section: "newsletter" },
    { label: "Devoluciones", section: "newsletter" },
    { label: "Métodos de Pago", section: "newsletter" },
  ];

  const legal = [
    { label: "Términos y Condiciones", section: "newsletter" },
    { label: "Política de Privacidad", section: "newsletter" },
    { label: "Política de Cookies", section: "newsletter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <button
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-2 rounded-full group-hover:scale-110 transition-transform">
                <IceCreamCone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">HelaDeli</span>
            </button>
            <p className="text-gray-400 mb-4">
              Los mejores helados artesanales y postres fríos, elaborados con amor y los ingredientes más frescos.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(item.section)}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(item.section)}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Calle Dulce 123, Ciudad Helada</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@heladeli.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 HelaDeli. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legal.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(item.section)}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
