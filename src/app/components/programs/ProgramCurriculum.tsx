"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import { FiChevronDown, FiChevronUp, FiBookOpen, FiClock, FiFileText } from 'react-icons/fi';

interface ProgramCurriculumProps {
  program: ProgramData;
}

const ProgramCurriculum: React.FC<ProgramCurriculumProps> = ({ program }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSemesters, setExpandedSemesters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize with first semester expanded
    if (program.curriculum && program.curriculum.length > 0) {
      setExpandedSemesters({ [program.curriculum[0].semester]: true });
    }
  }, [program.curriculum]);

  const toggleSemester = (semester: string) => {
    setExpandedSemesters(prev => ({
      ...prev,
      [semester]: !prev[semester]
    }));
  };

  if (!program.curriculum || program.curriculum.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Curriculum</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {program.curriculum.map((semester, semesterIndex) => (
                <div 
                  key={semester.semester} 
                  className={`border-b border-gray-200 ${semesterIndex === program.curriculum.length - 1 ? 'border-b-0' : ''}`}
                >
                  {/* Semester Header */}
                  <button
                    onClick={() => toggleSemester(semester.semester)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                        {semesterIndex + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{semester.semester}</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-4">{semester.courses.length} Courses</span>
                      {expandedSemesters[semester.semester] ? (
                        <FiChevronUp className="text-gray-500" />
                      ) : (
                        <FiChevronDown className="text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {/* Semester Content */}
                  {expandedSemesters[semester.semester] && (
                    <div className="px-6 pb-4">
                      <div className="space-y-4">
                        {semester.courses.map((course, courseIndex) => (
                          <div 
                            key={course.code} 
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                            style={{ transitionDelay: `${courseIndex * 50}ms` }}
                          >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <div className="flex items-center mb-2 md:mb-0">
                                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                                  <FiBookOpen size={16} />
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900">{course.title}</h4>
                                  <p className="text-sm text-gray-500">{course.code}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center text-sm text-gray-500">
                                  <FiClock className="mr-1.5 text-blue-500" />
                                  <span>{course.credits} Credits</span>
                                </div>
                                {course.isCore ? (
                                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">
                                    Core
                                  </span>
                                ) : (
                                  <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-700 rounded">
                                    Elective
                                  </span>
                                )}
                              </div>
                            </div>
                            {course.description && (
                              <div className="mt-2 text-sm text-gray-600">
                                <p>{course.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Additional Curriculum Information */}
            {program.additionalCurriculumInfo && (
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-start">
                  <FiFileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium text-blue-800 mb-2">Additional Curriculum Information</h3>
                    <div className="text-blue-700 space-y-2">
                      {program.additionalCurriculumInfo.map((info, index) => (
                        <p key={index}>{info}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCurriculum;
