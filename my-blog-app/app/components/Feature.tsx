import { FC } from 'react';

const Feature: FC = () => {
  return (
    <div className="mt-12 bg-blue-100 p-6 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Por qué elegir nuestro blog?</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Contenido de Calidad</h3>
          <p className="text-gray-600">Nuestros artículos están escritos por expertos en sus respectivos campos.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Actualizaciones Frecuentes</h3>
          <p className="text-gray-600">Publicamos nuevos artículos y actualizaciones de forma regular.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Diversidad de Temas</h3>
          <p className="text-gray-600">Desde tecnología hasta estilo de vida, cubrimos una amplia gama de temas.</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;