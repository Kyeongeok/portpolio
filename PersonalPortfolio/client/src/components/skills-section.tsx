import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Puzzle, Table, Users, Zap, GitBranch, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "핵심 개발 언어",
    icon: Code,
    color: "text-blue-600",
    description: "5년간 깊이 사용한 핵심 기술",
    skills: [
      { name: "Node.js", level: 95, color: "bg-blue-600", years: "5년", projects: "KERIS 연동, 공동편집" },
      { name: "React", level: 90, color: "bg-blue-600", years: "3년", projects: "SuperPoint, Theme/ClrMap" },
      { name: "TypeScript", level: 88, color: "bg-blue-600", years: "3년", projects: "아키텍처 설계" }
    ]
  },
  {
    title: "데이터베이스 & 인프라",
    icon: Database,
    color: "text-green-600",
    description: "엔터프라이즈급 시스템 운영",
    skills: [
      { name: "Tibero ODBC", level: 92, color: "bg-green-500", years: "4년", projects: "Node.js 연동, 성능 최적화" },
      { name: "Docker", level: 88, color: "bg-green-500", years: "4년", projects: "컨테이너 환경 구축" },
      { name: "Liquibase", level: 85, color: "bg-green-500", years: "2년", projects: "DB 스키마 관리" }
    ]
  },
  {
    title: "전문 라이브러리",
    icon: Puzzle,
    color: "text-amber-600",
    description: "오피스 소프트웨어 전용 기술",
    skills: [
      { name: "pdf.js", level: 90, color: "bg-amber-500", years: "2년", projects: "페이지 썸네일, 렌더링" },
      { name: "html-to-image", level: 88, color: "bg-amber-500", years: "2년", projects: "썸네일 최적화" },
      { name: "Jest", level: 85, color: "bg-amber-500", years: "2년", projects: "테스트 자동화, Mock 설계" }
    ]
  },
  {
    title: "QA & 품질관리",
    icon: Zap,
    color: "text-red-600",
    description: "체계적인 품질 보증 시스템",
    skills: [
      { name: "TestLink", level: 95, color: "bg-red-500", years: "5년", projects: "QA 시나리오 설계" },
      { name: "IMS", level: 90, color: "bg-red-500", years: "4년", projects: "이슈 관리, 100+ 건 처리" },
      { name: "Architecture Docs", level: 88, color: "bg-red-500", years: "3년", projects: "완전한 인수인계" }
    ]
  }
];

const coreModules = [
  { name: "Annotation (Ruby)", complexity: "High", role: "Lead Developer" },
  { name: "Bookmarks", complexity: "Medium", role: "Full Stack" },
  { name: "Form Objects", complexity: "High", role: "Frontend Lead" },
  { name: "Find/Replace", complexity: "Medium", role: "Algorithm Design" },
  { name: "Composition Symbols", complexity: "Medium", role: "Input System" },
  { name: "Caption", complexity: "High", role: "CRUD Operations" },
  { name: "Cross-reference", complexity: "High", role: "System Design" },
  { name: "Page Thumbnail", complexity: "High", role: "Performance Lead" },
  { name: "Theme/ClrMap", complexity: "Expert", role: "Architecture Design" }
];

const architectureSkills = [
  "SuperPoint 아키텍처", "Slide Relation Table", "PieceTree 구조", 
  "Operation Message Handler", "IRFactory 설계", "ThemeContainer"
];

const collaborationSkills = [
  "실시간 공동편집", "Partial Loading", "Server Rendering", 
  "BlockSelection", "성능 최적화", "Docker 환경 구축"
];

export default function SkillsSection() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = '0%';
            setTimeout(() => {
              progressBar.style.width = width + '%';
            }, 100);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            전문 기술 스택
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            5년간 오피스 소프트웨어 개발에 특화된 깊이 있는 기술 경험
          </p>
        </div>
        
        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color === 'text-blue-600' ? 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30' : 
                    category.color === 'text-green-600' ? 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' :
                    category.color === 'text-amber-600' ? 'from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30' :
                    'from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30'} mr-3`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const refIndex = categoryIndex * 3 + skillIndex;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                          <div className="text-right">
                            <div className="text-sm font-bold text-gray-700 dark:text-gray-300">{skill.level}%</div>
                            <div className="text-xs text-gray-500">{skill.years}</div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                          <div
                            ref={(el) => (progressRefs.current[refIndex] = el)}
                            className={`${skill.color} h-3 rounded-full skill-progress transition-all duration-1000 ease-out`}
                            data-width={skill.level}
                            style={{ width: '0%' }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 italic">{skill.projects}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Modules Expertise */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            핵심 모듈 개발 경험
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreModules.map((module, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-gray-900 dark:text-white">{module.name}</h4>
                    <Badge 
                      className={`text-xs ${
                        module.complexity === 'Expert' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                        module.complexity === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                      }`}
                    >
                      {module.complexity}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{module.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture & Specializations */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <GitBranch className="mr-4 h-6 w-6 text-blue-600" />
                시스템 아키텍처 설계
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {architectureSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 text-center justify-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <Users className="mr-4 h-6 w-6 text-green-600" />
                협업 & 성능 최적화
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {collaborationSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-2 text-center justify-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
