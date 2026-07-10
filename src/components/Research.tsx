import React from 'react';
import { motion } from 'framer-motion';
import { researchPapers } from '@/data/research';
import ResearchCard from '@/components/cards/ResearchCard';
import SectionHeading from '@/components/common/SectionHeading';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Research"
          subtitle="Exploring the intersection of machine learning, data science, and real-world applications."
          accent="cyan"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {researchPapers.map((paper, index) => (
            <ResearchCard key={paper.id} paper={paper} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
