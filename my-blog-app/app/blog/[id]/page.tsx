import blogs, { Blog } from '@/app/helpers/blogs';
import { FC } from 'react';


interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage: FC<BlogPageProps> = ({ params }) => {
  const blog: Blog | undefined = blogs.find((blog) => blog.id.toString() === params.id);

  if (!blog) {
    return <div>Blog no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <div className="flex items-center mb-6">
          <p className="text-gray-600 mr-4">Por {blog.author}</p>
          <p className="text-gray-600">{new Date(blog.date).toLocaleDateString()}</p>
        </div>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <p className="text-gray-600 mb-6">{blog.content}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blog.sections.map((section, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading}</h2>
              <p className="text-gray-600">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;