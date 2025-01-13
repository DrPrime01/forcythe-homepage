import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/footer";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 5) {
          navRef.current.classList.add("backdrop-blur-md");
        } else {
          navRef.current.classList.remove("backdrop-blur-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        ref={navRef}
        className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-[1.8rem] w-full fixed top-0 left-0 flex justify-between items-center gap-10 z-30"
      >
        <div className="flex items-center gap-20">
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="forcythe-logo"
              className="object-contain w-[150px] h-10"
            />
          </a>
          <div className="hidden md:flex items-center gap-4 text-white">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#studio">Studio</a>
            <a href="#foundation">Foundation</a>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="hidden md:block">
            <div className="relative w-fit group">
              <button className="w-fit py-3 px-5 flex items-center justify-center gap-2 rounded-full bg-white text-black group-hover:text-white group-hover:bg-secondary relative z-10 font-semibold text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                Book a Call
              </button>
              <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-secondary" />
            </div>
          </div>
          <div
            className="bg-white bg-opacity-10 rounded-md p-3 cursor-pointer md:hidden"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            <img src="/images/menu.svg" alt="menu" className="size-4.5" />
          </div>
        </div>
      </nav>
      {mobileNav && (
        <div className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-[1px] decoration-clone z-[999] bg-bg-primary w-60 rounded-[2rem] fixed md:hidden right-5 top-28">
          <div className="text-white x-10 bg-transparent rounded-[inherit] w-full">
            <div
              className="w-full p-5 py-8 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
              }}
            >
              <ul className="flex flex-col">
                {navLinks.map((item) => (
                  <li className="w-full py-2.5" key={item.name}>
                    <a href={item.link} className="w-full py-3">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
