"use client"

'use client';

import { LinkedInButton } from "./LinkedInButton";
import Image from "next/image";

const HeroPage = () => {
  const imageUrl =
    "https://assets-global.website-files.com/5f7ece8a7da656e8a25402bc/63f341ceba98d38096d56a48_How%20to%20turn%20a%20LinkedIn%20comment%20into%20a%20post.png";

  return (
    <>
      <header className="flex flex-row p-6 justify-between border-b-4">
        <h1 className="text-5xl font-bold">post-pilot</h1>
        <LinkedInButton />
      </header>
      <section className="flex flex-row-reverse justify-center">
        <div className="p-6 w-2/3">
          <Image
            loader={() => imageUrl}
            height="1000"
            width="1000"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="p-6 w-1/3">
          Una arquitectura sólida de microservicios, aprovechando tecnologías de
          contenedorización como Docker y Kubernetes para garantizar la máxima
          eficiencia y escalabilidad. La plataforma de gestión de redes sociales
          es esencialmente un sistema de software que utiliza diversas APIs
          proporcionadas por las distintas plataformas de redes sociales (como
          Facebook, Twitter, Instagram, etc.) para interactuar con ellas de
          manera centralizada Es una plataforma que centraliza la gestión de
          redes sociales, permitiendo a los usuarios administrar y automatizar
          sus cuentas en diversas plataformas desde un único panel. La
          plataforma se enfoca en ofrecer herramientas intuitivas y eficientes
          para programar publicaciones, analizar métricas clave y mejorar la
          interacción con la audiencia.
        </div>
      </section>
    </>
  );
};

export default HeroPage;
