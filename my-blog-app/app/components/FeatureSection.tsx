import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className="relative max-w-screen-xl p-4 mx-auto bg-white sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
          <div className="mx-auto lg:max-w-2xl">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase text-center">
              Blog de Tecnología
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 text-center">
              Las últimas novedades en tecnología y desarrollo personal.
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 text-center">
              Descubre contenido interesante y actualizado sobre diversos temas, desde inteligencia artificial hasta estrategias de desarrollo personal.
            </p>
            <ul className="gap-6 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-center">
              <li className="mt-6">
                <div className="flex justify-center">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                    Actualizaciones en tiempo real
                  </span>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex justify-center">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                    Seguimiento de datos
                  </span>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex justify-center">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                    Soporte 24/7
                  </span>
                </div>
              </li>
              <li className="mt-6">
                <div className="flex justify-center">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                    Consejos gratuitos para mejorar tu productividad
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
