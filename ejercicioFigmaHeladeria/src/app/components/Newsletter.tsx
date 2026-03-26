import { motion } from "motion/react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ¡Únete a Nuestra Comunidad Dulce!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Suscríbete y recibe promociones exclusivas, nuevos sabores y eventos especiales directamente en tu correo.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2 mx-auto"
              >
                <span>Suscribirse</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                ¡Bienvenido a la familia HelaDeli!
              </h3>
              <p className="text-gray-600">
                Te hemos enviado un email de confirmación. Revisa tu bandeja de entrada.
              </p>
            </motion.div>
          )}

          {/* Benefits */}
          {!isSubmitted && (
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Descuentos exclusivos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Nuevos sabores primero</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Eventos especiales</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
