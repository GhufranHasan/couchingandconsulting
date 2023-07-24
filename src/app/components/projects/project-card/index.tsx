import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string; // Add a new prop for the short description
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link, description }) => {
  return (
    <a href={link} className="block bg-white text-black text-center rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p> {/* Display the short description */}
    </a>
  );
};

export default ProjectCard;
