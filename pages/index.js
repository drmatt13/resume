import Link from "next/link";
import Image from "next/image";

import Title from "../components/title";

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
                <span className="text-red-600 w-12 text-center fa-solid fa-paperclip" />{" "}
                <span className="text-blue-600 underline">
                  portfolio-min.vercel.app
                </span>
              </a>
            </Link>
          </div>
          <div className="mx-16 mt-6 w-[550px] overflow-hidden">
            <img src="/test1.svg" alt="Matthew Sweeney" />
          </div>
        </header>

        <div className="flex-1 flex">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-between text-[2.5rem]">
            <div className="flex flex-col">
              <Title>About Me</Title>
              <div className="flex flex-col" style={{ lineHeight: "4rem" }}>
                <div className="mb-12">
                  Full Stack Engineer graduating in December of 2022 with a
                  Bachelor of Science in Data Analytics from SNHU. Confident in
                  elegantly bringing complex ideas to life while adhering to
                  general design principles. Furthermore, I possess many
                  in-demand skills that could help many businesses leverage
                  information strategically to make intelligent, data-driven
                  decisions and ultimately operate in confidence.
                </div>
                <div className="">
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-graduation-cap" />{" "}
                    SNHU - Data Analytics, Bachelor&apos;s Degree{" "}
                    <span className="text-black/60 text-4xl">2020-2022</span>
                  </div>
                  <div className="mb-12">
                    At Southern New Hampshire University, I extensively learned
                    about the practical use cases of data analytics and data
                    governance concerning ethical, governmental, and corporate
                    policy. Subsequently, I also learned how to create various
                    statistical models while conducting regression diagnostics
                    to validate statistical model accuracy.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-code" />{" "}
                    Full Stack Development{" "}
                    <span className="text-black/60 text-4xl">2019-2022</span>
                  </div>
                  <div className="mb-12">
                    Highly skilled with the React.js framework, with expertise
                    in developing mobile-first screen responsive user interfaces
                    along with a deep understanding of vanilla JavaScript, data
                    structure design, and algorithm implementation. In addition,
                    I specialize in using TypeScript, Next.js, and Tailwind to
                    create user-authenticated full-stack applications with
                    dynamically served content.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-briefcase" />{" "}
                    Signature Flight Support Manager{" "}
                    <span className="text-black/60 text-4xl">2017-2020</span>
                  </div>
                  <div className="mb-12">
                    Responsible for training, directing, and supervising the
                    activities of Line Service Technicians who provided various
                    services to general aviation aircraft, crew, and passengers.
                  </div>
                  <div className="mb-12">
                    <span className="text-red-600 w-16 text-center fa-solid fa-graduation-cap" />{" "}
                    UMass Boston - Computer Science{" "}
                    <span className="text-black/60 text-4xl">2016-2018</span>
                  </div>
                  <div className="mb-8">
                    At UMass Boston, I spent two years broadly studying
                    programming and mathematics. I learned computer science
                    fundamentals, data structures, algorithms, and high-level
                    arithmetic up to engineering mathematics, which gave me the
                    strong foundation required for my pivoted career pathway.
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col">
              <Title>Web Projects</Title>
              <div className="flex-1 /bg-black/25"></div>
            </div> */}
          </div>

          <div className="w-44"></div>

          {/* RIGHT SIDE */}
          <div className="w-[850px] flex flex-col justify-around text-[2.5rem]">
            <div className="flex flex-col">
              <Title>Portfolio Project</Title>
              <div>
                <div className="flex flex-col">
                  <div className="mb-10">
                    <span className="text-red-600 w-12 text-center fa-solid fa-file-lines" />{" "}
                    Dynamic Social Media Template
                  </div>
                </div>
                <div className="mb-10">
                  <Link href="https://social-template.vercel.app">
                    <a>
                      <span className="text-red-600 w-12 text-center fa-solid fa-paperclip" />{" "}
                      <span className="text-blue-600 underline">
                        social-template.vercel.app
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="italic">
                  <div className="mb-6">
                    <span className="w-12 text-center">
                      <svg
                        className="w-12 h-12 float-left mr-6 -translate-y-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z"
                          fill="rgb(220 38 38)"
                        />
                      </svg>
                    </span>{" "}
                    Next.js <span className="not-italic">|</span> TypeScript{" "}
                    <span className="not-italic">|</span> Next-Auth
                  </div>
                  <div className="translate-x-[4.5rem] mb-10">
                    MongoDB <span className="not-italic">|</span> Tailwind CSS
                  </div>
                </div>
                <div className="flex-1" style={{ lineHeight: "4rem" }}>
                  <ul className="list-disc pl-16">
                    <li className="mb-10">
                      Barebones dynamic social media application designed to be
                      cloned for the rapid acceleration of creating new
                      projects.
                    </li>
                    <li>
                      Utilizes middleware for route protection with a global
                      event bus API that redirects service worker requests to
                      various microservices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="translate-y-1">
              <Title>Full-Stack Skills</Title>
              <div className="-translate-x-9 translate-y-0.5">
                <div className="h-12"></div>
                <div className="flex w-full">
                  <Link href="https://www.typescriptlang.org/" passHref>
                    <i className="cursor-pointer text-center text-[8.5rem] flex-1 devicon-typescript-plain colored"></i>
                  </Link>
                  <Link href="https://nextjs.org/" passHref>
                    <i className="cursor-pointer text-center text-[8.5rem] flex-1 devicon-nextjs-original"></i>
                  </Link>
                  <Link href="https://reactjs.org/" passHref>
                    <i className="cursor-pointer text-center text-[8.5rem] flex-1 devicon-react-original colored"></i>
                  </Link>
                  <Link href="https://www.mysql.com/" passHref>
                    <i className="cursor-pointer text-center text-[8.5rem] flex-1 devicon-mysql-plain colored"></i>
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex w-full mt-14 mb-4">
                    <div className="flex-1 flex items-center">
                      <Link href="https://tailwindcss.com/" passHref>
                        <div className="flex-1 cursor-pointer flex justify-center">
                          <img
                            className="w-36"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link href="https://www.mongodb.com/" passHref>
                        <i className="cursor-pointer text-center text-[8.5rem] flex-1 devicon-mongodb-plain colored"></i>
                      </Link>
                    </div>
                    <Link href="https://nodejs.org" passHref>
                      <div className="cursor-pointer flex-1 flex justify-center">
                        <img className="w-[22rem]" src="/node.png" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Title>Udemy Courses</Title>
              <div className="flex flex-col items-start [&>a]:mb-6 [&>a]:border-b [&>a]:text-blue-600 [&>a]:underline [&>a]:cursor-pointer">
                <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                  Web Development Bootcamp 2019
                </a>
                <a href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/">
                  JavaScript, The Complete Guide
                </a>
                <a href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/">
                  20 Web Projects w/ Vanilla JavaScript
                </a>
                <a href="https://www.udemy.com/course/advanced-css-and-sass/">
                  Advanced CSS and Sass
                </a>
                <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">
                  Algorithms & Data Structures Design
                </a>
                <a href="https://www.udemy.com/course/nodejs-api-masterclass/">
                  Node.js API&apos;s w/ Express & MongoDB
                </a>
                <a href="https://www.udemy.com/course/modern-react-front-to-back/">
                  React Front To Back 2020
                </a>
                <a href="https://www.udemy.com/course/react-redux/">
                  Modern React with Redux
                </a>
                <a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/">
                  The MERN Fullstack Guide
                </a>
                <a href="https://www.udemy.com/course/microservices-with-node-js-and-react/">
                  Microservices w/ Node JS and React
                </a>
                <a href="https://www.udemy.com/course/learn-typescript/">
                  Mastering TypeScript 2022
                </a>
                <a href="https://www.udemy.com/course/learn-typescript/">
                  React and TypeScript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
