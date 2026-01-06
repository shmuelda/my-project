'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { CTASection } from '@/components/sections/cta-section';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
