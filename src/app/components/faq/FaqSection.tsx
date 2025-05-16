// components/faq/FaqSection.tsx
import FaqItem from './FaqItem';
import { useState } from 'react'; // For potential category filtering

interface FaqData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqSectionProps {
  faqs: FaqData[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  // Optional: Category Filtering Logic
  const allCategories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional: Category Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-150
                ${selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            {filteredFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                // Optionally open the first item by default
                // isOpenDefault={index === 0 && selectedCategory === 'All'}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No FAQs found for this category.
          </p>
        )}

        <div className="mt-12 text-center">
            <p className="text-gray-700">Can not find the answer you are looking for?</p>
            <a
                href="/contact" // Link to contact page
                className="mt-2 inline-block text-brand-primary hover:text-brand-accent font-semibold"
            >
                Contact Us for More Information
            </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;