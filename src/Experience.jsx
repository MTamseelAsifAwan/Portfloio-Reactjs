import React from 'react';

const Experience = () => {
  return (
	<div className='grid grid-cols-1 text-center justify-items-center p-4'>
    <h2 className="font-extrabold text-3xl p-4 bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">Experience</h2>
    <div className="w-full max-w-2xl text-left text-black dark:text-white border-orange-600 border-b-2 ">
      <div className="mb-6 ">
        <div className="flex justify-between items-center">
          <span className="font-bold">Frontend Developer (Intern) – Apsol360</span>
          <span className="font-semibold text-gray-500">Jun 2024 – Jul 2024</span>
        </div>
        <ul className="list-disc ml-6 mt-1 text-sm">
          <li>Developed frontend components using React.js and TailwindCSS.</li>
          <li>Collaborated with the design team to turn Figma designs into responsive UI.</li>
          <li>Gained practical exposure to real-world project workflows and Git-based version control.</li>
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold">Frontend Developer (Freelance) – Self-Employed</span>
          <span className="font-semibold text-gray-500">Dec 2023 – Sept 2024</span>
        </div>
        <ul className="list-disc ml-6 mt-1 text-sm">
          <li>Built and maintained responsive React.js applications for clients.</li>
          <li>Integrated Firebase for authentication and real-time data features.</li>
          <li>Delivered client-focused solutions through regular feedback loops and revisions.</li>
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <span className="font-bold">Leadership Aptitude Management Program – Participant</span>
          <span className="font-semibold text-gray-500">Dec 2023</span>
        </div>
        <ul className="list-disc ml-6 mt-1 text-sm">
          <li>Participated in a leadership development program focused on communication, planning, and professional growth.</li>
        </ul>
       
      </div>
       <a    href="mailto:muhammadtamseelasif@gmail.com">
          <span className="text-blue-500  hover:underline m-5  inline-block">muhammadtamseelasif@gmail.com</span>
        </a>
    </div>
    {/* Social Icons */}
    <div className="flex gap-6 mt-8">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/tamseel-asif-awan-35a75724b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform"
      >
        <svg width="32" height="32" fill="currentColor" className="text-blue-700" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
        </svg>
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/tamseel_asif_awan/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:scale-110 transition-transform"
      >
        <svg width="32" height="32" fill="currentColor" className="text-pink-500" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      </a>
      {/* Contact (Phone) */}
 
    </div>
	</div>
  );
};

export default Experience;
