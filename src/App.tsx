import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { testimonials } from "./data/testimonial";
import { processes } from "./data/process";

export default function App() {
  const [testimonialTab, setTestimonialTab] = useState("starks");
  const [processTab, setProcessTab] = useState("idea");
  return (
    <div className="min-h-screen w-full bg-bg-primary">
      <Navbar />
      <main className="w-full pt-[6.3rem] md:pt-[6.8rem]">
        <div className="md:min-h-screen bg-[url('/images/header-background.svg')] bg-no-repeat bg-top">
          <div className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem]">
            <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
              <div className="max-w-[56rem]">
                <div className="min-h-[180px]">
                  <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 text-white">
                    We build <span className="text-accent">products</span> that
                    shape a better future
                  </h1>
                </div>
                <div className="mb-8 max-w-3xl">
                  <div>
                    <p className="text-dark-grey md:text-lg mb-8 leading-7">
                      We’re the architects of digital excellence across
                      industries. We redefine business with cutting-edge digital
                      strategies that invokes sector-wide transformation.
                    </p>
                  </div>
                </div>
                <div className="relative w-fit group">
                  <button className="w-fit py-3 px-5 flex items-center justify-center gap-2 rounded-full bg-white text-black group-hover:text-white group-hover:bg-secondary relative z-10 font-semibold text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                    Book a Call
                    <img
                      src="/images/play.svg"
                      alt="play"
                      className="object-contain size-2.5 group-hover:hidden"
                    />
                    <img
                      src="/images/play-white.svg"
                      alt="play"
                      className="object-contain size-2.5 hidden group-hover:block"
                    />
                  </button>
                  <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-secondary" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="min-h-[60px]">
              <div>
                <div>
                  <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
                    Success in <span className="text-accent">Motion</span> – Our
                    clients’ journey
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-5"
              style={{
                background:
                  "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
              }}
            >
              <div className="marquee-container">
                <div className="track">
                  <div>
                    <div className="transform-none">
                      <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/stac.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/activity.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/africaFund.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/starks.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/exec-pro.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/phone.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="track">
                  <div>
                    <div className="transform-none">
                      <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/stac.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/activity.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/africaFund.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/starks.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/exec-pro.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/phone.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marquee-container">
                <div className="track2">
                  <div>
                    <div className="transform-none">
                      <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/stac.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/activity.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/africaFund.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/starks.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/exec-pro.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/phone.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="track2">
                  <div>
                    <div className="transform-none">
                      <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/stac.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/activity.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/africaFund.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/starks.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/exec-pro.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="relative w-auto h-[340px]">
                          <div className="bg-accent -z-10 size-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                          <img
                            src="/images/phone.svg"
                            alt="marquee-images"
                            className="overflow-hidden size-full"
                            loading="lazy"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-10">
            <div>
              <div>
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
                  Discover the{" "}
                  <span className="text-accent">transformative stories</span> of
                  startups that scaled new heights with us
                </p>
              </div>
            </div>
            <div className="w-full overflow-x-scroll scrollbar-hide">
              <div className="w-full border border-secondary grid grid-cols-5 min-w-[750px] rounded-full">
                <div
                  onClick={() => setTestimonialTab("starks")}
                  className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 rounded-s-full ${
                    testimonialTab === "starks" ? "bg-accent3" : ""
                  }`}
                >
                  <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <img
                      src="/images/starks-logo.svg"
                      alt="starks"
                      className="w-full size-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />{" "}
                    Starks
                  </div>
                </div>
                <div
                  onClick={() => setTestimonialTab("executivePros")}
                  className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300" ${
                    testimonialTab === "executivePros" ? "bg-accent3" : ""
                  }`}
                >
                  <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <img
                      src="/images/ExecutiveProsLogo.svg"
                      alt="ExecutivePros"
                      className="w-full size-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  onClick={() => setTestimonialTab("stacai")}
                  className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${
                    testimonialTab === "stacai" ? "bg-accent3" : ""
                  }`}
                >
                  <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <img
                      src="/images/stacai.svg"
                      alt="stacai"
                      className="w-full size-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  onClick={() => setTestimonialTab("iwaria")}
                  className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${
                    testimonialTab === "iwaria" ? "bg-accent3" : ""
                  }`}
                >
                  <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <img
                      src="/images/iwaria.svg"
                      alt="iwaria"
                      className="w-full size-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  onClick={() => setTestimonialTab("beaupreneur")}
                  className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 rounded-e-full ${
                    testimonialTab === "beaupreneur" ? "bg-accent3" : ""
                  }`}
                >
                  <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <img
                      src="/images/Beaupreneur.svg"
                      alt="Beaupreneur"
                      className="w-full size-5"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-5 w-full md:w-[70%] lg:w-1/2 rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative"
              style={{ left: testimonials[testimonialTab].left }}
            >
              <div className="sm:basis-[58%] pr-3">
                <div>
                  <div>
                    <p className="font-bold mb-4">
                      {testimonials[testimonialTab].company}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="leading-7 mb-3">
                      {testimonials[testimonialTab].testimony}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-[15px] font-semibold mb-4">
                      {testimonials[testimonialTab].name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                <div className="bg-accent size-full z-0 absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
                <img
                  src={`/images/${testimonials[testimonialTab].profile}.svg`}
                  alt="profile"
                  className="rounded-xl relative object-top object-cover size-full inset-0"
                />
              </div>
            </div>
          </div>
          <div className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-20">
            <div className="mb-12 xl:mb-0 max-w-[45rem]">
              <div>
                <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[2.5rem] lg:leading-[3rem]">
                  From <span className="text-accent">Spark</span> to{" "}
                  <span className="text-accent">Spotlight</span>: we take you
                  every step of the way to success.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:items-end">
              <div className="basis-1/2 flex mb-8 md:mb-0">
                <div className="md:pr-10">
                  <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                    <div
                      onClick={() => setProcessTab("idea")}
                      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center font-medium cursor-pointer transition-all duration-300 ${
                        processTab === "idea"
                          ? "bg-accent2 text-black"
                          : "text-white"
                      }`}
                    >
                      Idea
                    </div>
                    <div
                      onClick={() => setProcessTab("design")}
                      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center font-medium cursor-pointer transition-all duration-300 ${
                        processTab === "design"
                          ? "bg-accent2 text-black"
                          : "text-white"
                      }`}
                    >
                      Design
                    </div>
                    <div
                      onClick={() => setProcessTab("develop")}
                      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center font-medium cursor-pointer transition-all duration-300 ${
                        processTab === "develop"
                          ? "bg-accent2 text-black"
                          : "text-white"
                      }`}
                    >
                      Develop
                    </div>
                    <div
                      onClick={() => setProcessTab("launch")}
                      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center font-medium cursor-pointer transition-all duration-300 ${
                        processTab === "launch"
                          ? "bg-accent2 text-black"
                          : "text-white"
                      }`}
                    >
                      Launch
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-[1.8rem] sm:text-[2rem] font-medium leading-8 mb-12">
                        {processes[processTab].title}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="text-dark-grey md:text-lg mb-8 leading-7">
                        {processes[processTab].text}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-fit group">
                    <button className="w-fit py-3 px-5 flex items-center justify-center gap-2 rounded-full bg-white text-black group-hover:text-white group-hover:bg-secondary relative z-10 font-semibold text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                      Book a Call
                      <img
                        src="/images/play.svg"
                        alt="play"
                        className="object-contain size-2.5 group-hover:hidden"
                      />
                      <img
                        src="/images/play-white.svg"
                        alt="play"
                        className="object-contain size-2.5 hidden group-hover:block"
                      />
                    </button>
                    <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-secondary" />
                  </div>
                </div>
              </div>
              <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                <img
                  src={`/images/${processes[processTab].img}.svg`}
                  alt="plan"
                  loading="lazy"
                  className="w-full h-[350px] md:size-[95%] lg:w-[90%] lg:h-[426px]"
                />
              </div>
            </div>
          </div>
          <div
            className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-14"
            style={{
              background:
                "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
            }}
          >
            <div>
              <div>
                <p className="text-[2rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[2.5rem] lg:leading-[3rem] text-accent2 text-center">
                  Your best call for B2B/B2C product innovation
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
              <div className="relative flex flex-col flex-nowrap items-center justify-center gap-10 h-min border-0 transition duration-500 overflow-visible p-[1px] decoration-clone w-fit rounded-xl text-left">
                <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                  <div className="w-full bg-bg-primary rounded-2xl p-8 sm:p-10 hover:shadow-dark-grey transition-all duration-300 ease-in-out">
                    <div className="w-fit p-2 bg-accent bg-opacity-60 rounded-md mb-5">
                      <img
                        src="/images/layers-three.svg"
                        alt="experience"
                        loading="lazy"
                        width={30}
                        height={30}
                        className="size-[30px]"
                      />
                    </div>
                    <h4 className="text-2xl font-medium mb-5">Experience</h4>
                    <div>
                      <div>
                        <p className="mb-0 text-dark-grey text-[17.5px]">
                          Decades of collective wisdom. Leverage our extensive
                          experience to avoid common pitfalls and accelerate
                          your business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"></div>
                <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
              </div>
              <div className="relative flex flex-col flex-nowrap items-center justify-center gap-10 h-min border-0 transition duration-500 overflow-visible p-[1px] decoration-clone w-fit rounded-xl text-left">
                <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                  <div className="w-full bg-bg-primary rounded-2xl p-8 sm:p-10 hover:shadow-dark-grey transition-all duration-300 ease-in-out">
                    <div className="w-fit p-2 bg-accent bg-opacity-60 rounded-md mb-5">
                      <img
                        src="/images/layers-three.svg"
                        alt="experience"
                        loading="lazy"
                        width={30}
                        height={30}
                        className="size-[30px]"
                      />
                    </div>
                    <h4 className="text-2xl font-medium mb-5">Quick Support</h4>
                    <div>
                      <div>
                        <p className="mb-0 text-dark-grey text-[17.5px]">
                          We are your reliable partner, always there when you
                          need us, ensuring smooth operations at every stage of
                          your growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"></div>
                <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
              </div>
              <div className="relative flex flex-col flex-nowrap items-center justify-center gap-10 h-min border-0 transition duration-500 overflow-visible p-[1px] decoration-clone w-fit rounded-xl text-left">
                <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                  <div className="w-full bg-bg-primary rounded-2xl p-8 sm:p-10 hover:shadow-dark-grey transition-all duration-300 ease-in-out">
                    <div className="w-fit p-2 bg-accent bg-opacity-60 rounded-md mb-5">
                      <img
                        src="/images/layers-three.svg"
                        alt="experience"
                        loading="lazy"
                        width={30}
                        height={30}
                        className="size-[30px]"
                      />
                    </div>
                    <h4 className="text-2xl font-medium mb-5">Cost Savings</h4>
                    <div>
                      <div>
                        <p className="mb-0 text-dark-grey text-[17.5px]">
                          Maximising impact, minimising costs efficiency is key.
                          We provide cost-effective solutions without
                          compromising on quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"></div>
                <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
              </div>
            </div>
          </div>
          <div
            className="py-14 md:py-20 xl:py-28"
            style={{
              background:
                "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
            }}
          >
            <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain bg-top bg-no-repeat">
              <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                  <div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                      We build solutions that help{" "}
                      <span className="text-accent">businesses</span> of all
                      sizes to <span className="text-accent">scale</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-evenly sm:justify-between items-center gap-3">
                  <div className="flex flex-col gap-3 text-left w-fit">
                    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                      50+
                    </div>
                    <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                      Clients
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 text-left w-fit">
                    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                      120+
                    </div>
                    <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                      Projects
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 text-left w-fit">
                    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                      10+
                    </div>
                    <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                      Team Leads
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 text-left w-fit">
                    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                      10+
                    </div>
                    <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                      Glorious Years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-[1.25rem] md:mx-[2.5rem] lg:mx-[3.5rem] xl:mx-[7rem] my-10 lg:mb-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
              <div>
                <div>
                  <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-6 sm:mb-4 md:mb-0">
                    Read our articles, news and product blog
                  </p>
                </div>
              </div>
              <div className="relative w-fit group">
                <button className="w-fit py-3 px-5 flex items-center justify-center gap-2 rounded-full bg-white text-black group-hover:text-white group-hover:bg-secondary relative z-10 font-semibold text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                  Visit Blog
                  <img
                    src="/images/play.svg"
                    alt="play"
                    className="object-contain size-2.5 group-hover:hidden"
                  />
                  <img
                    src="/images/play-white.svg"
                    alt="play"
                    className="object-contain size-2.5 hidden group-hover:block"
                  />
                </button>
                <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-secondary" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              <a
                href="#blog/will-ai-take-over-art"
                className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transitional-all duration-500"
              >
                <div className="h-60 sm:h-56 relative mb-6">
                  <div className="bg-accent z-0 size-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
                  <img
                    srcSet="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=640&q=75 640w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=750&q=75 750w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=828&q=75 828w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1080&q=75 1080w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1200&q=75 1200w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75 1920w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=2048&q=75 2048w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=3840&q=75 3840w"
                    src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75"
                    alt="Will AI take over Art?"
                    loading="lazy"
                    sizes="100vw"
                    className="size-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
                <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 group-hover:translate-x-4 transition-all duration-300 ease-in-out">
                  <p className="text-lg font-semibold mb-1">Blog</p>
                  <div className="text-dark-grey flex items-center mb-6">
                    <span>The Reformist</span>
                    <div className="size-0.5 rounded-full bg-white mx-1.5" />
                    <span>May 29th, 2024</span>
                  </div>
                  <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
                    Will AI take over Art?
                  </h6>
                </div>
              </a>
              <a
                href="#blog/will-ai-take-over-art"
                className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transitional-all duration-500"
              >
                <div className="h-60 sm:h-56 relative mb-6">
                  <div className="bg-accent z-0 size-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
                  <img
                    srcSet="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=640&q=75 640w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=750&q=75 750w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=828&q=75 828w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1080&q=75 1080w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1200&q=75 1200w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1920&q=75 1920w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=2048&q=75 2048w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=3840&q=75 3840w"
                    src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=2048&q=75"
                    alt="Cryptocurrency vs tokens"
                    loading="lazy"
                    sizes="100vw"
                    className="size-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
                <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 group-hover:translate-x-4 transition-all duration-300 ease-in-out">
                  <p className="text-lg font-semibold mb-1">Blog</p>
                  <div className="text-dark-grey flex items-center mb-6">
                    <span>The Reformist</span>
                    <div className="size-0.5 rounded-full bg-white mx-1.5" />
                    <span>May 29th, 2024</span>
                  </div>
                  <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
                    Cryptocurrency vs tokens
                  </h6>
                </div>
              </a>
              <a
                href="#blog/will-ai-take-over-art"
                className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transitional-all duration-500"
              >
                <div className="h-60 sm:h-56 relative mb-6">
                  <div className="bg-accent z-0 size-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
                  <img
                    srcSet="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=640&q=75 640w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=750&q=75 750w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=828&q=75 828w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1080&q=75 1080w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1200&q=75 1200w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1920&q=75 1920w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=2048&q=75 2048w, https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=3840&q=75 3840w"
                    src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=3840&q=75"
                    alt="Cryptocurrency and Crypto asset"
                    loading="lazy"
                    sizes="100vw"
                    className="size-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
                <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 group-hover:translate-x-4 transition-all duration-300 ease-in-out">
                  <p className="text-lg font-semibold mb-1">Blog</p>
                  <div className="text-dark-grey flex items-center mb-6">
                    <span>The Reformist</span>
                    <div className="size-0.5 rounded-full bg-white mx-1.5" />
                    <span>May 29th, 2024</span>
                  </div>
                  <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
                    Cryptocurrency and Crypto asset
                  </h6>
                </div>
              </a>
            </div>
          </div>
          <div
            className="px-[1.25rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[7rem] py-10 text-center bg-opacity-0"
            style={{
              background:
                "linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
            }}
          >
            <div className="max-w-[45rem] mx-auto">
              <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-6">
                <span className="text-accent">Ready to Scale?</span>
                <br />
                Join successful brands that chose us as their{" "}
                <span className="text-accent">growth accelerator</span>
              </h2>
              <div className="w-fit mx-auto mb-5">
                <div className="relative w-fit group">
                  <button className="w-fit py-3 px-5 flex items-center justify-center gap-2 rounded-full bg-white text-black group-hover:text-white group-hover:bg-secondary relative z-10 font-semibold text-center whitespace-nowrap cursor-pointer hover:shadow-md">
                    Book a Call
                  </button>
                  <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border border-dashed group-hover:border-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
