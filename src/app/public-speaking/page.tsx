import React from 'react';

const PublicSpeaking: React.FC = () => {
  return (
    <div>
        <div className="relative text-black">
            <img
                src="/images/card6.jpg"
                alt="Hero Image"
                className="w-full h-64 object-cover opacity-70"
            />
            <div className="absolute inset-0 flex py-32 justify-center">
                <h2 className="text-white text-4xl font-bold">Public Speaking</h2>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">Public Speaking</h3>
                <p className="mt-4">
                    I present about my journey from a ghetto to a successful entrepreneur, having a low grade, no motivation, bad habits and friends to breaking my social circle and then going from the guy who always needed help in school to helping others with their homework. 
                </p>
                <p className="mt-4">
                    Studying at 3 universities at 3 different continents and having started many companies and had many failures on the way.
                </p>
            </div>
        </div>
        <div className="bg-gray-500 py-24">
            <div></div>
            <div className="flex justify-center mt-8 px-12">
                <div className="w-1/2 mx-2">
                    <video controls preload="metadata" className="w-7/12">
                        <source src="/videos/video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-1/2 mx-2">
                    <video controls preload="metadata" className="w-7/12">
                        <source src="/videos/video2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PublicSpeaking;
