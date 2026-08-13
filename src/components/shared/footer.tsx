import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Zubair Zafar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/TeamBarry" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com/in/zubair-zafar-026334370" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="h-4 w-4" />
          </Link>
          <Link href="mailto:zubairzafar396@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <MdEmail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}