import { FC } from 'react';
import { useRouter } from 'next/router';

type BlogPostType = {
  [key: number]: {
    title: string;
    content: string;
  };
};

const blogPosts: BlogPostType = {
  1: { title: 'Cómo aprender Next.js', content: 'Una guía completa para aprender Next.js desde cero. Aquí encontrarás recursos, tutoriales y más.' },
  2: { title: 'Introducción a Tailwind CSS', content: 'Descubre cómo utilizar Tailwind CSS en tus proyectos. Tailwind CSS es un framework de CSS altamente personalizable.' },
  3: { title: 'Desarrollo web con TypeScript', content: 'Beneficios y buenas prácticas del uso de TypeScript en el desarrollo web. TypeScript ayuda a mejorar la calidad del código.' },
};

const BlogPost: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Asegurarse de que id es una cadena
  if (typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  // Convertir id a número
  const blogId = parseInt(id, 10);

  // Validar si blogId es un número válido y está dentro de las claves de blogPosts
  if (isNaN(blogId) || !blogPosts.hasOwnProperty(blogId)) {
    return <div>Loading...</div>;
  }

  const blog = blogPosts[blogId];

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-700">{blog.content}</div>
    </div>
  );
};

export default BlogPost;