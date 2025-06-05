import React from "react";

// Project data array
const projects = [
  {
    title: "Sprinty – Jira Studio",
    description: "Jira data dashboard with graphs and AI-based task prediction.",
    demo: "https://sprinty-fyp.netlify.app/",
    github: "https://github.com/MTamseelAsifAwan/Fyp/tree/withgraphs",
  },
  {
    title: "Urdu Handwriting Recognition",
    description: "Recognizes handwritten Urdu text using ML.",
    demo: "https://urdu-prediction-model-21-cs-445.netlify.app/",
    github: "https://github.com/MTamseelAsifAwan/Urdu-word-prediction-Random-forest-calssifier",
  },
  {
    title: "Thalassemia Web App",
    description: "Patient tracking system built with React and Firebase.",
    demo: "https://jztcare.netlify.app/",
    github: "https://github.com/MTamseelAsifAwan/jzt-care",
  },
  {
    title: "AI Newsreader",
    description: "Voice-controlled news app using Alan AI.",
    demo: "#",
    github: "https://github.com/MTamseelAsifAwan/Newsreader-in-reactjs-with-Alan-ai",
  },
  {
    title: "Workout Planner",
    description: "Web dashboard to plan and track workouts.",
    demo: "#",
    github: "https://github.com/MTamseelAsifAwan/web-assigment",
  },
  {
    title: "Object Detection App",
    description: "Displays results from TensorFlow model.",
    demo: "https://object-detectiontamseel.netlify.app/",
    github: "https://github.com/MTamseelAsifAwan/object-detction-using-tensorflow",
  },
  {
    title: "Blog Landing Page",
    description: "Responsive landing page with modern UI",
    demo: "https://labcolabs.fashionicon.com.pk/",
    github: "https://github.com/MTamseelAsifAwan/Blooging-Website-React",
  },
  {
    title: "Dating Webapp",
    description: "A modern dating web application for connecting people.",
    demo: "https://dating-webapp.netlify.app/",
    github: "https://github.com/MTamseelAsifAwan/Dating-Webapp-Ui",
  },
];

const Projects = () => {
  return (
	<div className="grid grid-cols-1 text-center justify-items-center ">
    <h1 className="font-extrabold text-3xl p-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">Projects</h1>
	  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 md:gap-12  lg:gap-20 w-full max-w-7xl px-2">
		{projects.map((project, idx) => (
		  <div
			key={idx}
			className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 ml-5 sm:ml-0"
		  >
			<div className="group-hover:duration-400 relative rounded-2xl w-80 h-48 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1  before:-skew-x-12 before:rounded-2xl before:absolute before:content-[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
			  {/* Optionally add an image here if you have one, e.g. <img src={project.img} alt="" /> */}
			  <span className="text-2xl font-bold">{project.title}</span>
			  <p className="text-amber-300 font-thin text-sm text-center px-2">
				{project.description}
			  </p>
			  <div className="absolute bottom-2 right-2 flex gap-2">
				{project.demo && project.demo !== "#" && (
				  <a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-white text-black px-3 py-1 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300"
				  >
					Demo
				  </a>
				)}
				<a
				  href={project.github}
				  target="_blank"
				  rel="noopener noreferrer"
				  className="bg-white text-black px-3 py-1 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300"
				>
				  GitHub
				</a>
			  </div>
			</div>
		  </div>
		))}
	  </div>
	</div>
  );
};

export default Projects;
