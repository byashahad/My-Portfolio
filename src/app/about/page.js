"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Code2,
  FolderGit2,
  Rocket,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";

// ==================== ANIMATION VARIANTS ====================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  },
};

// ==================== DATA ====================
const personalInfo = [
  { value: "Ashahad Khan", icon: Briefcase },
  { value: "India", icon: MapPin },
  { value: "1+ Year Experience", icon: Calendar },
  { value: "ashahadkhanind@gmail.com", icon: Mail },
];

const stats = [
  { number: "10+", label: "Projects Delivered", icon: FolderGit2 },
  { number: "1+", label: "Years Experience", icon: Calendar },
  { number: "15+", label: "Technologies", icon: Code2 },
  { number: "100%", label: "Commitment", icon: Rocket },
];

const skills = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    borderColor: "hover:border-blue-500/50",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-400",
    borderColor: "hover:border-green-500/50",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    color: "from-purple-500 to-pink-400",
    borderColor: "hover:border-purple-500/50",
    items: ["MongoDB", "MongoDB Atlas"],
  },
  {
    title: "Tools",
    color: "from-orange-500 to-yellow-400",
    borderColor: "hover:border-orange-500/50",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Project Portfolio",
    period: "2024 – Present",
    type: "Full-Stack Development",
    points: [
      "Architected and deployed 10+ full-stack applications using MongoDB, Express, React, and Node.js",
      "Implemented secure authentication, role-based authorization, and RESTful API services",
      "Engineered responsive UIs with Tailwind CSS, achieving seamless cross-device compatibility",
      "Managed version control and CI/CD pipelines via Git and Vercel",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science",
    institution: "MSU University",
    year: "2025 – Present · 4th Semester",
    description:
      "Currently pursuing BCA with focus on Data Structures, Algorithms, Database Systems, and Full-Stack Development.",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

// ==================== COMPONENT ====================
export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 pt-20 md:pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          {/* Profile Avatar */}
          <motion.div variants={scaleUp} className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 shadow-2xl shadow-purple-500/25">
              <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-3xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ashahad Khan
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-gray-300 mb-6">
            MERN Stack Developer
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 px-4">
            BCA student and full-stack developer specializing in modern web applications.
            I build scalable, performant solutions with React, Next.js, and Node.js.
          </motion.p>

          {/* Personal Info Pills */}
          <motion.div variants={stagger} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-4">
            {personalInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:border-purple-500/50 transition-colors"
              >
                <info.icon className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                <span className="text-xs md:text-sm text-gray-300">{info.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            <Link
              href="/projects"
              className="group px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              View Projects
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 md:px-6 md:py-3 border-2 border-gray-700 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all text-sm md:text-base"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            variants={scaleUp}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mt-8"
          >
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-emerald-400 font-medium">Open to Internship & Opportunities</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
              >
                <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-purple-400 mx-auto mb-2 md:mb-3" />
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold">
              Focused on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Building Products That Matter
              </span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I specialize in the MERN stack, crafting full-stack web applications 
              with clean architecture and intuitive user experiences. My approach 
              combines modern frontend practices with robust backend systems.
            </p>
            <p>
              Every project I build is an opportunity to solve real problems. 
              From authentication flows to database optimization, I focus on 
              writing production-ready code that scales.
            </p>
            <p>
              Currently seeking internship or entry-level opportunities where I can 
              contribute to meaningful projects and continue growing as a developer.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-900/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Technical Expertise</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              Technologies I{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Modern stack for building production-grade applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 ${category.borderColor} transition-all`}
              >
                <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1.5 md:px-3 md:py-2 bg-gray-800/80 rounded-lg text-xs md:text-sm text-gray-300 border border-gray-700/50 hover:border-purple-500/50 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Project Experience</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold">
              What I've{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Built
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />
            
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative pl-10 md:pl-20"
                >
                  <div className="absolute left-4 md:left-8 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full -translate-x-1/2 mt-4 md:mt-6 shadow-lg shadow-purple-500/50" />

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 text-sm md:text-base mb-3">{exp.company}</p>

                    <div className="space-y-1.5 md:space-y-2">
                      {exp.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-300">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== EDUCATION SECTION ==================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gray-900/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wider">Education</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold">
              Academic{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Foundation
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-purple-500/20 rounded-xl flex-shrink-0">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 text-xs md:text-sm">{edu.field}</p>
                      <p className="text-gray-400 text-sm md:text-base mt-1">{edu.institution}</p>
                      <p className="text-gray-500 text-xs md:text-sm mt-2">{edu.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 text-gray-300 rounded-lg text-xs md:text-sm whitespace-nowrap mt-3 md:mt-0">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp}>
            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mx-auto mb-4 md:mb-6" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg max-w-xl mx-auto">
            Looking for internship or entry-level opportunities where I can 
            contribute, learn, and deliver results.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <Link
              href="/contact"
              className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              Start a Conversation
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-700 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <FolderGit2 className="w-3 h-3 md:w-4 md:h-4" />
              Explore Work
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}