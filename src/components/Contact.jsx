import { Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [sending, setSending] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = 'service_3zblrby';
  const TEMPLATE_ID = 'template_uokhosq';
  const PUBLIC_KEY = 'YDllYBIHK06qT0AGg';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3500);
      });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadtamseelasif@gmail.com', href: 'mailto:muhammadtamseelasif@gmail.com' },
    { icon: Phone, label: 'Phone', value: '0333-5771292', href: 'tel:03335771292' },
    { icon: MapPin, label: 'Location', value: 'VPO Khanpur, Chakwal, Pakistan', href: null },
  ];

  const socialLinks = [
    { icon: Globe, label: 'Portfolio', href: 'https://tamseelasifawan.netlify.app/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tamseel-asif-awan-35a75724b/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/MTamseelAsifAwan' }  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group border border-gray-200"
                    aria-label={link.label}
                  >
                    <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full px-6 py-3 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2
                    ${sending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-center font-medium">
                      Message sent successfully!
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-center font-medium">
                      Failed to send message. Please try again or contact directly via email.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
