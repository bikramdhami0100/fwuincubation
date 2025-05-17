"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import Image from 'next/image';
import { FiMail, FiLinkedin, FiExternalLink } from 'react-icons/fi';

interface ProgramFacultyProps {
  program: ProgramData;
}

const ProgramFaculty: React.FC<ProgramFacultyProps> = ({ program }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!program.faculty || program.faculty.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Faculty</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.faculty.map((faculty, index) => (
                <div 
                  key={faculty.name} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Faculty Image */}
                    <div className="sm:w-1/3 h-48 sm:h-auto relative">
                      <Image
                        src={faculty.imageUrl || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Faculty Info */}
                    <div className="sm:w-2/3 p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">{faculty.position}</p>
                      
                      {faculty.specialization && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-500">Specialization</p>
                          <p className="text-gray-700">{faculty.specialization}</p>
                        </div>
                      )}
                      
                      {faculty.education && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-500">Education</p>
                          <p className="text-gray-700">{faculty.education}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center mt-4 space-x-3">
                        {faculty.email && (
                          <a 
                            href={`mailto:${faculty.email}`} 
                            className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label={`Email ${faculty.name}`}
                          >
                            <FiMail size={16} />
                          </a>
                        )}
                        
                        {faculty.linkedin && (
                          <a 
                            href={faculty.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label={`LinkedIn profile of ${faculty.name}`}
                          >
                            <FiLinkedin size={16} />
                          </a>
                        )}
                        
                        {faculty.profileUrl && (
                          <a 
                            href={faculty.profileUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label={`Profile page of ${faculty.name}`}
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Department Information */}
            {program.departmentInfo && (
              <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About the Department</h3>
                <div className="prose max-w-none text-gray-700">
                  <p>{program.departmentInfo}</p>
                </div>
                
                {program.departmentUrl && (
                  <a 
                    href={program.departmentUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Visit Department Website <FiExternalLink className="ml-2" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFaculty;
