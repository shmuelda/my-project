'use client';

import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Senior AI Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading AI/ML initiatives, developing NLP solutions, and implementing LLM-based applications.',
    achievements: [
      'Built production-ready AI agents using LangChain and OpenAI',
      'Improved model accuracy by 35% through fine-tuning',
      'Led a team of 5 engineers on ML infrastructure projects',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'AI Solutions Co.',
    period: '2020 - 2022',
    description: 'Developed and deployed machine learning models for various business applications.',
    achievements: [
      'Implemented computer vision systems for quality control',
      'Created recommendation systems serving 1M+ users',
      'Reduced inference latency by 60% through optimization',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'DataTech Corp',
    period: '2018 - 2020',
    description: 'Analyzed large datasets and built predictive models to drive business decisions.',
    achievements: [
      'Built customer churn prediction models with 85% accuracy',
      'Automated data pipelines processing 10TB+ daily',
      'Presented insights to C-level executives',
    ],
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: '2016 - 2018',
    focus: 'Specialization in Artificial Intelligence and Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'MIT',
    period: '2012 - 2016',
    focus: 'Minor in Mathematics',
  },
];

const certifications = [
  'AWS Certified Machine Learning - Specialty',
  'Google Cloud Professional ML Engineer',
  'Deep Learning Specialization (Coursera)',
  'Microsoft Azure AI Engineer Associate',
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in artificial intelligence and machine learning
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />
                
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                <p className="text-sm text-foreground/80">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/90">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            Download Full Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
