import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Associate Software Developer',
      company: 'APP IN SNAP',
      period: 'Aug 2025 – Present',
      type: 'Full-time',
      responsibilities: [
        'Developed reusable frontend components using React.js and TailwindCSS',
        'Built backend APIs with Node.js for feature integration',
      ],
    },
    {
      title: 'Frontend Developer (Intern)',
      company: 'Apsol360',
      period: 'Jun 2024 – Jul 2024',
      type: 'Internship',
      responsibilities: [
        'Converted Figma designs into responsive UIs using React.js',
        'Collaborated with designers and developers using Git workflows',
      ],
    },
    {
      title: 'Frontend Developer (Freelance)',
      company: 'Self-Employed',
      period: 'Dec 2023 – Sept 2024',
      type: 'Freelance',
      responsibilities: [
        'Delivered responsive web applications using React.js and Firebase',
        'Integrated authentication, database, and real-time features',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="md:ml-20">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                    <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 hidden md:block"></div>

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={18} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
