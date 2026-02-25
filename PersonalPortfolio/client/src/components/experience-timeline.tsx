import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Code, Database, TestTube, Zap } from "lucide-react";

const experiences = [
  {
    year: "2019",
    period: "2019.08 - 2019.12",
    title: "Office Software 안정화 & QA 시스템 구축",
    role: "초급 개발자",
    description: "ToHangul, WaplPoint 제품의 안정성 확보 및 체계적인 QA 프로세스 수립",
    coreModules: ["Bookmarks", "Page Background", "Border Structure"],
    techStack: ["TestLink", "OWPML", "QA Scenarios"],
    achievements: [
      "ToHangul, WaplPoint 제품 안정화 완료",
      "Word/한컴/OWPML 파일 포맷 비교 분석",
      "TestLink 기반 QA 시나리오 설계 및 자동화",
      "책갈피, 쪽 배경/테두리 구조 분석 문서화"
    ],
    metrics: ["50+ QA Cases", "3개 제품 안정화", "100% 문서화"]
  },
  {
    year: "2020",
    period: "2020.01 - 2020.12",
    title: "공통 엔진 모듈 설계 & 클라우드 연동",
    role: "백엔드 개발자",
    description: "PieceTree 기반 텍스트 엔진과 KERIS 클라우드 연동 시스템 구축",
    coreModules: ["Annotation (Ruby)", "PieceTree Engine", "KERIS Integration"],
    techStack: ["Node.js", "Tibero ODBC", "Docker", "DOCH/HWP Parser"],
    achievements: [
      "덧말(Ruby) PieceTree 기반 구조 설계 및 구현",
      "Node.js + Tibero ODBC 연동 시스템 개발",
      "Docker 컨테이너 환경 구축 및 배포 자동화",
      "DOCH/HWP import/export 파서 성능 개선",
      "IRFactory 기반 문서 구조 설계"
    ],
    metrics: ["Docker 환경 구축", "Parser 성능 30% 향상", "API 연동 완료"]
  },
  {
    year: "2021",
    period: "2021.01 - 2021.12",
    title: "양식개체 시스템 & 검색 기능 고도화",
    role: "프론트엔드 개발자",
    description: "사용자 대화형 양식 컴포넌트와 고급 검색/치환 기능 개발",
    coreModules: ["Form Objects", "Find/Replace", "Composition Symbols"],
    techStack: ["DOM/Render", "Macro Script API", "React Components"],
    achievements: [
      "EditBox, ComboBox 등 DOM/Render 구조 설계",
      "Find/Replace 고급 검색 알고리즘 구현",
      "Composition Symbols 입력 시스템 개발",
      "Macro Script API 비교 분석 및 최적화",
      "Section/Paragraph/LineNumber 연계 시스템",
      "ToolPane UX 설계 개선"
    ],
    metrics: ["5개 양식 컴포넌트", "검색 성능 50% 향상", "UX 개선"]
  },
  {
    year: "2022",
    period: "2022.01 - 2022.12",
    title: "SuperPoint Architecture 설계 & React 전환",
    role: "시스템 아키텍트",
    description: "차세대 프레젠테이션 엔진 아키텍처 설계 및 React 기반 재구성",
    coreModules: ["SuperPoint Engine", "Slide Relation Table", "Master Layout"],
    techStack: ["React", "TypeScript", "Slide Architecture", "Component Design"],
    achievements: [
      "Presentation/Slide Master/Layout/Normal Slide 계층 구조 설계",
      "Slide Relation Table 데이터 모델 설계",
      "React Component 아키텍처 설계 및 구현",
      "Kindle/리디북스 레퍼런스 UX 분석",
      "반응형 슬라이드 시스템 구축"
    ],
    metrics: ["React 전환 완료", "아키텍처 설계", "성능 최적화"]
  },
  {
    year: "2023",
    period: "2023.01 - 2023.12",
    title: "공동편집 Message Handler & 썸네일 최적화",
    role: "성능 최적화 전문가",
    description: "실시간 공동편집 시스템과 페이지 썸네일 생성 엔진 최적화",
    coreModules: ["Caption", "Cross-reference", "Page Thumbnail"],
    techStack: ["Operation Message Handler", "html-to-image", "pdf.js", "Server Rendering"],
    achievements: [
      "SuperWord 도형/그림/Breakline Operation Message Handler 개선",
      "Caption 기능 insert/delete/update 로직 구현",
      "Cross-reference 상호참조 시스템 설계",
      "html-to-image + pdf.js Flow 최적화",
      "Partial Loading & Server Rendering 구조 연구 및 적용"
    ],
    metrics: ["실시간 편집 지원", "썸네일 성능 40% 향상", "서버 렌더링 도입"]
  },
  {
    year: "2024",
    period: "2024.01 - 2024.12",
    title: "Theme/ClrMap 시스템 & 테스트 자동화",
    role: "풀스택 개발자",
    description: "색상 테마 관리 시스템과 포괄적인 테스트 자동화 환경 구축",
    coreModules: ["Theme/ClrMap", "Color Management", "Test Automation"],
    techStack: ["Jest", "Liquibase", "Database Design", "Color Theory"],
    achievements: [
      "ClrMap: bg1/bg2, tx1/tx2, accent1~6 속성 완전 설계",
      "OFFICE_CLRMAP 테이블 신규 설계 및 마이그레이션",
      "색상 오차율 0% 목표 달성 및 품질 보증",
      "Jest 테스트 Mock 설계 및 자동화 구축",
      "Liquibase 기반 DB 스키마 관리 체계화",
      "완전한 인수인계 문서 작성"
    ],
    metrics: ["색상 오차율 0%", "테스트 커버리지 95%", "완전 문서화"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            5년간의 개발 여정
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            2019년 8월부터 2024년 12월까지, 오피스 소프트웨어 안정화부터 아키텍처 설계까지의 성장 과정
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start group">
                {/* Year Badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-8 mb-4 md:mb-0 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <div className="text-center">
                    <div className="text-lg font-bold">{exp.year.slice(-2)}</div>
                  </div>
                </div>
                
                {/* Content Card */}
                <Card className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.period}</span>
                        <Badge variant="secondary" className="ml-auto">
                          {exp.role}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">{exp.description}</p>
                    </div>

                    {/* Core Modules */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">핵심 모듈</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.coreModules.map((module, moduleIndex) => (
                          <Badge 
                            key={moduleIndex} 
                            className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700"
                          >
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Database className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">기술 스택</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">주요 성과</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center gap-2">
                      <TestTube className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mr-3">핵심 지표</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.metrics.map((metric, metricIndex) => (
                          <Badge 
                            key={metricIndex} 
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
