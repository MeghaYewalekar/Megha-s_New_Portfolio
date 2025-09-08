import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="w-10 h-7"><img className="w-full h-full object-contain" src="logo1" alt="" /></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/megha-yewalekar-265b34244/">
          <FaLinkedin className="hover:text-zinc-400 cursor-pointer" />
        </a>
        <a href="https://github.com/MeghaYewalekar">
          <FaGithub className="hover:text-zinc-400 cursor-pointer" />
        </a>
          {/* <FaInstagram className="hover:text-zinc-400 cursor-pointer" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
