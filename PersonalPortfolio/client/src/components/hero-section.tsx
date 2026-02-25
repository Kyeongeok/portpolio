import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Sparkles } from "lucide-react";
import profileImage from "../../../attached_assets/profile.jpeg";
import AnimatedBackground from "./animated-background";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/attached_assets/aa570cc4-9831-4f1e-9d7e-89504bac0113__고경석_개발자_커리어_요약_(2019.08__2024.12)_1752220190209.pdf';
    link.download = '고경석_개발자_커리어_요약.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href = 'mailto:kugll9606@gmail.com?subject=웹사이트를 통한 문의&body=안녕하세요, 고경석님의 웹사이트를 보고 연락드립니다.';
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated 3D Background */}
      <AnimatedBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/80 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-pink-950/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Message */}
        <div className="mb-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <Sparkles className="w-4 h-4" />
            안녕하세요! 반갑습니다
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="relative animate-fade-in-up animation-delay-200 lg:order-1">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-700/50 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="고경석 프로필 사진" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="lg:order-2 animate-fade-in-up animation-delay-400">
            {/* Name with animated gradient */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                고경석
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full lg:mx-0"></div>
            </div>
            
            {/* Title with icon */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  오피스 SW 엔진 개발 전문가
                </h2>
              </div>
            </div>
            
            {/* Description - Natural flow without box */}
            <div className="mb-10 space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 mr-2">5년간</span>
                오피스 소프트웨어 제품 안정화, 신규 기능 설계, 아키텍처 개선을 통해 사용자 경험을 향상시키는 데 집중해온 개발자입니다.
              </p>
              
              <div className="flex flex-wrap gap-3 my-6">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full text-purple-700 dark:text-purple-300 font-medium text-sm backdrop-blur-sm">
                  공동편집 성능 최적화
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-full text-pink-700 dark:text-pink-300 font-medium text-sm backdrop-blur-sm">
                  복잡한 엔진 모듈 설계
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                소프트웨어의 성능과 안정성을 극대화하며, 사용자가 직관적으로 사용할 수 있는 제품을 만드는 것이 저의 목표입니다. 
                지속적인 학습과 혁신을 통해 더 나은 개발자로 성장하고 있습니다.
              </p>
            </div>
            
            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 font-medium shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                이력서 다운로드
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleContact}
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-8 py-4 font-medium shadow-lg rounded-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                연락하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
