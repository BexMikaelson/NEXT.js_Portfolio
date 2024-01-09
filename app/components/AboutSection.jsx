"use client";
import Image from "next/image";
import React, {useState, useTransition} from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Dynamic webdevelopment</li>
          <li>MERN stack</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Firebase</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Vue</li>
          <li>Svelte</li>
          <li>Next.js</li>
          <li>Azure DeveOps</li>
          <li>UX/UI design</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Yrkeshögskoleexamen Frontend Developer, Medieinstitutet, Malmö Sweden</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];


const AboutSection = () => {
    const[tab, setTab]=useState("skills");
    const[isPending, startTransition]= useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };

    return ( 
        <div id="about" className="text-white pt-16">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-20 px-4 xl:gap-16 sm:py-16 xl:py-20 ">
                <Image src="/images/workspace-image.png" width={500} height={500} />
                <div>
                    <h2 className="text-4xl font-bold mb-4 mt-8">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Recently graduated as a front-end developer, I come with an extensive educational background in HTML, CSS, and JavaScript, along with React, Vue, Next.js, UX design, Node.js, and Git. <br /> Specialized in user experience and dynamic web development, I possess strong skills in agile project methodologies and cross-functional collaboration. I am enthusiastic about applying my advanced technical abilities and creative problem-solving skills in a team-based environment. <br /> My 8 months of internship experience as an Intern Developer at CDON in Malmö has been a significant part of my journey.

                        <br /> <br /> On a more personal note, I am a passionate equestrian, which is not just a hobby but a passion that teaches me patience, resilience, and the joy of connection. My love for dogs, animals in general, and being out in nature is a huge part of who I am, bringing balance and inspiration to my professional life. I firmly believe that these interests fuel my creativity and enhance my approach to technology and teamwork.
                    </p>
                    {/* <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-600"></span>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">Education</span>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">Experience</span>
                    </div> */}
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                        </TabButton>
                        <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                        >
                        {" "}
                        Education{" "}
                        </TabButton>
                        {/* <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                        >
                        {" "}
                        Certifications{" "}
                        </TabButton> */}
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
        
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;