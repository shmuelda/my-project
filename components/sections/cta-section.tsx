'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { ButtonPrimary } from '@/components/ui/button-primary';

const contactMethods = [
  {
    name: 'Email',
    handle: 'daniel.shmuel@gmail.com',
    href: 'mailto:daniel.shmuel@gmail.com',
    icon: Mail,
    color: '#007AFF',
  },
  {
    name: 'GitHub',
    handle: '@daniel',
    href: 'https://github.com/daniel',
    icon: Github,
    color: '#007AFF',
  },
  {
    name: 'LinkedIn',
    handle: '@daniel',
    href: 'https://linkedin.com/in/daniel',
    icon: Linkedin,
    color: '#007AFF',
  },
  {
    name: 'Twitter',
    handle: '@daniel',
    href: 'https://twitter.com/daniel',
    icon: Twitter,
    color: '#007AFF',
  },
];

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new opportunities, collaborations, 
            and innovative AI projects. Feel free to reach out!
          </p>

          <motion.a
            href="mailto:daniel.shmuel@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Connect With Me
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Follow me on social media for AI insights, projects, and tech updates
          </p>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {contactMethods.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all group shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 transition-transform group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {contact.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {contact.handle}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            Looking forward to connecting with you! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
