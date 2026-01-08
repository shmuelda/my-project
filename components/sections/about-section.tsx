'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Cpu, Globe, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { icon: Brain, label: 'Leadership', color: '#007AFF' },
  { icon: Code2, label: 'Architecture', color: '#007AFF' },
  { icon: Cpu, label: 'Transformation', color: '#007AFF' },
  { icon: Globe, label: 'Cloud', color: '#007AFF' },
  { icon: Sparkles, label: 'Innovation', color: '#007AFF' },
  { icon: Zap, label: 'Strategy', color: '#007AFF' },
];

const timeline = [
  {
    year: '2023',
    title: 'AI Transformation Leader',
    description: 'Leading AI-driven developer enablement program for 1,200+ developers at evoke.',
  },
  {
    year: '2022',
    title: 'SDLC Modernization Champion',
    description: 'Defining North Star for SDLC modernization and enterprise tooling strategy.',
  },
  {
    year: '2015',
    title: 'Engineering Director',
    description: 'Promoted to Director at 888.com, leading teams of 100+ engineers.',
  },
  {
    year: '2005',
    title: 'Software Engineer',
    description: 'Started hands-on engineering journey at 888.com, progressively advancing to leadership.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative bg-muted/30">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Director of Engineering with 15+ years leading innovation and transformation at scale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              {/* Profile Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0">
                  <Image
                    src="/round-avatar.svg"
                    alt="Daniel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">Shmuel Daniel</h3>
                  <p className="text-primary font-medium mb-2">Director of Engineering</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <a href="mailto:Daniel.shmuel@gmail.com" className="hover:text-foreground transition-colors">
                      Daniel.shmuel@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Director of Engineering with 15+ years of proven leadership building and scaling high-performing engineering teams of 100+ engineers. Expert in AI transformation, SDLC modernization, and cloud architecture across AWS and distributed systems.
                </p>
                <p>
                  I've led enterprise-wide initiatives including defining North Star technology strategies, deploying GitHub Copilot to 1,200 developers (achieving 10% productivity gain), and generating £1.5M in annual savings through AI-powered QA automation. Known for aligning engineering execution with business outcomes while mentoring leaders at all levels.
                </p>
                <p>
                  Technically grounded leader with hands-on experience architecting scalable systems, driving organizational transformation, and building sustainable competitive advantages through technology and talent development.
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#resume"
                    className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary transition-colors"
                  >
                    View Resume
                  </a>
                  <a
                    href="#skills"
                    className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
                  >
                    Explore Skills
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills & Timeline */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-[#1C1C1E] mb-6">Skills</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div key={skill.label} variants={itemVariants}>
                      <div className="glass-light shadow-glass rounded-xl p-4 text-center hover-lift cursor-default">
                        <div
                          className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors"
                          style={{ backgroundColor: `${skill.color}10` }}
                        >
                          <IconComponent
                            className="w-6 h-6 transition-transform"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-sm font-medium text-[#1C1C1E]/70">
                          {skill.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#1C1C1E] mb-6">My Journey</h3>
              <div className="space-y-1">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-8 last:pb-0"
                  >
                    {/* Timeline line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#FF4D8E] to-[#FF4D8E]/20" />
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#FF4D8E]/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D8E]" />
                    </div>

                    {/* Content */}
                    <div className="pt-0.5">
                      <span className="text-[#FF4D8E] text-sm font-medium">{item.year}</span>
                      <h4 className="text-[#1C1C1E] font-semibold mt-1">{item.title}</h4>
                      <p className="text-[#1C1C1E]/50 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
