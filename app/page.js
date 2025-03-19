import Link from "next/link";
import Image from 'next/image';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono p-6 text-center">

      {/* Profile Image */}
      <div className="flex flex-col items-center space-y-6 sm:space-y-10">
        <Image 
          src="/profile.png" 
          alt="Jake Lille Profile"
          width={150}
          height={150}
          className="rounded-full border-2 border-green-400 shadow-lg mt-6 sm:mt-12"
        />
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl animate-pulse max-w-lg mt-6 sm:mt-8">
        {">_ Jake Lille {CyberSec}"}
      </h1>
      <p className="mt-4 text-green-300 text-base sm:text-lg max-w-md">
        Exploring security, hacking, and digital defense.
      </p>

      {/* Navigation (Mobile Stacked, Desktop Inline) */}
      <nav className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
        <Link href="/projects" className="hover:text-green-300 transition-all">Projects</Link>
        <Link href="/blog" className="hover:text-green-300 transition-all">Blog</Link>
      </nav>

      {/* Decorative Line */}
      <div className="mt-12 border-t border-green-400 w-32 sm:w-48 animate-fadeIn"></div>

      {/* Certifications Section */}
      <h2 className="mt-12 text-2xl sm:text-3xl">{">_ Certifications"}</h2>
      <div className="mt-6 flex flex-wrap justify-center items-center gap-12 max-w-2xl mx-auto">
        <div className="flex flex-col items-center transition-all transform hover:scale-110 hover:opacity-100 opacity-50 w-28 sm:w-32 text-center">
          <Image 
            src="/comptia.png" 
            alt="CompTIA Security+ Certification"
            width={100} 
            height={100} 
            className="border-2 border-green-400 rounded-lg shadow-lg"
          />
          <p className="mt-2 text-sm sm:text-base text-green-300 text-center">CompTIA Security+</p>
        </div>
        <div className="flex flex-col items-center transition-all transform hover:scale-110 hover:opacity-100 opacity-50 w-28 sm:w-32 text-center">
          <Image 
            src="/googlesecurity.png" 
            alt="Google Cybersecurity Certification"
            width={100} 
            height={100} 
            className="border-2 border-green-400 rounded-lg shadow-lg"
          />
          <p className="mt-2 text-sm sm:text-base text-green-300 text-center">Google Cyber Certification</p>
        </div>
      </div>

      {/* Footer with Social Media Links */}
      <div className="mt-8 flex space-x-6">
        <a href="https://github.com/jakelille5235" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/github.png" 
            alt="GitHub"
            width={40} 
            height={40} 
            className="transition-transform transform hover:scale-110 hover:opacity-100 opacity-50"
          />
        </a>
        <a href="https://linkedin.com/in/jakelille" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/linkedin.png" 
            alt="LinkedIn"
            width={40} 
            height={40} 
            className="transition-transform transform hover:scale-110 hover:opacity-100 opacity-50"
          />
        </a>
        <a href="https://twitter.com/jakelille" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/icons/twitter.png" 
            alt="Twitter"
            width={40} 
            height={40} 
            className="transition-transform transform hover:scale-110 hover:opacity-100 opacity-50"
          />
        </a>
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs sm:text-sm text-green-500">
        Built with Next.js + Tailwind CSS (from a non-dev)
      </p>
    </div>
  );
}
