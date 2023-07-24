import React from 'react';

interface VideoCardProps {
  src: string;
  type: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, type }) => {
  return (
    <div className="w-1/2 mx-2">
      <video controls preload="metadata" className="w-6/12 h-auto">
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;