// components/faq/FaqItem.tsx
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean; // To optionally have an item open by default
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-5 px-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-brand-primary focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-brand-dark">{question}</h3>
        {isOpen ? (
          <FiChevronUp className="w-6 h-6 text-brand-primary flex-shrink-0" />
        ) : (
          <FiChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {/*
        Smooth transition for accordion:
        You can use `max-h-0` and `max-h-screen` (or a large enough value) with CSS transitions.
        Or libraries like `react-transition-group` or `framer-motion` for more complex animations.
        Tailwind doesn't have direct `max-h` transition utilities out of the box without custom config.
      */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0' // Adjust max-h if answers are very long
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-gray-700 leading-relaxed prose prose-sm max-w-none">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;