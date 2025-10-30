import { Download, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              M. Tamseel Asif Awan
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
              Associate Software Developer | Full-Stack Web Developer
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Software Developer with 1+ year of experience building responsive, scalable web
              applications using React.js, Node.js, and Firebase. Skilled in transforming UI/UX
              designs into clean, high-performance code with focus on design and usability.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View My Work
              </button>

              <a
                href="/Tamseel-CV.pdf"
                download="Tamseel-CV.pdf"
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 border border-gray-200"
              >
                <Download size={20} />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 border border-gray-200"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl absolute"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <Code2 size={200} className="text-blue-600" strokeWidth={1.5} />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">1+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
