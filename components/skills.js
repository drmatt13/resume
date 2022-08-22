import { useState } from "react";

const skills = () => {
  const [skills] = useState([
    { name: "CSS", level: "95" },
    { name: "JavaScript", level: "90" },
    { name: "Data Structures", level: "70" },
    { name: "Node.js", level: "75" },
    { name: "MySQL", level: "50" },
    { name: "MongoDB", level: "80" },
    { name: "React.js", level: "87.5" },
    { name: "Next.js", level: "92.5" },
    { name: "Tailwind CSS", level: "95" },
    { name: "Machine Learning", level: "45" },
    { name: "Python", level: "50" },
    { name: "Java", level: "40" },
    { name: "R", level: "35" },
  ]);

  return (
    <div className="w-full text-5xl flex flex-col">
      {skills.map(
        (skill) => (
          <div className="flex mb-8 flex-row-reverse">
            <div className="flex-1 text-left ml-12">{skill.name}</div>
            <div className="flex-[1.1] border border-red-500 rounded-lg flex justify-start overflow-hidden">
              <div className="bg-red-500" style={{ flex: skill.level / 100 }} />
            </div>
          </div>
        ),
        <></>
      )}
    </div>
  );
};

export default skills;
