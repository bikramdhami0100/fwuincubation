"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiUsers, FiMapPin, FiClock, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { programsData } from '../../../data/programsData';

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const [program, setProgram] = useState<typeof programsData[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the program with the matching slug
    if (params && params.slug) {
      const slug = params.slug;
      const foundProgram = programsData.find(p => p.slug === slug) || null;
      setProgram(foundProgram);
    }
    setIsLoading(false);
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600">Loading program details...</p>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
          <div className="text-5xl text-red-500 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-6">The program you are looking for does not exist or has been moved.</p>
          <Link href="/programs" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary-dark transition-colors">
            <FiArrowLeft className="mr-2" /> Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20 md:py-28">
        {program.imageUrl && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={program.imageUrl}
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/programs"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Programs
          </Link>
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4 bg-white/10 p-4 rounded-lg">
              {program.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold">{program.title}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">{program.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Long Description */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">About This Program</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{program.longDescription}</p>
            </div>
          </div>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {program.duration && (
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                <div className="bg-brand-primary/10 text-brand-primary p-3 rounded-lg mr-4">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark">Duration</h3>
                  <p className="text-gray-600">{program.duration}</p>
                </div>
              </div>
            )}

            {program.schedule && (
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                <div className="bg-brand-primary/10 text-brand-primary p-3 rounded-lg mr-4">
                  <FiCalendar className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark">Schedule</h3>
                  <p className="text-gray-600">{program.schedule}</p>
                </div>
              </div>
            )}

            {program.location && (
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                <div className="bg-brand-primary/10 text-brand-primary p-3 rounded-lg mr-4">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark">Location</h3>
                  <p className="text-gray-600">{program.location}</p>
                </div>
              </div>
            )}

            {program.capacity && (
              <div className="bg-white rounded-xl shadow-md p-6 flex items-start">
                <div className="bg-brand-primary/10 text-brand-primary p-3 rounded-lg mr-4">
                  <FiUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark">Capacity</h3>
                  <p className="text-gray-600">{program.capacity}</p>
                </div>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {program.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Process */}
          {program.applicationProcess && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Application Process</h2>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                {program.applicationProcess.map((step: string, index: number) => (
                  <li key={index} className="pl-2">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Take the next step in your entrepreneurial journey and apply for our {program.title} program today.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white text-brand-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
