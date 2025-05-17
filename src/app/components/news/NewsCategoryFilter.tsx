"use client"
import { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';

interface NewsCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const NewsCategoryFilter: React.FC<NewsCategoryFilterProps> = ({ 
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
      'News': 'bg-blue-500 border-blue-600 hover:bg-blue-600',
      'Notice': 'bg-yellow-500 border-yellow-600 hover:bg-yellow-600',
      'Event Recap': 'bg-green-500 border-green-600 hover:bg-green-600',
      'Announcement': 'bg-purple-500 border-purple-600 hover:bg-purple-600',
      'All': 'bg-indigo-600 border-indigo-700 hover:bg-indigo-700'
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-500 border-gray-600 hover:bg-gray-600';
  };

  const getInactiveStyle = (category: string) => {
    const colors = {
      'News': 'text-blue-700 border-blue-300 bg-blue-50 hover:bg-blue-100',
      'Notice': 'text-yellow-700 border-yellow-300 bg-yellow-50 hover:bg-yellow-100',
      'Event Recap': 'text-green-700 border-green-300 bg-green-50 hover:bg-green-100',
      'Announcement': 'text-purple-700 border-purple-300 bg-purple-50 hover:bg-purple-100',
      'All': 'text-indigo-700 border-indigo-300 bg-indigo-50 hover:bg-indigo-100'
    };
    
    return colors[category as keyof typeof colors] || 'text-gray-700 border-gray-300 bg-gray-50 hover:bg-gray-100';
  };

  return (
    <section className="py-6 bg-white shadow-md sticky top-20 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <FiFilter className="text-indigo-600 mr-2" size={20} />
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

export default NewsCategoryFilter;
