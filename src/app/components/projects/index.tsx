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
    title: 'Course 1',
    image: '/images/card4.jpg',
    link: '/projects/project1',
  },
  {
    id: 2,
    title: 'Course 2',
    image: '/images/card5.jpg',
    link: '/projects/project2',
  },
  {
    id: 3,
    title: 'Course 3',
    image: '/images/card6.jpg',
    link: '/projects/project1',
  },
  {
    id: 4,
    title: 'Course 4',
    image: '/images/card7.jpg',
    link: '/projects/project2',
  },
  {
    id: 5,
    title: 'Course 5',
    image: '/images/card8.jpg',
    link: '/projects/project1',
  },
  {
    id: 6,
    title: 'Course 6',
    image: '/images/card9.jpg',
    link: '/projects/project2',
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
