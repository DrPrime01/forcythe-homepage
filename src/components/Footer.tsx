import { navLinks, social } from "../data/footer";

export default function Footer() {
  return (
    <footer className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-10 bg-[#071626]">
      <div className="lg:grid lg:grid-cols-3 my-10">
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-secondary hover:text-white  transition-all duration-300 ease-in-out rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div className="size-5 border-2 border-white cursor-pointer flex items-center justify-center rounded-full bg-transparent">
              <div className="bg-white rounded-full size-2"></div>
              <input
                className="hidden"
                id="agreement"
                type="checkbox"
                name="agreement"
              />
            </div>
            <label htmlFor="agreement" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <img
              src="/images/logo.svg"
              alt="forcythe logo"
              fetchPriority="high"
              width={130}
              height={9}
              className="mb-5 md:mb-8"
            />
            <p className="text-dark-grey">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {social.map((item, i: number) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="size-9 cursor-pointer rounded-full border border-accent flex justify-center items-center"
                >
                  <img
                    src={`/images/${item.icon}.svg`}
                    alt="social"
                    className="size-5"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.name} className="text-accent2 font-medium">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-accent">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
