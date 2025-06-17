
interface PageHeaderProps {
  title?: string;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  if (!title && !description) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>}
        {description && <p className="text-xl text-white/90 max-w-3xl mx-auto">{description}</p>}
      </div>
    </div>
  );
};
