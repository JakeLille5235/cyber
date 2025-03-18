export default function Projects() {
    const projects = [
      { name: "Network Traffic Analysis", url: "#" },
      { name: "CTF Challenges", url: "#" },
      { name: "Web Security Testing", url: "#" },
    ];
  
    return (
      <div className="min-h-screen bg-black text-green-400 p-6">
        <h1 className="text-3xl">{">_ Projects"}</h1>
        <p className="mt-2 text-green-300">Here are some of my cybersecurity projects.</p>
  
        <ul className="mt-6 space-y-2">
          {projects.map((project, index) => (
            <li key={index} className="hover:text-green-300 transition-all">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  