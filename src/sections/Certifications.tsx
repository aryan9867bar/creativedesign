import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ExternalLink, User } from 'lucide-react';

const certifications = [
  {
    title: 'Full Stack Developer Internship',
    issuer: 'Nexus Institute of Information Technology',
    date: 'September 2023',
    credentialId: 'NIIT-FS-2023',
    highlights: [
      'Building scalable web applications',
      'AngularJS & ReactJS frontend development',
      'NodeJS & ExpressJS backend APIs',
      'MongoDB database management',
      'Full-stack project deployment',
    ],
    verifyUrl: '#',
  },
  {
    title: 'Advance Web Development',
    issuer: 'NIIT Birgunj',
    date: 'March 2021',
    credentialId: 'NIIT-AWD-2021',
    highlights: [
      'Modern HTML5 & CSS3 techniques',
      'JavaScript ES6+ fundamentals',
      'Responsive web design principles',
      'Cross-browser compatibility',
    ],
    verifyUrl: '#',
  },
  {
    title: 'Digital Marketing',
    issuer: 'NIIT Birgunj',
    date: 'August 2018',
    credentialId: 'NIIT-DM-2018',
    highlights: [
      'SEO optimization strategies',
      'Google Analytics implementation',
      'Google Ads campaign management',
      'WordPress site development',
      'Social media marketing',
    ],
    verifyUrl: '#',
  },
  {
    title: 'Hacktoberfest 2023',
    issuer: 'DigitalOcean',
    date: 'October 2023',
    highlights: [
      'Open source contributions',
      'Git version control mastery',
      'GitHub collaboration workflows',
      'Code review best practices',
    ],
    verifyUrl: '#',
  },
  {
    title: 'Hacktoberfest 2022',
    issuer: 'DigitalOcean',
    date: 'October 2022',
    highlights: [
      'First open source contributions',
      'Git fundamentals',
      'GitHub pull request workflows',
    ],
    verifyUrl: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and credentials that validate my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-medium">{cert.issuer}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {cert.credentialId && (
                <p className="text-sm text-muted-foreground mb-4">
                  Credential ID: {cert.credentialId}
                </p>
              )}

              <ul className="space-y-2 mb-4">
                {cert.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline transition-all"
                >
                  Verify Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
