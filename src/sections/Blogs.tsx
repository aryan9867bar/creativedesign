import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publications = [
  {
    type: 'Conference',
    tag: 'C.1',
    title: 'Real Time Analysis of Emotion Based on Artificial Intelligence',
    venue: 'International Conference on Advanced Data-Driven Intelligence and Engineering (ICADIE-2024)',
    organization: 'Jain University (Deemed-to-be-University)',
    date: 'March 7th - 9th, 2024',
    location: 'Bengaluru, Karnataka',
    link: '#',
  },
  {
    type: 'Journal',
    tag: 'J.1',
    title: 'Real Time Analysis of Facial Emotion using Convolutional Neural Network',
    venue: 'International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE)',
    details: 'Volume 12, Issue 5',
    date: 'May 2024',
    link: 'https://ijircce.com',
  },
];

const blogs = [
  {
    title: 'Getting Started with MERN Stack Development',
    excerpt: 'A comprehensive guide to building full-stack applications using MongoDB, Express, React, and Node.js. Learn the fundamentals and best practices for modern web development.',
    date: 'December 2024',
    link: 'https://medium.com/@aryan123web',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
  {
    title: 'Understanding Emotion Detection with AI',
    excerpt: 'Deep dive into how AI and machine learning can be used to detect human emotions in real-time. Explore CNNs, facial recognition, and practical implementations.',
    date: 'November 2024',
    link: 'https://medium.com/@aryan123web',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    title: 'Cloud Deployment Best Practices',
    excerpt: 'Tips and tricks for deploying your applications on AWS and GCP for optimal performance. Cover CI/CD pipelines, containerization, and scaling strategies.',
    date: 'October 2024',
    link: 'https://medium.com/@aryan123web',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Publications & Blogs</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My research publications and technical writings
          </p>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Research Publications</h3>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow"
            >
              <div className="flex flex-wrap items-start gap-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {pub.tag}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs rounded ${
                      pub.type === 'Conference' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {pub.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{pub.title}</h4>
                  <p className="text-primary">{pub.venue}</p>
                  {pub.organization && (
                    <p className="text-muted-foreground text-sm">{pub.organization}, {pub.location}</p>
                  )}
                  {pub.details && (
                    <p className="text-muted-foreground text-sm">{pub.details}</p>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(pub.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Blog Posts</h3>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover-glow group cursor-pointer"
              onClick={() => window.open(blog.link, '_blank')}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-primary">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Read on Medium <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open('https://medium.com/@aryan123web', '_blank')}
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
