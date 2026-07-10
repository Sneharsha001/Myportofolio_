import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Certificate } from '@/types/certificate';

interface CertificateCardProps {
  certificate: Certificate;
  index?: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl p-5 border border-border/40 hover:border-primary/30 hover:shadow-neon-blue transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
          <Award className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-neon-blue transition-colors duration-200">
            {certificate.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span className="font-medium text-neon-purple">{certificate.issuer}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {certificate.date}
            </span>
          </div>
        </div>
      </div>

      {/* Skills learned */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {certificate.skillsLearned.slice(0, 4).map((s) => (
          <span
            key={s}
            className="text-xs bg-muted/60 border border-border/40 px-2 py-0.5 rounded-full text-muted-foreground"
          >
            {s}
          </span>
        ))}
        {certificate.skillsLearned.length > 4 && (
          <span className="text-xs text-muted-foreground">+{certificate.skillsLearned.length - 4} more</span>
        )}
      </div>

      {/* Credential link */}
      {certificate.credentialUrl ? (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors duration-200 font-medium"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          View Credential
        </a>
      ) : (
        <span className="text-xs text-muted-foreground italic">Credential URL coming soon</span>
      )}
    </motion.div>
  );
};

export default CertificateCard;
