import React from 'react'
import BlogList from '../components/BlogList'
import Feature from '../components/Feature'
import FeatureSection from '../components/FeatureSection';

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Bienvenido a Nuestro Blog</h1>
        <p className="text-lg text-gray-600 mb-8">Descubrí contenido interesante y actualizado sobre diversos temas que te apasionan.</p>
        
        <FeatureSection />

        <div className="mt-20">
          <BlogList />
        </div>

        <Feature />
      </div>
    </div>
  );
};


export default BlogPage

  