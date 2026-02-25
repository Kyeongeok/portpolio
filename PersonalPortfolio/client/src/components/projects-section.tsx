import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bookmark, FileText, Users, Palette, Images, Search, Type, Link } from "lucide-react";

const projects = [
  {
    title: "Annotation (Ruby)",
    subtitle: "덧말 시스템",
    icon: MessageSquare,
    description: "PieceTree 기반 구조로 설계된 고성능 텍스트 주석 시스템. 복잡한 텍스트 구조에서 효율적인 덧말 처리를 위한 핵심 엔진",
    period: "2020 - 2024",
    role: "Lead Developer",
    impact: "전체 문서 처리 성능 40% 향상",
    techStack: ["PieceTree", "Text Processing", "Node.js"],
    achievements: [
      "PieceTree 기반 메모리 효율적 구조 설계",
      "실시간 덧말 삽입/삭제 최적화",
      "복잡한 텍스트 구조 지원"
    ],
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20"
  },
  {
    title: "Bookmarks",
    subtitle: "책갈피 & 네비게이션",
    icon: Bookmark,
    description: "이름 중복 처리, 하이퍼링크 연결, 계층적 구조를 지원하는 고도화된 문서 네비게이션 시스템",
    period: "2019 - 2021",
    role: "Full Stack Developer",
    impact: "사용자 문서 탐색 효율성 60% 개선",
    techStack: ["Hyperlink", "Navigation", "UI/UX"],
    achievements: [
      "중복 이름 자동 처리 로직 구현",
      "계층적 책갈피 구조 설계",
      "하이퍼링크 연결 최적화"
    ],
    color: "text-green-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
  },
  {
    title: "Form Objects",
    subtitle: "양식개체 시스템",
    icon: FileText,
    description: "EditBox, ComboBox 등 다양한 대화형 양식 컴포넌트의 DOM/Render 구조 설계 및 구현",
    period: "2021 - 2022",
    role: "Frontend Lead",
    impact: "양식 컴포넌트 렌더링 성능 50% 향상",
    techStack: ["DOM/Render", "React Components", "UI Framework"],
    achievements: [
      "5개 핵심 양식 컴포넌트 설계",
      "반응형 렌더링 시스템 구축",
      "사용자 경험 최적화"
    ],
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
  {
    title: "Find/Replace",
    subtitle: "찾기/바꾸기 엔진",
    icon: Search,
    description: "고급 검색 알고리즘과 정규표현식을 지원하는 강력한 텍스트 검색 및 치환 시스템",
    period: "2021 - 2022",
    role: "Algorithm Designer",
    impact: "검색 성능 70% 향상, 정확도 95% 달성",
    techStack: ["Search Algorithm", "RegEx", "Performance Optimization"],
    achievements: [
      "고급 검색 알고리즘 설계",
      "정규표현식 엔진 최적화",
      "대용량 문서 검색 지원"
    ],
    color: "text-orange-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
  },
  {
    title: "Composition Symbols",
    subtitle: "조합형 문자 입력",
    icon: Type,
    description: "복잡한 한글 조합 문자와 특수 기호 입력을 위한 고도화된 입력 시스템",
    period: "2021 - 2022",
    role: "Input System Developer",
    impact: "특수 문자 입력 효율성 80% 개선",
    techStack: ["Input Method", "Unicode", "Korean Typography"],
    achievements: [
      "조합형 문자 처리 로직 구현",
      "실시간 입력 피드백 시스템",
      "다국어 입력 지원"
    ],
    color: "text-teal-600",
    bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20"
  },
  {
    title: "Caption",
    subtitle: "캡션 관리 시스템",
    icon: FileText,
    description: "문서 내 이미지, 표, 도형에 대한 캡션 자동 생성, 편집, 참조 관리 시스템",
    period: "2023 - 2024",
    role: "System Designer",
    impact: "캡션 처리 자동화 90% 달성",
    techStack: ["CRUD Operations", "Auto-numbering", "Reference Management"],
    achievements: [
      "자동 캡션 넘버링 시스템",
      "실시간 캡션 업데이트",
      "상호참조 연동"
    ],
    color: "text-indigo-600",
    bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20"
  },
  {
    title: "Cross-reference",
    subtitle: "상호참조 엔진",
    icon: Link,
    description: "문서 내 다양한 요소 간의 동적 참조 관리 및 자동 업데이트 시스템",
    period: "2023 - 2024",
    role: "Architecture Designer",
    impact: "참조 정확도 100% 유지, 업데이트 성능 60% 향상",
    techStack: ["Reference System", "Auto-update", "Data Consistency"],
    achievements: [
      "동적 참조 관리 시스템 설계",
      "자동 업데이트 로직 구현",
      "데이터 일관성 보장"
    ],
    color: "text-pink-600",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20"
  },
  {
    title: "Page Thumbnail",
    subtitle: "페이지 썸네일 엔진",
    icon: Images,
    description: "html-to-image + pdf.js 최적화를 통한 고성능 페이지 썸네일 생성 및 캐싱 시스템",
    period: "2023 - 2024",
    role: "Performance Lead",
    impact: "썸네일 생성 속도 40% 향상, 메모리 사용량 30% 절약",
    techStack: ["html-to-image", "pdf.js", "Caching", "Image Optimization"],
    achievements: [
      "이미지 생성 파이프라인 최적화",
      "메모리 효율적 캐싱 시스템",
      "서버 렌더링 지원"
    ],
    color: "text-violet-600",
    bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20"
  },
  {
    title: "Theme/ClrMap",
    subtitle: "색상 테마 시스템",
    icon: Palette,
    description: "bg1/bg2, tx1/tx2, accent1~6 속성을 포함한 완전한 색상 테마 관리 시스템으로 0% 오차율 달성",
    period: "2024",
    role: "Architecture Lead",
    impact: "색상 오차율 0% 달성, 테마 적용 성능 50% 향상",
    techStack: ["Color Theory", "Database Design", "Theme Engine"],
    achievements: [
      "OFFICE_CLRMAP 테이블 신규 설계",
      "색상 정확도 100% 보장",
      "동적 테마 전환 시스템"
    ],
    color: "text-amber-600",
    bgGradient: "from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            핵심 모듈 & 프로젝트
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            5년간 설계하고 구현한 9개의 핵심 모듈과 시스템 아키텍처
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform bg-gradient-to-br ${project.bgGradient} border-0 group`}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`h-7 w-7 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-gray-800">
                    {project.period}
                  </Badge>
                </div>

                {/* Role & Impact */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      {project.role}
                    </Badge>
                  </div>
                  <div className="bg-white/70 dark:bg-gray-800/70 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                      📈 {project.impact}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">주요 성과</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}