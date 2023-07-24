import React from 'react';
import ProjectCard from './project-card';
import { navbarData } from '@/app/shared/LinkData';

interface ProjectData {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Coaching',
    image: '/images/card4.jpg',
    link: '/coaching',
  },
  {
    id: 2,
    title: 'Consulting Products',
    image: '/images/card5.jpg',
    link: '/consultingProducts',
  },
  {
    id: 3,
    title: 'Public Speaking',
    image: '/images/card6.jpg',
    link: '/public-speaking',
  },
  {
    id: 4,
    title: 'State of subsidy',
    image: '/images/card96.jpg',
    link: '/stae-of-subsidy',
  },
  // Add more project data as needed
];

const Projects: React.FC = () => {
  return (
    <div className="px-8 pb-20">
        <div className="text-black">
        <h2 className="text-3xl font-semibold mb-12 text-center">{navbarData[2].label}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
            <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            link={project.link}
            />
        ))}
        </div>
    </div>
  );
};

export default Projects;
