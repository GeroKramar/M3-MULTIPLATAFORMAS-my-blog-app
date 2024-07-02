import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    
<div className="bg-gray-100  overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
            <span className="block">
            Bienvenido a Nuestro Blog
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-700">
        Descubrí contenido interesante y actualizado sobre diversos temas que te apasionan. 
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
            <Link href="/blog">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Acceder al Blog
                </button>
                </Link>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src="https://lideresmexicanos.com/wp-content/uploads/2019/03/EmprendedorDigital.jpg" className="w-1/2 rounded-lg" alt="Tree"/>
        <div>
            <img src="https://s1.elespanol.com/2023/12/26/ciencia/salud/820178596_238716989_1706x960.jpg" className="mb-8 rounded-lg" alt="Tree"/>
            <img src="https://recla.org/wp-content/uploads/2023/08/representacion-grafica-de-la-salud-y-bienestar-ods.webp" className="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>
  );
};

export default HomePage;

