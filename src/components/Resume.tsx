import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from 'lucide-react';
import { personal } from "@/data/personal";
import { experiences } from "@/data/experience";
import { allSkills } from "@/data/skills";
import SectionHeading from '@/components/common/SectionHeading';

// Top skills for the resume summary
const topSkills = allSkills.slice(0, 8);

// Work-type experiences only (non-education)
const workExperiences = experiences.filter((e) => e.type !== 'education');

const Resume = () => {
  const handleDownload = () => {
    if (personal.resumeUrl) {
      window.open(personal.resumeUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Resume"
          subtitle="A complete overview of my education, experience, and skills."
          accent="green"
        />

        <div className="max-w-4xl mx-auto">
          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="glass p-8 rounded-2xl hover-tilt">
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the complete overview of my education, skills, and project experience.
              </p>
              {personal.resumeUrl ? (
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300 px-8 py-4 text-lg"
                  onClick={handleDownload}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume (PDF)
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Resume PDF coming soon — contact me directly at{' '}
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-primary hover:text-white transition-colors"
                  >
                    {personal.email}
                  </a>
                </p>
              )}
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="glass p-6 rounded-xl hover-tilt"
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🎓 Education
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">{personal.education.degree}</h4>
                  <p className="text-sm text-muted-foreground">{personal.education.field}</p>
                  <p className="text-sm text-muted-foreground">{personal.education.institution}</p>
                  <p className="text-sm text-neon-blue">{personal.education.duration}</p>
                  {personal.education.gpa && (
                    <p className="text-xs text-neon-green mt-1">GPA: {personal.education.gpa}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-xl hover-tilt"
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🚀 Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs px-3 py-1 rounded-full bg-muted/60 border border-border/40 text-foreground font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass p-6 rounded-xl hover-tilt"
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🏆 Achievements
              </h3>
              <ul className="space-y-2 text-sm">
                {personal.careerGoals.slice(0, 3).map((goal, i) => (
                  <li key={goal} className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 animate-glow-pulse shrink-0"
                      style={{
                        backgroundColor: ['var(--color-accent)', 'var(--color-primary)', 'var(--color-secondary)'][i % 3],
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-xl hover-tilt"
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                💼 Experience
              </h3>
              <div className="space-y-4">
                {workExperiences.map((exp, i) => (
                  <div
                    key={exp.id}
                    className="border-l-2 pl-4"
                    style={{
                      borderColor: ['var(--color-secondary)', 'var(--color-accent)', 'var(--color-primary)'][i % 3],
                    }}
                  >
                    <h4 className="font-medium text-sm">{exp.role}</h4>
                    <p className="text-xs text-muted-foreground">{exp.organization}</p>
                    <p className="text-xs text-neon-blue">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-2">
                {personal.vision}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Response time: {personal.responseTime}
              </p>
              <Button
                size="lg"
                className="bg-gradient-secondary hover:shadow-neon-purple transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;