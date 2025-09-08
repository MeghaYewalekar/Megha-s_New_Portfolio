import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="w-30 h-20">
        <img className="w-full h-full object-contain" src="logo2.png" />
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        {/* Resume */}
        <div className="relative group">
          <a href="/MeghaResume.pdf">
            <IoNewspaper className="hover:text-zinc-400 cursor-pointer" />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                           rounded-md bg-zinc-800 text-white text-xs px-2 py-1
                           opacity-0 group-hover:opacity-100 transition">
            Resume
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a href="https://www.linkedin.com/in/megha-yewalekar-265b34244/">
            <FaLinkedin className="hover:text-zinc-400 cursor-pointer" />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                           rounded-md bg-zinc-800 text-white text-xs px-2 py-1
                           opacity-0 group-hover:opacity-100 transition">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <a href="https://github.com/MeghaYewalekar">
            <FaGithub className="hover:text-zinc-400 cursor-pointer" />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                           rounded-md bg-zinc-800 text-white text-xs px-2 py-1
                           opacity-0 group-hover:opacity-100 transition">
            GitHub
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
