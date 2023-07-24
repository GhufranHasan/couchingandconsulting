import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string; // Add a new prop for the short description
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link, description }) => {
  return (
    <Link href={link} className="block bg-white text-black text-center rounded-lg p-4 shadow-md">
      <Image src={image} alt={title} className="w-full h-32 object-cover mb-4" width={400} height={400} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-justify">{description}</p> {/* Display the short description */}
    </Link>
  );
};

export default ProjectCard;
