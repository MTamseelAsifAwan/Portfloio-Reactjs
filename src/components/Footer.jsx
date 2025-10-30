import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} M. Tamseel Asif Awan. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-400 text-sm">
            Built with <Heart size={16} className="text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
