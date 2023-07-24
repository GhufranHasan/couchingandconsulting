import React from 'react';
import ProjectCard from './project-card';
import { navbarData } from '@/app/shared/LinkData';

interface ProjectData {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Coaching',
    image: '/images/card4.jpg',
    link: '/coaching',
    description: 'lorem ipsum'
  },
  {
    id: 2,
    title: 'Consulting Products',
    image: '/images/card5.jpg',
    link: '/consultingProducts',
    description: 'lorem ipsum'
  },
  {
    id: 3,
    title: 'Public Speaking',
    image: '/images/card6.jpg',
    link: '/public-speaking',
    description: 'lorem ipsum'
  },
  {
    id: 4,
    title: 'State of subsidy',
    image: '/images/card11.jpg',
    link: '/stae-of-subsidy',
    description: 'lorem ipsum'
  },
  // Add more project data as needed
];

const Projects: React.FC = () => {
  return (
    <div className="px-8 py-20 bg-gray-500">
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
            description={project.description}
            />
        ))}
      </div>
    </div>
  );
};

export default Projects;
