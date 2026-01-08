'use client';

import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: 'R&D Director, Core & AI Transformation Lead',
    company: 'evoke',
    period: '2023 - Present',
    description: 'Lead engineering strategy and execution for customer onboarding, digital marketing platforms, and AI transformation across the organization. Direct multi-disciplinary teams and deliver secure, scalable systems aligned with business goals.',
    achievements: [
      'Led company-wide AI transformation, deploying GitHub Copilot to 1,200 developers - achieving 10% productivity increase within one year',
      'Defined long-term technology strategy delivering multi-program roadmaps improving scalability, security, and platform reliability across Core division',
      'Mentored and developed managers and engineers, enhancing leadership capabilities across Team Leads and Group Managers to build autonomous, high-performing teams',
      'Provided hands-on technical leadership for complex cloud-based solutions across AWS and Hybrid Architecture',
      'Represented organization as public speaker at technology events, strengthening brand and thought leadership',
    ],
  },
  {
    title: 'R&D Director, Core Engineering',
    company: '888.com',
    period: '2005 - 2023',
    description: 'Progressive leadership journey from hands-on developer to engineering director. Consistently combined strong technical expertise with leadership excellence, delivery, and business partnership across 18-year tenure.',
    achievements: [
      'Led end-to-end delivery of hundreds of large-scale projects, remaining hands-on while contributing to architecture and design across multiple technologies',
      'Generated £1.5M in annual savings through AI-powered QA automation initiatives',
      'Improved organizational operating efficiency by reducing time-to-hire by 70% and establishing streamlined recruitment process',
      'Improved team velocity by 20% after leading Agile adoption, strengthening predictability, transparency, and team autonomy',
      'Reduced time-to-market by 70% by streamlining development flows and improving collaboration between engineering and product',
      'Established quality guardrails using DORA metrics, improving cycle time, deployment frequency, and change failure rate across development units',
    ],
  },
];

const education = [
  {
    degree: 'Master of Science in Business Administration',
    school: 'Tel Aviv University',
    period: '2011 - 2014',
    focus: 'Business Administration & Strategic Management',
  },
  {
    degree: 'Bachelor of Science in Electronics and Communications',
    school: 'Tel Aviv University',
    period: '2002 - 2006',
    focus: 'Electronics Engineering & Communications Technology',
  },
];

const certifications = [
  'AWS Certified Solutions Architect - Professional',
  'Agile Certified Practitioner (ACP)',
  'ITIL Foundation Certification',
  'Leadership & Organizational Development',
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
            15+ years of engineering leadership, AI transformation, and building scalable systems at enterprise scale
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
