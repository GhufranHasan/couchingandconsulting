import React from 'react';
import BrandLogosRow from '../components/brand-logos';
import Image from 'next/image';

const SOS: React.FC = () => {
    const brandLogos = [
        '/images/brand-logo1.png',
        '/images/brand-logo2.png',
        '/images/brand-logo3.png',
        '/images/brand-logo4.png',
        '/images/brand-logo5.png',
        '/images/brand-logo6.png',
      ];
  return (
    <div>
        <div className="relative text-black">
            <Image
                src="/images/card11.jpg"
                alt="Hero Image"
                className="w-full h-64 object-cover opacity-70"
                width={800}
                height={800}
            />
            <div className="absolute inset-0 flex py-32 justify-center">
                <h2 className="text-white text-4xl font-bold">State of Subsidy</h2>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">My Services</h3>
                <p className="mt-4">
                Hey there! As your approved SMV consultant and advisor, I'm here to make your life easier. Let me guide you through applying for SMV digital state subsidies at no cost. Yes, you read it right - it's free!  
                </p>
                <p className="mt-4">
                I help Danish small and medium sized businesses completely for free because I wish to position myself as your most preferred SMV advisor. 
                </p>
                <p className="mt-4">
                SMV digital will give you a voucher of 50.000 or 100.000 DKK which you can spend with an approved SMV advisor. I will make sure that the money is well spend and you get “bang for buck out” of your project with me. 
                </p>
            </div>
            <div className="max-w-4xl mx-auto flex justify-center my-8">
                <BrandLogosRow logos={brandLogos} />
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">What's SMV:Digital all about?</h3>
                <p className="mt-4">
                SMV:Digital is a cool initiative started back in 2018 to help small and medium-sized businesses, just like yours, jump on the digital bandwagon. They focus on helping companies grow, create more jobs, and make your business better, faster, and stronger.  
                </p>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">What can SMV:Digital do for you?</h3>
                <p className="mt-4">
                Well, they can offer funds for consulting services, help you invest in new tech, and even guide you through the confusing world of digital business development. Whether you're just dipping your toes into digital waters or you have a brilliant digital idea that needs a push, SMV:Digital has your back.  
                </p>
                <p className="mt-4">
                SMV:Digital supports companies to maximize their business potential. How? By helping automate those pesky routine tasks, bolster your IT security, or harness the power of data to keep your customers coming back for more. 
                </p>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">What's the timeline?</h3>
                <p className="mt-4">
                Since its birth, SMV:Digital has funded nearly 6,000 digital projects (impressive, right?) and has been extended to run until 2025. After the SVM government took office in December 2022, the initiative was passed from the Danish Business Authority to the Agency for Digitisation. So rest assured, they've got some serious experience under their belt.  
                </p>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">Who's behind it?</h3>
                <p className="mt-4">
                SMV:Digital is run by the Agency for Digitisation and the Central Denmark Business House, with a little help from all the other Business Houses. It's part of a bigger family, the Company Programme, which offers a ton of other useful services. And guess what? The project is generously financed by the Finance Act and various EU programmes.  
                </p>
            </div>
            <div className="max-w-4xl mx-auto py-8 text-justify">
                <h3 className="text-4xl font-semibold">Who's guiding the ship?</h3>
                <p className="mt-4">
                To make sure SMV:Digital stays on the right track, there's a board of business representatives, business organizations, and digital whizzes. They're the ones who keep the program sharp and beneficial for businesses like yours.   
                </p>
                <p className="mt-4">
                Feel like this is a good fit for you? Let me help you navigate the world of SMV:Digital. I'm just a click or call away!   
                </p>
            </div>
        </div>
    </div>
  );
}

export default SOS;