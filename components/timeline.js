import React from "react";

const Timeline = () => {
  return (
    <>
      <style jsx>{`
        .rounded-xl {
          box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
        }
      `}</style>
      <div className="h-[33rem] w-full flex flex-col text-[2.5rem]">
        <div className="flex-[1] flex ">
          <div className="flex-[3] flex flex-col"></div>
          <div className="flex-[3.5] flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex-[.75] flex justify-center items-center bg-red-500/20 rounded-xl">
                Full Stack Development
              </div>
            </div>
          </div>
          <div className="flex-[.5]"></div>
        </div>
        <div className="flex-[2] flex flex-col">
          <div className="flex-1 flex">
            <div className="flex-1 /bg-gray-300"></div>
            <div className="flex-[4] flex flex-col">
              <div className="flex-[.75] flex justify-center items-center bg-teal-300/30 rounded-xl">
                Signature Flight Support
              </div>
              <div className="flex-[.25] flex">
                <div className="flex-1 /bg-gray-400"></div>
                <div className="flex-[3]" />
              </div>
            </div>
            <div className="flex-[2] flex"></div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-[2] flex flex-col">
              <div className="flex-[.75] flex justify-center items-center bg-blue-500/30 rounded-xl">
                UMass Boston
              </div>
              <div className="flex-[.25]" />
            </div>
            <div className="flex-[2] flex flex-col items-center">
              <i className="flex-[.75] fa-solid fa-arrow-right-long text-5xl flex items-center" />
              <div className="flex-[.25]" />
            </div>
            <div className="flex-[2.66] flex flex-col">
              <div className="flex-[.75] flex justify-center items-center bg-blue-500/30 rounded-xl">
                SNHU
              </div>
              <div className="flex-[.25]" />
            </div>
            <div className="flex-[.34]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="w-full bg-black h-[1px]" />
          </div>
          <div className="flex-1 flex justify-between text-4xl">
            <div className="px-3">2016</div>
            <div className="px-3">2022</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
