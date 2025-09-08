import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="w-30 h-20  ">
        <img className="w-full h-full object-contain" src="logo2.png" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/MeghaResume.pdf" className="">
          <IoNewspaper className="hover:text-zinc-400 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/megha-yewalekar-265b34244/">
          <FaLinkedin className="hover:text-zinc-400 cursor-pointer" />
        </a>
        <a href="https://github.com/MeghaYewalekar">
          <FaGithub className="hover:text-zinc-400 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
