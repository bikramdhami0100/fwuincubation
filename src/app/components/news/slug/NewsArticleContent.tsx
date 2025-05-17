"use client"
import { useState, useEffect } from 'react';
import { FiCalendar, FiTag, FiClock, FiShare2, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { allNewsData, NewsItemData } from '@/app/news/page';
import NewsRelated from '../NewsRelated';


interface NewsArticleContentProps {
  article: NewsItemData | null;
}

export default function NewsArticleContent({ article }: NewsArticleContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  if (!article) {
    return (
      <main className="container mx-auto py-16 px-4 text-center">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-indigo-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The news article you are looking for does not exist or has been moved to a different location.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to News
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Category colors are defined inline in the component

  // Generate some dummy paragraphs based on the summary
  const generateDummyContent = () => {
    const paragraphs = [];
    // Use the summary as the first paragraph
    paragraphs.push(article.summary);

    // Add some dummy paragraphs
    paragraphs.push(
      "Far Western University Incubation Center is committed to fostering innovation and entrepreneurship among students and faculty. Through our programs, we provide mentorship, resources, and networking opportunities to help turn ideas into successful ventures.",
      "Our approach combines academic research with practical business development, creating a unique environment where theoretical knowledge meets real-world application. This synergy is essential for developing sustainable and impactful startups.",
      "The incubation process at FWU involves multiple stages, from idea validation to market entry. Each startup receives customized support based on their specific needs and industry focus, ensuring they have the best chance of success in today's competitive landscape.",
      "Collaboration is at the heart of our philosophy. We actively partner with industry leaders, government agencies, and other academic institutions to create a robust ecosystem that supports innovation across various sectors."
    );

    return paragraphs;
  };

  const dummyParagraphs = generateDummyContent();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500 opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500 opacity-10 animate-float-reverse"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              href="/news"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to News
            </Link>

            <div className="mb-4">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full border inline-block ${
                article.category === 'News' ? 'bg-blue-500/20 text-blue-100 border-blue-400/30' :
                article.category === 'Notice' ? 'bg-yellow-500/20 text-yellow-100 border-yellow-400/30' :
                article.category === 'Event Recap' ? 'bg-green-500/20 text-green-100 border-green-400/30' :
                'bg-purple-500/20 text-purple-100 border-purple-400/30'
              }`}>
                <FiTag className="inline mr-1.5 mb-0.5" /> {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-indigo-100">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>Published on {formattedDate}</span>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Article Content */}
      <main className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Featured Image */}
              {article.imageUrl && (
                <div className="relative w-full h-72 md:h-[500px] rounded-xl overflow-hidden shadow-xl mb-10">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Social Share */}
              <div className="flex justify-end mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">Share:</span>
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                    <FiShare2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {dummyParagraphs.map((paragraph, index) => (
                  <p key={index} className={`mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
                    {paragraph}
                  </p>
                ))}

                {/* Blockquote */}
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-8 text-gray-600">
                  &ldquo;Innovation is the ability to see change as an opportunity - not a threat. The Far Western University Incubation Center is committed to nurturing this mindset among our students and faculty.&rdquo;
                </blockquote>

                {/* List */}
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Benefits of the FWU Incubation Center:</h3>
                <ul className="list-disc pl-6 mb-8">
                  <li>Access to mentorship from industry experts and successful entrepreneurs</li>
                  <li>Dedicated workspace and resources for startup development</li>
                  <li>Networking opportunities with potential investors and partners</li>
                  <li>Workshops and training sessions on business development</li>
                  <li>Potential funding opportunities through our partner network</li>
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-700 font-medium">Tags:</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    Incubation
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    Entrepreneurship
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    Innovation
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    FWU
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 p-6 bg-indigo-50 rounded-xl">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                      FW
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">FWU Incubation Center</h4>
                    <p className="text-gray-600">
                      The official news and updates from the Far Western University Incubation Center.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Related Articles Section */}
      <NewsRelated currentArticleId={article.id} allNews={allNewsData} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated with FWU Incubation Center</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Subscribe to our newsletter to receive the latest news, events, and opportunities directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto"
              />
              <button className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
