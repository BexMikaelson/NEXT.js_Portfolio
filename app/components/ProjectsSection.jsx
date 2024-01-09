"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";


const projectsData = [
    {
      id: 1,
      title: "Purple Music App",
      description: "Next.js Fullstack music app, integrated with Spotify's API, styled with Tailwind css.",
      image: "/images/purple-music-collage.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/BexMikaelson/App-Purple-Music",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "The Movie Database",
      description: "Your Ultimate Movie App, inspired by IMDB and THE MOVIE DATABASE, created using React with Vite.js, Node.js, and utilizing the TMDB API.",
      image: "/images/TMDB-API-IMG.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/BexMikaelson/TMDB-API",
      previewUrl: "https://relaxed-rabanadas-92a3b0.netlify.app/",
    },
    {
      id: 3,
      title: "Almi Redesign Project",
      description: "UX redesign project for Almis home page, foloing there own branding to create a fresh modern feel, aming to atract the intrest of young entrepeners. I then coded the project using HTML, CSS and JavaScript",
      image: "/images/almi-img.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/BexMikaelson/Almi-one-pager",
      previewUrl: "https://eloquent-pare-1b02dc.netlify.app/#",
    },
];

const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    /* const isInView = useInView(ref, { once: true }); */
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  
    return ( 
        <section id="projects" className="pt-32">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
       {/*  <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div> */}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li
            key={index}
            variants={cardVariants}
            initial="initial"
            /* animate={isInView ? "animate" : "initial"} */
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
        
      </section>
    );
}
 
export default ProjectSection;