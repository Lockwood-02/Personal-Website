import React from "react"
import Image from "next/image"
import Link from "next/link"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#FFA500]">Projects</p>
            <h2 className="py-4">What I've Built</h2>
            <div className="grid md:grid-cols-2 gap-8">

                <ProjectItem title="First Website" backgroundImg="https://i.postimg.cc/2yT0fqX3/First-Website.png" projectUrl="/firstWebsite" tech="HTML CSS JavaScript"/>
                <ProjectItem title="ToDo List App" backgroundImg="https://i.postimg.cc/FzHMMQsb/ToDo.png" projectUrl="/toDoListApp" tech="HTML JavaScript"/>
                <ProjectItem title="Business Site" backgroundImg="https://i.postimg.cc/PJVghFPg/Business-Site.png" projectUrl="/businessSite" tech="HTML CSS"/>
                <ProjectItem title="Portfolio Site" backgroundImg="https://i.postimg.cc/pLbFXcQM/Portfolio-Site.png" projectUrl="/portfolioSite" tech="React Tailwindcss"/>

            </div>
        </div>
    </div>
  )
}

export default Projects