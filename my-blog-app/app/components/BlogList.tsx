import { FC } from 'react';
import Link from 'next/link';
import blogs from '../helpers/blogs';

const BlogList: FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Últimos Artículos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 bg-white rounded-lg shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-2">Por {blog.author}</p>
            <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <Link href={`/blog/${blog.id}`}>
              <span className="text-blue-600 hover:underline">Leer más</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
