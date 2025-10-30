import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'React JavaScript – Fundamentals to Coding & New Beginnings',
      issuer: 'Alison',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Award className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-3">Issued by {cert.issuer}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
