import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sprinty – Jira Studio',
      description: 'Jira data dashboard with graphs and AI-based task prediction.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      liveDemo: 'https://sprinty-fyp.netlify.app/',
      github: 'https://github.com/MTamseelAsifAwan/Fyp/tree/withgraphs',
    },
    {
      title: 'Urdu Handwriting Recognition',
      description: 'Recognizes handwritten Urdu text using ML. And provides text output. And allow the model training in parallel.',
      techStack: ['Python', 'Random Forest Classifier', 'Flask'],
      liveDemo: 'https://urdu-prediction-model-21-cs-445.netlify.app/',
      github: 'https://github.com/MTamseelAsifAwan/Urdu-word-prediction-Random-forest-calssifier',
    },
    {
      title: 'Thalassemia Web App (JZT Care)',
      description: 'Patient tracking system built with React and Firebase.',
      techStack: ['React', 'Firebase', 'Node.js', 'Tailwind'],
      liveDemo: 'https://jztcare.netlify.app/',
      github: 'https://github.com/MTamseelAsifAwan/jzt-care',
    },
    {
      title: 'Object Detection App',
      description: 'Displays detection results from TensorFlow model.',
      techStack: ['TensorFlow.js', 'React'],
      liveDemo: 'https://object-detectiontamseel.netlify.app/',
      github: 'https://github.com/MTamseelAsifAwan/object-detction-using-tensorflow',
    },
    {
      title: 'Dating Webapp',
      description: 'A modern dating platform with user profiles and matching.',
      techStack: ['React', 'Tailwind', 'Bootstrap'],
      liveDemo: 'https://dating-webapp.netlify.app/',
      github: 'https://github.com/MTamseelAsifAwan/Dating-Webapp-Ui',
    },
    {
      title: 'FarmKar',
      description: 'MERN-based farm equipment rental and management platform.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveDemo: 'https://portal.farmkar.com.pk/',
      github: null,
    },
    {
      title: 'Trimmers',
      description: 'Salon booking and management system.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveDemo: 'https://dev-admin.trimmers.shop/admin/shops',
        github: null,
    },
    {
      title: 'Workout Planner',
      description: 'Dashboard to plan and track workouts.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      liveDemo: null,
      github: 'https://github.com/MTamseelAsifAwan/web-assigment',
    },
    {
      title: 'Blog Landing Page',
      description: 'Responsive landing page with modern UI.',
      techStack: ['React', 'Tailwind'],
      liveDemo: null,
      github: 'https://github.com/MTamseelAsifAwan/Blooging-Website-React',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-2"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex-1 justify-center"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
