import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt: "Learn how to optimize React apps with memo, useMemo, useCallback, and code splitting.",
    content: `
React performance optimization is crucial for building smooth user experiences. Here are key techniques:

## 1. React.memo
Use React.memo to prevent unnecessary re-renders of functional components.

## 2. useMemo and useCallback
Memoize expensive calculations and callback functions.

## 3. Code Splitting
Use dynamic imports to split your bundle.

## 4. Virtualization
For long lists, use react-window or react-virtualized.

## 5. State Colocation
Keep state as close to where it is used as possible.
    `,
    date: "2026-07-15",
    readingTime: "5 min",
    tags: ["React", "Performance"],
  },
  {
    slug: "websocket-real-time-patterns",
    title: "WebSocket Patterns for Real-Time Apps",
    excerpt: "Building real-time features with Socket.io, reconnection logic, and room management.",
    content: `
WebSockets enable bidirectional communication between client and server.

## Connection Management
Always implement reconnection logic with exponential backoff.

## Room Management
Organize connections into rooms for targeted messaging.

## State Synchronization
Use operational transforms or CRDTs for collaborative editing.
    `,
    date: "2026-06-28",
    readingTime: "7 min",
    tags: ["WebSocket", "Node.js"],
  },
  {
    slug: "supabase-vs-firebase",
    title: "Supabase vs Firebase: Which One to Choose?",
    excerpt: "A detailed comparison of two popular backend-as-a-service platforms for modern apps.",
    content: `
Both Supabase and Firebase offer great backend solutions.

## Supabase
- PostgreSQL database
- Open source
- SQL support
- Better for relational data

## Firebase
- NoSQL (Firestore)
- Google ecosystem
- Real-time sync out of the box
- Better for rapid prototyping
    `,
    date: "2026-06-10",
    readingTime: "6 min",
    tags: ["Supabase", "Firebase"],
  },
];