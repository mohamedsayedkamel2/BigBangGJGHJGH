import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Globe, Code, Heart, Star, Coffee, Image as ImageIcon } from 'lucide-react';
import ImageDisplayPage from './pages/ImageDisplayPage';
import './App.css';

/**
 * Welcome component - displays the main hello world greeting
 */
const WelcomeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  
  const languages = [
    { name: 'JavaScript', code: 'console.log("Hello, World!");', color: 'text-yellow-600' },
    { name: 'Python', code: 'print("Hello, World!")', color: 'text-blue-600' },
    { name: 'Java', code: 'System.out.println("Hello, World!");', color: 'text-red-600' },
    { name: 'C++', code: 'std::cout << "Hello, World!" << std::endl;', color: 'text-green-600' },
    { name: 'React', code: '<h1>Hello, World!</h1>', color: 'text-cyan-600' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6 sm:mb-8 md:mb-12">
          <Globe className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-indigo-600 mx-auto mb-4 sm:mb-6 animate-spin" style={{ animationDuration: '10s' }} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Hello, <span className="text-indigo-600">World!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Welcome to your first React application
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              Code Examples
            </h2>
          </div>
          
          <div className="transition-all duration-500">
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${languages[currentLanguage].color}`}>
              {languages[currentLanguage].name}
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 text-left">
              <code className="text-green-400 text-sm sm:text-base md:text-lg font-mono">
                {languages[currentLanguage].code}
              </code>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <FeatureCard
            icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Simple"
            description="Easy to understand and implement"
            color="text-red-500"
          />
          <FeatureCard
            icon={<Star className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Universal"
            description="The classic first program for any language"
            color="text-yellow-500"
          />
          <FeatureCard
            icon={<Coffee className="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Interactive"
            description="Built with React for modern web development"
            color="text-brown-600"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            to="/examples"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View More Examples
          </Link>
          <Link
            to="/about"
            className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * Feature card component for displaying key features
 */
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-200">
      <div className={`${color} mb-3 sm:mb-4 flex justify-center`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

/**
 * Examples page showing multiple programming languages
 */
const ExamplesPage = () => {
  const examples = [
    {
      language: 'Python',
      code: 'print("Hello, World!")',
      description: 'The simplest hello world in Python',
      color: 'bg-blue-500'
    },
    {
      language: 'JavaScript',
      code: 'console.log("Hello, World!");',
      description: 'JavaScript console output',
      color: 'bg-yellow-500'
    },
    {
      language: 'Java',
      code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      description: 'Complete Java hello world program',
      color: 'bg-red-500'
    },
    {
      language: 'C++',
      code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
      description: 'C++ hello world with iostream',
      color: 'bg-green-500'
    },
    {
      language: 'HTML',
      code: '<!DOCTYPE html>\n<html>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>',
      description: 'HTML hello world page',
      color: 'bg-orange-500'
    },
    {
      language: 'CSS',
      code: '.hello::before {\n    content: "Hello, World!";\n    font-size: 2rem;\n}',
      description: 'CSS generated content',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Hello World Examples
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore how different programming languages say "Hello, World!"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
          {examples.map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * Example card component for code examples
 */
const ExampleCard = ({ language, code, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`${color} p-4 sm:p-6`}>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{language}</h3>
        <p className="text-white opacity-90 mt-1 sm:mt-2 text-sm sm:text-base">{description}</p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
          <pre className="text-green-400 text-sm sm:text-base font-mono whitespace-pre-wrap overflow-x-auto">
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
};

/**
 * About page with information about Hello World
 */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              About Hello World
            </h1>
            <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600 mx-auto" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              "Hello, World!" is traditionally the first program written when learning a new programming language. 
              It's a simple program that outputs the text "Hello, World!" to demonstrate the basic syntax of the language.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">History</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              The "Hello, World!" program was first introduced by Brian Kernighan in the 1970s. It appeared in 
              his book "The C Programming Language" and has since become a universal tradition in programming education.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Why Start with Hello World?</h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 space-y-2 sm:space-y-3 leading-relaxed">
              <li>Simple to understand and implement</li>
              <li>Tests that your development environment is set up correctly</li>
              <li>Demonstrates basic syntax and structure</li>
              <li>Provides immediate feedback and satisfaction</li>
              <li>Universal starting point across all programming languages</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">This React Version</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              This interactive "Hello, World!" application is built with React, demonstrating modern web development 
              practices including component-based architecture, responsive design, and smooth animations.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Navigation component
 */
const NavigationComponent = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            Hello World
          </Link>
          
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              to="/"
              className={`text-sm sm:text-base font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/examples"
              className={`text-sm sm:text-base font-medium transition-colors ${
                location.pathname === '/examples' 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Examples
            </Link>
            <Link
              to="/about"
              className={`text-sm sm:text-base font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`flex items-center text-sm sm:text-base font-medium transition-colors ${
                location.pathname === '/gallery' 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <ImageIcon className="w-4 h-4 mr-1" />
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/**
 * Main App component
 */
function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <div className="pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<WelcomeComponent />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<ImageDisplayPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;