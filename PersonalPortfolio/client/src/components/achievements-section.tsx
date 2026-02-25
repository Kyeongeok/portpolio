import { Bug, TestTube, Percent, Rocket, Target, Clock, Code, Database, Zap, Award, TrendingUp, Users } from "lucide-react";

const achievements = [
  {
    icon: Target,
    value: "100+",
    label: "IMS 이슈 해결",
    description: "5년간 체계적 이슈 관리",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    details: "품질 관리 시스템"
  },
  {
    icon: Percent,
    value: "0%",
    label: "색상 오차율",
    description: "Theme/ClrMap 완전 정확도",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    details: "100% 정확성 달성"
  },
  {
    icon: Code,
    value: "9개",
    label: "핵심 모듈 개발",
    description: "Annotation부터 Theme까지",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    details: "전체 아키텍처 설계"
  },
  {
    icon: TrendingUp,
    value: "70%",
    label: "성능 향상",
    description: "검색 알고리즘 최적화",
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    details: "Find/Replace 엔진"
  },
  {
    icon: Database,
    value: "4년",
    label: "Tibero ODBC",
    description: "Node.js 연동 전문성",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    details: "엔터프라이즈 DB 운영"
  },
  {
    icon: TestTube,
    value: "95%",
    label: "테스트 커버리지",
    description: "Jest 자동화 시스템",
    color: "text-teal-600",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    details: "품질 보증 체계"
  },
  {
    icon: Clock,
    value: "40%",
    label: "썸네일 성능",
    description: "html-to-image 최적화",
    color: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    details: "렌더링 엔진 개선"
  },
  {
    icon: Users,
    value: "실시간",
    label: "공동편집",
    description: "Operation Message Handler",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
    details: "다중 사용자 지원"
  }
];

const keyMetrics = [
  { label: "개발 경력", value: "5년", period: "2019.08 - 2024.12" },
  { label: "핵심 모듈", value: "9개", period: "설계 및 구현" },
  { label: "기술 스택", value: "15+", period: "전문 기술" },
  { label: "완료 프로젝트", value: "100%", period: "완전 인수인계" }
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            핵심 성과 & 임팩트
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            5년간 달성한 구체적인 성과와 기술적 임팩트
          </p>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.period}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="text-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                {/* Icon */}
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                </div>
                
                {/* Value */}
                <h3 className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.value}
                </h3>
                
                {/* Label */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.label}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Details Badge */}
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                  {achievement.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                5년간의 성장과 전문성
              </h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
              초급 개발자에서 시작하여 시스템 아키텍트까지, 오피스 소프트웨어 분야에서 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> 9개 핵심 모듈 설계</span>와 
              <span className="font-semibold text-green-600 dark:text-green-400"> 100% 완전한 인수인계</span>를 달성한 
              전문 개발자로 성장했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
