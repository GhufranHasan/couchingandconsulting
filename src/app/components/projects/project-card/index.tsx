import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link }) => {
  return (
    <div className="bg-white text-black text-center rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <a href={link} className="text-blue-500 hover:underline">
        View Details
      </a>
    </div>
  );
};

export default ProjectCard;