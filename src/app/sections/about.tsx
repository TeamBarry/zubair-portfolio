// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";

// const stats = [
//   { label: "Projects", value: "50+" },
//   { label: "Years", value: "2+" },
//   { label: "Tech Stacks", value: "18" },
//   { label: "Users Reached", value: "2K+" },
// ];

// export default function About() {
//   return (
//     <section id="about" className="py-24 px-4">
//       <div className="container mx-auto max-w-5xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           {/* Left: Bio */}
//           <div>
//             <Badge variant="secondary" className="mb-4">
//               About Me
//             </Badge>
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
//               Building products that{" "}
//               <span className="text-gradient">make an impact</span>
//             </h2>
//             <div className="space-y-4 text-muted-foreground leading-relaxed">
//               <p>
//                 I am Zubair Zafar, a Full-Stack Developer from Lahore, Pakistan.
//                 I specialize in building scalable SaaS products using React, Next.js,
//                 TypeScript, and Node.js.
//               </p>
//               <p>
//                 My journey started with a passion for solving real problems. From
//                 EasyExamSolution serving 1,800+ students to CraftAIWorld reaching
//                 124+ countries — I focus on shipping products that matter.
//               </p>
//               <p>
//                 Currently open to remote opportunities and relocation to
//                 Germany, UAE, Canada, or Netherlands.
//               </p>
//             </div>
//           </div>

//           {/* Right: Stats Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="card-lift glow-sm rounded-xl border p-6 text-center"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Projects", value: "50+" },
  { label: "Years", value: "2+" },
  { label: "Tech Stacks", value: "18+" },
  { label: "Users Reached", value: "2K+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Bio */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Building products that{" "}
              <span className="text-gradient">make an impact</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m Zubair Zafar, a Full-Stack Developer from Lahore, Pakistan,
                focused on building scalable, production-ready web applications
                and SaaS products using React, Next.js, TypeScript, Node.js,
                and modern backend technologies.
              </p>
              <p>
                I enjoy turning real-world problems into reliable digital
                products. I’ve built and shipped products like
                EasyExamSolution, serving 1,800+ registered users with 159+
                active subscribers, and CraftAIWorld, reaching users across
                124+ countries with 92,000+ generated patterns. I care about
                clean architecture, performance, great user experiences, and
                building products that can scale.
              </p>
              <p>
                I’m currently open to full-time, remote, and relocation
                opportunities worldwide, and excited to work with ambitious
                teams where I can contribute, learn, and build meaningful
                products.
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-lift glow-sm rounded-xl border p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}