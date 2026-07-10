import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '@/data/certificates';
import CertificateCard from '@/components/cards/CertificateCard';
import SectionHeading from '@/components/common/SectionHeading';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials that validate my skills and commitment to continuous learning."
          accent="green"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} certificate={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
