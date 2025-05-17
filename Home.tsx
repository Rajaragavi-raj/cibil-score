import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CreditCard, Calculator, Wallet, FileText, Bell } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Cibil Score Tracking",
    description: "Monitor your credit score in real-time and understand the factors affecting it.",
    icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1920",
    path: "/score"
  },
  {
    id: 2,
    title: "Loan Eligibility Check",
    description: "Instantly check your loan eligibility based on your Cibil score and financial profile.",
    icon: <Calculator className="w-12 h-12 text-green-600" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920",
    path: "/eligibility"
  },
  {
    id: 3,
    title: "Loan Categories",
    description: "Explore various types of loans available based on your credit score.",
    icon: <Wallet className="w-12 h-12 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=1920",
    path: "/categories"
  },
  {
    id: 4,
    title: "Report Generation",
    description: "Generate detailed reports of your loan details and credit score history.",
    icon: <FileText className="w-12 h-12 text-orange-600" />,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1920",
    path: "/report"
  },
  {
    id: 5,
    title: "Credit Score Alerts",
    description: "Receive regular updates and alerts about changes in your credit score.",
    icon: <Bell className="w-12 h-12 text-red-600" />,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1920",
    path: "/alerts"
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-3xl font-bold text-blue-800 hover:underline">
            Cibil Score Tracker
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Slideshow */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[600px]">
            <div
              className={`absolute w-full h-full transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: `url(${features[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-8 max-w-2xl">
                  <div className="flex justify-center mb-6">
                    {features[currentSlide].icon}
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{features[currentSlide].title}</h2>
                  <p className="text-xl">{features[currentSlide].description}</p>
                  <Link 
                    to={features[currentSlide].path}
                    className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <Link
              key={feature.id}
              to={feature.path}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow block hover:bg-blue-50"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">© 2024 Cibil Score Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
