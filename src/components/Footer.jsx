import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-800 py-6 text-center bg-[#121212]">
      <div className="container mx-auto px-4">
        <p className="text-gray-300 text-sm md:text-base">
          Built with <span className="text-red-500">♥</span> by Viraj Singh
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/viraj-singh-121b43203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="inline-block text-lg" />
          </a>
          <a
            href="https://www.github.com/vjinviraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="inline-block text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}