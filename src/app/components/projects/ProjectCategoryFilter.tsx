"use client"
import { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';

interface ProjectCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectCategoryFilter: React.FC<ProjectCategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'bg-blue-500 border-blue-600 hover:bg-blue-600',
      'Agriculture': 'bg-green-500 border-green-600 hover:bg-green-600',
      'Healthcare': 'bg-red-500 border-red-600 hover:bg-red-600',
      'Education': 'bg-yellow-500 border-yellow-600 hover:bg-yellow-600',
      'Environment': 'bg-emerald-500 border-emerald-600 hover:bg-emerald-600',
      'All': 'bg-purple-600 border-purple-700 hover:bg-purple-700'
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-500 border-gray-600 hover:bg-gray-600';
  };

  const getInactiveStyle = (category: string) => {
    const colors = {
      'Technology': 'text-blue-700 border-blue-300 bg-blue-50 hover:bg-blue-100',
      'Agriculture': 'text-green-700 border-green-300 bg-green-50 hover:bg-green-100',
      'Healthcare': 'text-red-700 border-red-300 bg-red-50 hover:bg-red-100',
      'Education': 'text-yellow-700 border-yellow-300 bg-yellow-50 hover:bg-yellow-100',
      'Environment': 'text-emerald-700 border-emerald-300 bg-emerald-50 hover:bg-emerald-100',
      'All': 'text-purple-700 border-purple-300 bg-purple-50 hover:bg-purple-100'
    };
    
    return colors[category as keyof typeof colors] || 'text-gray-700 border-gray-300 bg-gray-50 hover:bg-gray-100';
  };

  return (
    <section className="py-6 bg-white shadow-md sticky top-20 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <FiFilter className="text-purple-600 mr-2" size={20} />
            <h2 className="text-lg font-bold text-gray-800">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === '' 
                  ? `text-white ${getCategoryColor('All')}` 
                  : getInactiveStyle('All')
              }`}
            >
              All Categories
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category 
                    ? `text-white ${getCategoryColor(category)}` 
                    : getInactiveStyle(category)
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategoryFilter;
