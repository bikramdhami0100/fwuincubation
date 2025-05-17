"use client"
import { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';

interface ProgramCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  levels: string[];
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

const ProgramCategoryFilter: React.FC<ProgramCategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  levels,
  selectedLevel,
  onLevelChange
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Engineering': 'bg-blue-500 border-blue-600 hover:bg-blue-600',
      'Management': 'bg-amber-500 border-amber-600 hover:bg-amber-600',
      'Science & Technology': 'bg-green-500 border-green-600 hover:bg-green-600',
      'Humanities': 'bg-red-500 border-red-600 hover:bg-red-600',
      'Education': 'bg-purple-500 border-purple-600 hover:bg-purple-600',
      'All': 'bg-indigo-600 border-indigo-700 hover:bg-indigo-700'
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-500 border-gray-600 hover:bg-gray-600';
  };

  const getInactiveStyle = (category: string) => {
    const colors = {
      'Engineering': 'text-blue-700 border-blue-300 bg-blue-50 hover:bg-blue-100',
      'Management': 'text-amber-700 border-amber-300 bg-amber-50 hover:bg-amber-100',
      'Science & Technology': 'text-green-700 border-green-300 bg-green-50 hover:bg-green-100',
      'Humanities': 'text-red-700 border-red-300 bg-red-50 hover:bg-red-100',
      'Education': 'text-purple-700 border-purple-300 bg-purple-50 hover:bg-purple-100',
      'All': 'text-indigo-700 border-indigo-300 bg-indigo-50 hover:bg-indigo-100'
    };
    
    return colors[category as keyof typeof colors] || 'text-gray-700 border-gray-300 bg-gray-50 hover:bg-gray-100';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Undergraduate': 'bg-teal-500 border-teal-600 hover:bg-teal-600',
      'Graduate': 'bg-violet-500 border-violet-600 hover:bg-violet-600',
      'Diploma': 'bg-orange-500 border-orange-600 hover:bg-orange-600',
      'Certificate': 'bg-cyan-500 border-cyan-600 hover:bg-cyan-600',
      'All': 'bg-indigo-600 border-indigo-700 hover:bg-indigo-700'
    };
    
    return colors[level as keyof typeof colors] || 'bg-gray-500 border-gray-600 hover:bg-gray-600';
  };

  const getInactiveLevelStyle = (level: string) => {
    const colors = {
      'Undergraduate': 'text-teal-700 border-teal-300 bg-teal-50 hover:bg-teal-100',
      'Graduate': 'text-violet-700 border-violet-300 bg-violet-50 hover:bg-violet-100',
      'Diploma': 'text-orange-700 border-orange-300 bg-orange-50 hover:bg-orange-100',
      'Certificate': 'text-cyan-700 border-cyan-300 bg-cyan-50 hover:bg-cyan-100',
      'All': 'text-indigo-700 border-indigo-300 bg-indigo-50 hover:bg-indigo-100'
    };
    
    return colors[level as keyof typeof colors] || 'text-gray-700 border-gray-300 bg-gray-50 hover:bg-gray-100';
  };

  return (
    <section className="py-6 bg-white shadow-md sticky top-20 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <FiFilter className="text-blue-600 mr-2" size={20} />
            <h2 className="text-lg font-bold text-gray-800">Filter Programs</h2>
          </div>
          
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">By Faculty/Department:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onCategoryChange('')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === '' 
                      ? `text-white ${getCategoryColor('All')}` 
                      : getInactiveStyle('All')
                  }`}
                >
                  All Departments
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
            
            {/* Level Filter */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">By Program Level:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onLevelChange('')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedLevel === '' 
                      ? `text-white ${getLevelColor('All')}` 
                      : getInactiveLevelStyle('All')
                  }`}
                >
                  All Levels
                </button>
                
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => onLevelChange(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      selectedLevel === level 
                        ? `text-white ${getLevelColor(level)}` 
                        : getInactiveLevelStyle(level)
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCategoryFilter;
