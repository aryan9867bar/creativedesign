import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Technology in Artificial Intelligence',
    institution: 'Indian Institute of Technology Jodhpur',
    location: 'Jodhpur, Rajasthan, India',
    period: '2025 - 2027',
    status: 'Current',
    cgpa: null,
    description: 'Advanced coursework in ML, Software Engineering, Cloud Computing, and AI for Healthcare',
    keyCourses: [
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Computer Vision',
      'Natural Language Processing',
      'Data Structure and Algorithms',
      'MLOps',
      'Cloud Computing',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Jain University (Deemed-to-be-University)',
    location: 'Bengaluru, Karnataka, India',
    period: '2020 - 2024',
    status: 'Completed',
    cgpa: '8.407/10.00',
    description: 'Specialized in software engineering with focus on full-stack development and project management',
    keyCourses: [
      'Data Structures and Algorithms',
      'Object Oriented Programming',
      'DBMS',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems',
      'Web Development',
      'Cloud Computing',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
          <p className="section-subtitle">My academic background and qualifications</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover-glow relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    {edu.status === 'Current' && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Degree */}
                  <h4 className="text-base md:text-lg font-semibold text-primary mb-3">
                    {edu.degree}
                  </h4>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Key Courses */}
                  {edu.keyCourses && edu.keyCourses.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Courses</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.keyCourses.map((course, courseIndex) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 + courseIndex * 0.05 }}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
