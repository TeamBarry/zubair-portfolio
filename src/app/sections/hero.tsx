// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowDown, Download } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center max-w-3xl mx-auto"
//       >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-sm font-medium text-primary mb-4"
//         >
//           Full-Stack Developer &bull; React &bull; Next.js &bull; TypeScript
//         </motion.p>
        
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
//         >
//           Hi, I am <span className="text-primary">Zubair Zafar</span>
//         </motion.h1>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
//         >
//           Building scalable SaaS products that solve real problems. 
//           2+ years of experience shipping production-grade applications.
//         </motion.p>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <Button size="lg" asChild>
//             <Link href="/projects">View Projects</Link>
//           </Button>
//           <Button size="lg" variant="outline" asChild>
//             <Link href="/resume">
//               <Download className="mr-2 h-4 w-4" />
//               Download Resume
//             </Link>
//           </Button>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-8"
//       >
//         <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-primary mb-4"
        >
          Full-Stack Developer &bull; React &bull; Next.js &bull; TypeScript
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I am <span className="text-primary">Zubair Zafar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          I build scalable, production-ready web applications and SaaS
          products that solve real-world problems. With 2+ years of hands-on
          experience, I turn ideas into reliable products from development to
          deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="/projects">View My Projects</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/resume">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
