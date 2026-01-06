'use client';

import { Brain, Code, Database, Zap, GitBranch, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Large Language Models', level: 95 },
      { name: 'NLP & Text Processing', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Deep Learning (PyTorch/TensorFlow)', level: 90 },
      { name: 'MLOps & Model Deployment', level: 85 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript/JavaScript', level: 88 },
      { name: 'Go', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'Rust', level: 70 },
    ],
  },
  {
    title: 'AI Frameworks & Tools',
    icon: Zap,
    skills: [
      { name: 'LangChain / LlamaIndex', level: 92 },
      { name: 'OpenAI API / Anthropic Claude', level: 95 },
      { name: 'Hugging Face Transformers', level: 88 },
      { name: 'Vector Databases (Pinecone/Weaviate)', level: 85 },
      { name: 'Scikit-learn / XGBoost', level: 90 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS (SageMaker, Lambda, EC2)', level: 88 },
      { name: 'Azure AI Services', level: 82 },
      { name: 'Google Cloud (Vertex AI)', level: 80 },
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'Terraform / IaC', level: 78 },
    ],
  },
  {
    title: 'Data & Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'MongoDB / NoSQL', level: 85 },
      { name: 'Redis / Caching', level: 82 },
      { name: 'Apache Spark / Big Data', level: 80 },
      { name: 'ETL Pipelines', level: 85 },
    ],
  },
  {
    title: 'Development Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git / GitHub / CI/CD', level: 92 },
      { name: 'VS Code / IDEs', level: 95 },
      { name: 'Jupyter / Notebooks', level: 90 },
      { name: 'FastAPI / Flask', level: 88 },
      { name: 'Next.js / React', level: 85 },
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
            A comprehensive overview of my technical skills and proficiency levels
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
            Always learning and exploring new technologies in the AI space 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
