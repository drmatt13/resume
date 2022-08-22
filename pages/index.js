import Link from "next/link";
import Image from "next/image";

import Title from "../components/title";
import Skills from "../components/skills2";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-full flex flex-col px-24 font-mono">
        <header className="flex pt-20 pb-16 mb-4 border-b border-black text-[2.5rem]">
          <div className="flex-1 w-0 flex flex-col items-start justify-between">
            <div className="text-8xl mb-4">Matthew Sweeney</div>
            <div>
              <span className="text-red-600 w-12 text-center fa-solid fa-envelope" />{" "}
              matthewsweeney001@gmail.com
            </div>
            <div>
              <span className="text-red-600 w-12 text-center fa-solid fa-phone" />{" "}
              774-289-3355
            </div>
            <div>
              <span className="text-red-600 w-12 text-center fa-solid fa-location-dot" />{" "}
              Boston, MA
            </div>
            <Link href="https://portfolio-min.vercel.app">
              <a>
                <span className="text-red-600 w-12 text-center fa-solid fa-file-lines" />{" "}
                <span className="text-blue-600 underline">
                  https://portfolio-min.vercel.app
                </span>
              </a>
            </Link>
          </div>
          <div className="mx-32 my-6 h-96 w-96 rounded-full overflow-hidden">
            <Image
              src="/image5.png"
              alt="Matthew Sweeney"
              height={384}
              width={384}
            />
          </div>
        </header>

        <div className="flex-1 flex /flex-row-reverse">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-between /pb-16 text-[2.5rem]">
            <div className="flex-[1.5] flex flex-col">
              <Title>About Me</Title>
              <div
                className="flex-1 flex flex-col"
                style={{ lineHeight: "4rem" }}
              >
                <div className="mb-12">
                  Hello, my name is Matthew Sweeney and in October 2022; I will
                  officially have earned my bachelor's degree in data analytics
                  from SNHU. I have been meticulously studying all things web
                  development related for the last 2½ years and am confident in
                  my ability to bring and implement complex ideas to life in
                  elegant ways while also adhering to general design principles.
                </div>
                <div className="flex-1 /bg-black/10">
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-graduation-cap" />{" "}
                    SNHU - Data Analytics{" "}
                    <span className="text-black/60 text-4xl">2020-2022</span>
                  </div>
                  <div className="mb-12">
                    At Southern New Hampshire University I extensively learned
                    about data governance at both the legal/regulatory and
                    organizational policy levels. I also learned how to build
                    various statistical models while conducting regression
                    diagnostics to validate models utilized for statistical
                    analysis.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-code" />{" "}
                    Full Stack Development{" "}
                    <span className="text-black/60 text-4xl">2019-2022</span>
                  </div>
                  <div className="mb-12">
                    {/* I didn't simply take a few udemy classes and decide to label
                    myself as a full stack developer. Instead I have thoroughly
                    taken my time to prioritize school while raising my first
                    born child which in turn gave me ample time to explore web
                    development meticulously in a truly passionate way. */}
                    I am extremely proficient with the React framework and
                    specialize in using Next.js + Tailwind CSS. I can easily
                    create and implement restful APIs such as Stripe for payment
                    processing and or integrate a database strategy such as
                    MongoDB for storage or user authorization followed by
                    building responsive front ends that have dynamic
                    functionality.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-briefcase" />{" "}
                    Signature Flight Support Manager{" "}
                    <span className="text-black/60 text-4xl">2017-2020</span>
                  </div>
                  <div className="mb-12">
                    Responsible for leading, training and directing the
                    activities of Line Service Technicians that were engaged in
                    providing various services to general aviation aircraft,
                    crew and passengers.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-graduation-cap" />{" "}
                    UMass Boston - Computer Science{" "}
                    <span className="text-black/60 text-4xl">2016-2018</span>
                  </div>
                  <div className="mb-12">
                    I spent 2 years at UMass Boston where I broadly studied
                    math, programming, data structures, and software
                    engineering.
                    {/*                     
                    At UMass Boston I learned the fundamentals of computer
                    science and high level math which provided me with a strong
                    foundation for my future pathway. */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col">
              <Title>Web Projects</Title>
              <div className="flex-1 /bg-black/25"></div>
            </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col justify-between /pb-16 ml-28">
            <div>
              <Title>Udemy Courses</Title>
              <div className="flex flex-col items-start text-[2.5rem]">
                <div className="mb-6 border-b border-black/40">
                  The Complete 2020 Web Development Bootcamp
                </div>
                <div className="mb-6 border-b border-black/40">
                  20 Web Projects With Vanilla JavaScript
                </div>
                <div className="mb-6 border-b border-black/40">
                  JavaScript Algorithms & Data Structures Masterclass
                </div>
                <div className="mb-6 border-b border-black/40">
                  Node.js API Masterclass With Express & MongoDB
                </div>
                <div className="mb-6 border-b border-black/40">
                  React Front To Back
                </div>
                <div className="mb-6 border-b border-black/40">
                  Modern React with Redux
                </div>
                <div className="mb-6 border-b border-black/40">
                  Advanced CSS and Sass
                </div>
                <div className="mb-6 border-b border-black/40">
                  The MERN Fullstack Guide
                </div>
                <div className="mb-4 border-b border-black/40">
                  Microservices with Node JS and React
                </div>
              </div>
            </div>
            <div>
              {/* <Title>Digital Skills</Title>
              <Skills /> */}
              <Title>Skills & Competencies</Title>
              <Skills />
            </div>
            <div>
              <Title>History Visualization</Title>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
