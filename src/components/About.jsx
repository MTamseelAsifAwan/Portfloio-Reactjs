import { GraduationCap, Code, Zap, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const technicalSkills = [
    'React.js',
    'Node.js',
    'Express.js',
    'Firebase',
    'MongoDB',
    'Tailwind CSS',
    'Bootstrap',
    'HTML',
    'CSS',
    'JavaScript',
    'REST API',
    'Cypress',
    'Docker',
    'Git & GitHub'
  ];

  const softSkills = [
    { name: 'Team Collaboration', icon: Users },
    { name: 'Adaptability', icon: Zap },
    { name: 'Continuous Learning', icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-700 font-medium">BS Computer Science</p>
                  <p className="text-gray-600">University of Engineering and Technology, Lahore</p>
                  <p className="text-gray-500 text-sm mt-1">2021 – 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I specialize in building modern, responsive web apps using React, Node.js,
                    Express, MongoDB, and Firebase. I'm passionate about user experience,
                    performance, and design consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Soft Skills</h3>
              <div className="grid gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <skill.icon className="text-blue-600" size={24} />
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
