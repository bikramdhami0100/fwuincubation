"use client"
import { useEffect, useRef } from 'react';
import { FiX, FiCalendar, FiUsers, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

export interface ProgramDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  benefits: string[];
  duration?: string;
  schedule?: string;
  location?: string;
  capacity?: string;
  applicationProcess?: string[];
  imageUrl?: string;
}

interface ProgramDetailModalProps {
  program: ProgramDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!program) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm overflow-y-auto opacity-0 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fadeIn animation-delay-500"
        ref={modalRef}
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header with image background */}
          <div className="relative h-64 bg-gradient-to-r from-brand-primary to-brand-secondary overflow-hidden">
            {program.imageUrl ? (
              <div className="absolute inset-0">
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  fill
                  className="object-cover opacity-40"
                />
              </div>
            ) : null}

            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <div className="text-5xl mb-4">{program.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold">{program.title}</h2>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full transition-all duration-200 hover:scale-110"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">{program.description}</p>
              <p className="text-gray-600">{program.longDescription}</p>

              <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">Key Benefits</h3>
              <ul className="space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Program Details */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {program.duration && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <FiClock className="text-brand-primary mr-3 text-xl" />
                    <div>
                      <h4 className="font-medium text-gray-700">Duration</h4>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                  </div>
                )}

                {program.schedule && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <FiCalendar className="text-brand-primary mr-3 text-xl" />
                    <div>
                      <h4 className="font-medium text-gray-700">Schedule</h4>
                      <p className="text-gray-600">{program.schedule}</p>
                    </div>
                  </div>
                )}

                {program.location && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <FiMapPin className="text-brand-primary mr-3 text-xl" />
                    <div>
                      <h4 className="font-medium text-gray-700">Location</h4>
                      <p className="text-gray-600">{program.location}</p>
                    </div>
                  </div>
                )}

                {program.capacity && (
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <FiUsers className="text-brand-primary mr-3 text-xl" />
                    <div>
                      <h4 className="font-medium text-gray-700">Capacity</h4>
                      <p className="text-gray-600">{program.capacity}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Application Process */}
              {program.applicationProcess && (
                <>
                  <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">Application Process</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {program.applicationProcess.map((step, index) => (
                      <li key={index} className="pl-2">{step}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:scale-105 transform"
              >
                Apply Now
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;
