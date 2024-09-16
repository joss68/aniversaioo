import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const pages = [
  { content: "Nuestro Amor Kitty", type: "title", image: "/placeholder.svg?height=200&width=200" },
  { content: "El día que nos encontramos, como Kitty encuentra un nuevo amigo...", type: "text", image: "/placeholder.svg?height=150&width=150" },
  { content: "Nuestra primera cita dulce como un pastel de fresa", type: "text", image: "/placeholder.svg?height=150&width=150" },
  { content: "Momentos Kitty favoritos juntos", type: "text", image: "/placeholder.svg?height=150&width=150" },
  { content: "Lo que más amo de ti, tan especial como el lazo de Kitty", type: "text", image: "/placeholder.svg?height=150&width=150" },
  { content: "Nuestros sueños Kitty para el futuro", type: "text", image: "/placeholder.svg?height=150&width=150" },
  { content: "Feliz Aniversario, mi Kitty amor", type: "title", image: "/placeholder.svg?height=200&width=200" },
]

export default function HelloKittyAnniversaryBook() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full aspect-[3/2] bg-white rounded-3xl shadow-2xl overflow-hidden flex border-8 border-pink-300">
        <button 
          onClick={prevPage} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-4 border-pink-300"
          disabled={currentPage === 0}
        >
          <ChevronLeft className="w-6 h-6 text-pink-500" />
        </button>
        <button 
          onClick={nextPage} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-4 border-pink-300"
          disabled={currentPage === pages.length - 1}
        >
          <ChevronRight className="w-6 h-6 text-pink-500" />
        </button>
        <div className="flex-1 border-r-8 border-pink-300 p-8 bg-pink-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col justify-center items-center text-center space-y-4"
            >
              {pages[currentPage].type === "title" ? (
                <h1 className="text-4xl font-bold text-pink-600 font-comic">{pages[currentPage].content}</h1>
              ) : (
                <p className="text-xl text-pink-700 font-comic">{pages[currentPage].content}</p>
              )}
              <img src={pages[currentPage].image} alt="Hello Kitty" className="w-32 h-32 object-contain" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex-1 p-8 bg-pink-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + 1}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col justify-center items-center space-y-4"
            >
              {currentPage < pages.length - 1 ? (
                <>
                  {pages[currentPage + 1].type === "title" ? (
                    <h1 className="text-4xl font-bold text-pink-600 font-comic">{pages[currentPage + 1].content}</h1>
                  ) : (
                    <p className="text-xl text-pink-700 font-comic">{pages[currentPage + 1].content}</p>
                  )}
                  <img src={pages[currentPage + 1].image} alt="Hello Kitty" className="w-32 h-32 object-contain" />
                </>
              ) : (
                <img src="/placeholder.svg?height=200&width=200" alt="Hello Kitty Heart" className="w-48 h-48 object-contain" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}