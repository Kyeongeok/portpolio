import { Moon, Sun, Menu, User, Briefcase, Code, FolderOpen, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with sparkle effect */}
          <div className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            고경석
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <User className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">소개</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              <Briefcase className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">경력</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 transform hover:scale-105"
            >
              <Code className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">기술스택</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              <FolderOpen className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">프로젝트</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">연락처</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-10 w-10 rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-900/20 group transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500 group-hover:animate-spin" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400 group-hover:animate-pulse" />
              <span className="sr-only">테마 변경</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl mx-4 mb-4 border border-gray-200/50 dark:border-gray-700/50">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl mx-2"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">소개</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 rounded-xl mx-2"
            >
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">경력</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 rounded-xl mx-2"
            >
              <Code className="w-4 h-4" />
              <span className="font-medium">기술스택</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 rounded-xl mx-2"
            >
              <FolderOpen className="w-4 h-4" />
              <span className="font-medium">프로젝트</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 rounded-xl mx-2"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">연락처</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
