import Link from "next/link";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono p-6">
      <h1 className="text-4xl md:text-6xl animate-pulse">{">_ Jake Lille {CyberSec}"}</h1>
      <p className="mt-4 text-green-300 text-lg">Exploring security, hacking, and digital defense.</p>
      
      <nav className="mt-8 flex space-x-6">
        <Link href="/projects" className="hover:text-green-300 transition-all">Projects</Link>
        <Link href="/blog" className="hover:text-green-300 transition-all">Blog</Link>
      </nav>

      <div className="mt-12 border-t border-green-400 w-48 animate-fadeIn"></div>

      <p className="mt-6 text-sm text-green-500">
        Built with Next.js + Tailwind CSS
      </p>
    </div>
  );
}
