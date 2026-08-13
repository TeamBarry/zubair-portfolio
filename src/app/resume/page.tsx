// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Download } from "lucide-react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Resume",
// //   description:
// //     "View Zubair Zafar's resume. Full-Stack Developer with expertise in React, Next.js, TypeScript, and Node.js.",
// // };

// export default function ResumePage() {
//   return (
//     <div className="py-24 px-4">
//       <div className="container mx-auto max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-8"
//         >
//           <Badge variant="secondary" className="mb-4">Resume</Badge>
//           <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
//             Zubair <span className="text-gradient">Zafar</span>
//           </h1>
//           <p className="text-muted-foreground mb-6">
//             Full-Stack Developer | React, Next.js, TypeScript, Node.js
//           </p>
         
//           <Button size="lg" asChild>
//   <a href="/Zubair_Zafar_Resum.pdf" download="Zubair_Zafar_Resum.pdf">
//     <Download className="mr-2 h-4 w-4" />
//     Download PDF
//   </a>
// </Button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Card className="glow-sm">
//             <CardContent className="p-8 space-y-8">
//               {/* Contact Info */}
//               <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b pb-6">
//                 <span className="flex items-center gap-1.5">
//                   <FaEnvelope className="h-3.5 w-3.5" /> zubairzafar396@gmail.com
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <FaLinkedin className="h-3.5 w-3.5" /> linkedin.com/in/zubair-zafar
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <FaGithub className="h-3.5 w-3.5" /> github.com/zubair-zafar
//                 </span>
//               </div>

//               {/* Summary */}
//               <div>
//                 <h2 className="text-lg font-semibold mb-2">Summary</h2>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Results-driven Full-Stack Developer with 2+ years of experience building
//                   scalable SaaS products. Expert in React, Next.js, TypeScript, and Node.js.
//                   Proven track record of shipping production-grade applications serving
//                   thousands of users. Open to relocation and remote opportunities.
//                 </p>
//               </div>

//               {/* Skills */}
//               <div>
//                 <h2 className="text-lg font-semibold mb-3">Technical Skills</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
//                   {[
//                     "React.js / Next.js",
//                     "TypeScript / JavaScript",
//                     "Node.js / Express.js",
//                     "Tailwind CSS / shadcn/ui",
//                     "Supabase / PostgreSQL",
//                     "Firebase / Firestore",
//                     "Zustand / Redux Toolkit",
//                     "Socket.io / WebSocket",
//                     "Git / GitHub / CI/CD",
//                     "Jest / React Testing Library",
//                     "Python / FastAPI",
//                     "Docker / Vercel",
//                   ].map((skill) => (
//                     <div key={skill} className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground">
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Experience */}
//               <div>
//                 <h2 className="text-lg font-semibold mb-3">Experience</h2>
//                 <div className="space-y-4">
//                   {[
//                     { role: "Full-Stack Developer", company: "TaskFlow Pro", period: "Jan 2025 - Present" },
//                     { role: "Full-Stack Developer", company: "MediConnect", period: "Oct 2024 - Dec 2024" },
//                     { role: "Frontend Developer", company: "InventoryIQ", period: "Jul 2024 - Sep 2024" },
//                   ].map((job) => (
//                     <div key={job.company} className="border-l-2 border-primary pl-4">
//                       <div className="font-medium">{job.role}</div>
//                       <div className="text-sm text-primary">{job.company}</div>
//                       <div className="text-xs text-muted-foreground">{job.period}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Education */}
//               <div>
//                 <h2 className="text-lg font-semibold mb-2">Education</h2>
//                 <div className="text-sm">
//                   <div className="font-medium">ADPCS Computer Science</div>
//                   <div className="text-muted-foreground">Superior University Lahore | CGPA: 3.72</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


// export const metadata: Metadata = {
//   title: "Resume",
//   description:
//     "View Zubair Zafar's resume. Full-Stack Developer with expertise in React, Next.js, TypeScript, and Node.js.",
// };

