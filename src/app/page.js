import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF7F0] flex flex-col items-center justify-between p-8 sm:p-16 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-[#FF8BA7] mb-4">
          NUTRICEREAL
        </h1>
        <p className="text-lg max-w-xl text-[#6B7280] text-justify">
          Desde la perspectiva de la ingeniería agronómica, te damos la
          bienvenida a este espacio en donde podrás descubrir información
          detallada sobre cereales de desayuno, tanto nacionales como
          importados. Explora sus propiedades nutricionales, origen, procesos de
          cultivo y cómo estos alimentos impactan en una dieta equilibrada y
          sostenible.
        </p>
      </header>

      {/* MAIN */}
      <main className="mt-12 flex flex-col items-stretch gap-8 sm:flex-row sm:justify-center sm:items-stretch">
        {/* Tarjeta 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-xs w-full flex flex-col">
          <Image
            src="/semillas.jpg"
            alt="Ensalada saludable"
            width={300}
            height={200}
            className="mb-4 object-cover w-full h-48"
          />
          <h2 className="text-2xl text-center font-bold text-[#F5A524]">
            Desde el Campo
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-justify flex-grow">
            En el campo venezolano, algunos de los cereales que se cultivan son
            el maíz y el arroz. El maíz, en particular, es uno de los cultivos
            más importantes del país. ¿Te gustaría saber algo más sobre la
            producción de cereales en Venezuela o tal vez sobre algún cereal en
            específico?
          </p>
          <button className="text-blue-400 cursor-pointer mt-4 self-start">
            <Link href="/productos">Haz click aquí.</Link>
          </button>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-xs w-full flex flex-col">
          <Image
            src="/cereales.jpg"
            alt="Frutas frescas"
            width={300}
            height={200}
            className="mb-4 object-cover w-full h-48"
          />
          <h2 className="text-2xl font-bold text-[#6C63FF] text-center">
            Información Nutricional
          </h2>
          <p className="text-sm text-gray-600 mt-2 text-justify flex-grow">
            Los cereales de desayuno son una opción para comenzar el día. Hay
            una gran variedad disponible, desde hojuelas de maíz azucaradas
            hasta opciones integrales con alto contenido de fibra. Si tienes
            alguna pregunta más específica sobre algún tipo de cereal o buscas
            recomendaciones, llegaste al sitio ideal.
          </p>
          <button className="text-blue-400 cursor-pointer mt-4 self-start">
            <Link href="/productos">Haz click aquí.</Link>
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2025 NUTRICEREAL. Todos los derechos reservados.
      </footer>
    </div>
  );
}
