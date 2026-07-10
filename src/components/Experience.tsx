import React from 'react';
import { experiences } from '@/data/experience';
import ExperienceCard from '@/components/cards/ExperienceCard';
import SectionHeading from '@/components/common/SectionHeading';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="My journey so far — education, projects, leadership, and continuous learning."
          accent="purple"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