export default function ResumePage() {
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Badge variant="secondary" className="mb-4">
            Resume
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Zubair <span className="text-gradient">Zafar</span>
          </h1>

          <p className="text-muted-foreground mb-6">
            Full-Stack Developer | React · Next.js · Node.js · TypeScript
          </p>

          <Button size="lg" asChild>
            <a href="/Zubair_Zafar_Resum.pdf" download="Zubair_Zafar_Resum.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glow-sm">
            <CardContent className="p-8 space-y-8">

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b pb-6">
                <span className="flex items-center gap-1.5">
                  <FaEnvelope className="h-3.5 w-3.5" />
                  zubairzafar396@gmail.com
                </span>

                <span className="flex items-center gap-1.5">
                  <FaLinkedin className="h-3.5 w-3.5" />
                  linkedin.com/in/zubair-zafar-026334370
                </span>

                <span className="flex items-center gap-1.5">
                  <FaGithub className="h-3.5 w-3.5" />
                  github.com/zubair-zafar
                </span>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Results-driven Full-Stack Web Developer with 2+ years of
                  hands-on experience building and scaling production-grade SaaS
                  applications from concept to deployment. Specialized in React,
                  Next.js, TypeScript, Node.js, Supabase, and Firebase. Experienced
                  in database optimization, real-time systems, SEO, performance
                  optimization, and modern UI/UX development. Architected
                  EasyExamSolution, serving 1,800+ registered users with 159+
                  active subscribers and a database of 67,000+ exam questions.
                  Open to full-time, remote, and relocation opportunities worldwide.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Technical Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Redux",
                    "Tailwind CSS",
                    "HTML5 / CSS3",
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "Supabase / PostgreSQL",
                    "MongoDB",
                    "Firebase / Firestore",
                    "Jest / RTL",
                    "Playwright / MSW",
                    "Git / GitHub",
                    "Cloudinary",
                    "Vercel",
                    "Figma",
                    "WordPress",
                    "SEO / Core Web Vitals",
                    "Data Structures & Algorithms",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Professional Experience
                </h2>

                <div className="space-y-6">

                  {/* Freelance */}
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-medium">
                      Freelance Full-Stack Web Developer
                    </div>

                    <div className="text-sm text-primary">
                      Independent / Self-Employed
                    </div>

                    <div className="text-xs text-muted-foreground mb-2">
                      Jan 2024 - Present · Remote
                    </div>

                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc ml-4">
                      <li>
                        Architected and deployed EasyExamSolution, a
                        subscription-based EdTech SaaS platform serving 1,800+
                        registered users and 159+ active subscribers.
                      </li>

                      <li>
                        Optimized Supabase PostgreSQL architecture with advanced
                        indexing and query optimization, enabling sub-2-second
                        retrieval across 67,000+ exam questions.
                      </li>

                      <li>
                        Built TaskMatrix, an enterprise task management system
                        featuring Firebase Authentication, role-based access
                        control, real-time Firestore synchronization, and agile
                        workflow tracking.
                      </li>

                      <li>
                        Developed PakWaqt using Next.js SSR/SSG, real-time API
                        integrations, responsive UI, and advanced SEO
                        optimization.
                      </li>

                      <li>
                        Delivered 5+ client projects including frontend redesigns,
                        responsive landing pages, and custom web applications.
                      </li>

                      <li>
                        Maintained 95%+ on-time delivery through direct client
                        communication and iterative development workflows.
                      </li>
                    </ul>
                  </div>

                  {/* Aklikx */}
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-medium">
                      Full-Stack Web Developer — Internship
                    </div>

                    <div className="text-sm text-primary">
                      Aklikx Technologies
                    </div>

                    <div className="text-xs text-muted-foreground mb-2">
                      Apr 2024 - Jul 2024 · Lahore, Pakistan
                    </div>

                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc ml-4">
                      <li>
                        Developed full-stack web features using React.js and
                        Node.js with a focus on responsive UI and REST API
                        integration.
                      </li>

                      <li>
                        Collaborated with the development team in an Agile Scrum
                        environment to build and deploy scalable web
                        applications.
                      </li>

                      <li>
                        Participated in code reviews, Git/GitHub workflows,
                        debugging, and iterative feature development.
                      </li>

                      <li>
                        Followed industry best practices for version control,
                        reusable components, and maintainable application code.
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Featured Projects
                </h2>

                <div className="space-y-4">

                  <div>
                    <div className="font-medium">
                      EasyExamSolution
                    </div>

                    <div className="text-sm text-muted-foreground">
                      React · Supabase · PostgreSQL · Node.js · Vercel
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      Subscription-based EdTech SaaS platform with 1,800+ users,
                      159+ active subscribers, and 67,000+ exam questions.
                    </p>
                  </div>

                  <div>
                    <div className="font-medium">
                      CraftAIWorld
                    </div>

                    <div className="text-sm text-muted-foreground">
                      React · Redux · Node.js · Supabase · Cloudinary · AI
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      AI-powered cultural design platform reaching 124+
                      countries with 92,000+ generated patterns and 5,600+
                      artists.
                    </p>
                  </div>

                  <div>
                    <div className="font-medium">
                      TaskMatrix
                    </div>

                    <div className="text-sm text-muted-foreground">
                      React · Firebase Auth · Firestore · Real-time Sync
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      Enterprise task management platform with real-time
                      synchronization, role-based access control, and agile
                      workflow tracking.
                    </p>
                  </div>

                  <div>
                    <div className="font-medium">
                      PakWaqt
                    </div>

                    <div className="text-sm text-muted-foreground">
                      Next.js · SSR/SSG · REST APIs · SEO
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      Localized utility web application focused on performance,
                      responsive design, real-time APIs, and search visibility.
                    </p>
                  </div>

                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Education
                </h2>

                <div className="text-sm">
                  <div className="font-medium">
                    Associate Degree in Computer Science
                  </div>

                  <div className="text-muted-foreground">
                    Superior University, Lahore
                  </div>

                  <div className="text-muted-foreground">
                    Sep 2022 - Jun 2025 · CGPA: 3.72 / 4.0
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Certifications
                </h2>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">
                      Full Stack Web Development
                    </span>{" "}
                    — UET Lahore · Grade A
                  </div>

                  <div>
                    <span className="font-medium text-foreground">
                      Front-End Development
                    </span>{" "}
                    — PNY Training · Grade A
                  </div>

                  <div>
                    <span className="font-medium text-foreground">
                      React - The Complete Guide
                    </span>{" "}
                    — Udemy · Academind
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Languages
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <div>English — Professional Working Proficiency</div>
                  <div>Urdu — Native / Bilingual</div>
                  <div>Punjabi — Conversational</div>
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}