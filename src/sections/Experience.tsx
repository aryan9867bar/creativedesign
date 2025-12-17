import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, ExternalLink, BookOpen, Code2 } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Nexus Institute of Information Technology Pvt. Ltd.',
    location: 'Birgunj',
    period: '06/2023 - 09/2023',
    type: 'Internship',
    icon: Code2,
    certificateUrl: '', // Add your certificate URL here
    highlights: [
      'Gained practical experience in problem-solving and web development',
      'Exposed to various processes for website development using AngularJS, ReactJS, NodeJS, ExpressJS, MongoDB',
      'Contributed to projects for global clients, enhancing business growth',
      'Received letter of recommendation and certificate upon completion',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Angular'],
  },
];

const courses = [
  {
    title: 'Advance Web Development',
    institution: 'NIIT Birgunj',
    period: '01/2021 - 03/2021',
    icon: Code2,
    certificateUrl: '', // Add your certificate URL here
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Digital Marketing',
    institution: 'NIIT Birgunj',
    period: '06/2018 - 08/2018',
    icon: BookOpen,
    certificateUrl: '', // Add your certificate URL here
    skills: ['SEO', 'Social Media', 'Analytics', 'Content Marketing'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and training</p>
        </motion.div>

        <div className="space-y-12">
          {/* Work Experience */}
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover-glow relative overflow-hidden group"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-start gap-6 mb-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                          {exp.type}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-4">Key Responsibilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Certificate */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-background/50 border border-border rounded-full text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {exp.certificateUrl ? (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-medium transition-colors"
                      >
                        <Award className="w-4 h-4" />
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-muted-foreground text-sm">
                        <Award className="w-4 h-4" />
                        Certificate Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Professional Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Courses</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="glass-card rounded-2xl p-6 hover-glow relative overflow-hidden group"
                  >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                            Course
                          </span>
                          <h4 className="text-xl font-bold text-primary mt-2">{course.title}</h4>
                          <p className="text-muted-foreground text-sm">{course.institution}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        {course.period}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-background/50 border border-border rounded-full text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate Link */}
                      {course.certificateUrl ? (
                        <a
                          href={course.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary text-sm font-medium transition-colors"
                        >
                          <Award className="w-4 h-4" />
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-muted-foreground text-sm">
                          <Award className="w-4 h-4" />
                          Certificate Coming Soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
