


export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;      // ✅ Optional
  category: string;
  tags: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features?: string[];             // ✅ Optional
  whatILearned?: string[];        // ✅ Optional
}



export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Skill {
  name: string;
  proficiency: string;
  years: string;
}


export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  tags: string[];
}