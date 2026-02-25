import { Mail, Phone } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">연락하기</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          새로운 기회와 협업에 관심이 있으시다면 언제든 연락해 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:kugll9606@gmail.com" 
            className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>kugll9606@gmail.com</span>
          </a>
          <a 
            href="tel:010-4162-9606" 
            className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>010-4162-9606</span>
          </a>
          <a 
            href="https://linkedin.com/in/kyungseok-go" 
            className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/kyungseok-go" 
            className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SiGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
