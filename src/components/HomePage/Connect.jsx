import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiKaggle, SiLeetcode } from 'react-icons/si';
import { FaSquareXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/60 p-3 rounded-full flex flex-col items-center gap-4 shadow-lg">
        <a href="https://www.linkedin.com/in/naresh-b-a-7b1b3b1b1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
        <a href="mailto:phoenixarjun007.com">
          <FaEnvelope className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
        <a href="https://x.com/Naresh14272101" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
        <a href="https://github.com/Phoenixarjun" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
        <a href="https://www.kaggle.com/nareshba007" target="_blank" rel="noopener noreferrer">
          <SiKaggle className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
        <a href="https://leetcode.com/u/Naresh-007/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-2xl text-black hover:scale-125 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Connect;