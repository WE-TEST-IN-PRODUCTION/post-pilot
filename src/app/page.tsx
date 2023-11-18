"use client"
import { useRef, useState } from 'react'

export default function Home() {

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [showDatePicker, setShowDatePicker] = useState(false);

  

  return (
    <>
<section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Bienvenido</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
 
      <a className="block rounded-xl border border-gray-800 p-8 shadow-xl " href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            Texto
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            🚀 ¡Emocionado por unirme a Open Source Jam con Carlos Ignacio Cabruja Rodil y Fernando Nevot Hernández! 🚀
            <br />
                🌐 #OpenSourceJam #Contribución #Comunidad
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            
        </p>
      </a>  
    </div>
  </div>
</section>
    </>
  )
}
