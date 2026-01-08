'use client';

import { Brain, Code, Database, Zap, GitBranch, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Engineering Leadership',
    icon: Brain,
    skills: [
      { name: 'Large-Scale Team Leadership (100+ Engineers)', level: 95 },
      { name: 'Engineering Strategy & Roadmap', level: 95 },
      { name: 'AI Transformation & Enablement', level: 92 },
      { name: 'SDLC Modernization', level: 90 },
      { name: 'Talent Management & Recruitment', level: 92 },
    ],
  },
  {
    title: 'Technical Architecture',
    icon: Code,
    skills: [
      { name: 'Cloud Architecture (AWS)', level: 90 },
      { name: 'Distributed Systems & Scalability', level: 88 },
      { name: 'CI/CD & DevOps Practices', level: 88 },
      { name: 'Kafka & Message Queues', level: 85 },
      { name: 'Hybrid & Cloud Infrastructure', level: 85 },
    ],
  },
  {
    title: 'Strategic Initiatives',
    icon: Zap,
    skills: [
      { name: 'AI Developer Enablement Programs', level: 92 },
      { name: 'Cost & Value Optimization', level: 90 },
      { name: 'Agile & Scrum Adoption', level: 92 },
      { name: 'Cross-Company Delivery', level: 88 },
      { name: 'Public Speaking & Thought Leadership', level: 85 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, Lambda, RDS, SageMaker)', level: 90 },
      { name: 'Cloud Security & Compliance', level: 85 },
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'GitHub Copilot & Developer Tools', level: 92 },
      { name: 'Infrastructure as Code (Terraform, Bicep)', level: 82 },
    ],
  },
  {
    title: 'Distributed Systems',
    icon: Database,
    skills: [
      { name: 'Kafka & Event Streaming', level: 88 },
      { name: 'Redis & Caching Systems', level: 85 },
      { name: 'Database Architecture (SQL/NoSQL)', level: 88 },
      { name: 'Queue Systems & Async Processing', level: 85 },
      { name: 'System Performance & Optimization', level: 87 },
    ],
  },
  {
    title: 'Development & Practices',
    icon: GitBranch,
    skills: [
      { name: 'DORA Metrics & Quality Frameworks', level: 90 },
      { name: 'Continuous Integration & Deployment', level: 92 },
      { name: 'Agile Ceremonies & Mindset', level: 92 },
      { name: 'Code Quality & Testing', level: 88 },
      { name: 'Engineering Best Practices', level: 92 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ years of leadership experience spanning engineering strategy, AI transformation, cloud architecture, and distributed systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/90">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Proven track record delivering scalable systems, leading transformative initiatives, and building high-performing teams across global organizations 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
